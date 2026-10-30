CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_name text;
BEGIN
 v_name := left(btrim(coalesce(nullif(btrim(NEW.raw_user_meta_data->>'nome'),''), nullif(btrim(NEW.raw_user_meta_data->>'full_name'),''), nullif(btrim(NEW.raw_user_meta_data->>'name'),''), split_part(NEW.email,'@',1), 'Cliente')),120);
 IF char_length(v_name) < 2 THEN v_name := 'Cliente'; END IF;
 INSERT INTO public.profiles(id,nome) VALUES(NEW.id,v_name) ON CONFLICT(id) DO NOTHING;
 INSERT INTO public.user_roles(user_id,role) VALUES(NEW.id,'cliente') ON CONFLICT(user_id,role) DO NOTHING;
 RETURN NEW;
END $$;
CREATE OR REPLACE FUNCTION public.create_customer_booking(p_service text,p_date_time timestamptz,p_location text,p_plate text DEFAULT NULL,p_model text DEFAULT NULL)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_user uuid := auth.uid(); v_service public.servicos%ROWTYPE; v_id uuid; v_vehicle uuid; v_local timestamp := p_date_time AT TIME ZONE 'America/Sao_Paulo';
BEGIN
 IF v_user IS NULL THEN RAISE EXCEPTION 'Entre na sua conta para agendar.' USING ERRCODE='42501'; END IF;
 IF NOT EXISTS(SELECT 1 FROM public.profiles WHERE id=v_user) THEN RAISE EXCEPTION 'Cadastro do cliente não encontrado.'; END IF;
 IF p_date_time IS NULL OR p_date_time <= now() OR extract(dow FROM v_local)=0 OR v_local::time NOT IN ('08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00','17:00') THEN RAISE EXCEPTION 'Escolha um horário futuro disponível, de segunda a sábado.'; END IF;
 IF p_location IS NULL OR p_location NOT IN ('Unidade Centro','Unidade Zona Sul','Atendimento em domicílio') THEN RAISE EXCEPTION 'Local inválido.'; END IF;
 SELECT * INTO v_service FROM public.servicos WHERE slug=p_service AND ativo;
 IF NOT FOUND THEN RAISE EXCEPTION 'Serviço indisponível.'; END IF;
 IF nullif(trim(p_plate),'') IS NOT NULL OR nullif(trim(p_model),'') IS NOT NULL THEN
  IF p_plate IS NULL OR p_plate !~ '^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$' OR p_model IS NULL OR char_length(trim(p_model)) NOT BETWEEN 2 AND 60 THEN RAISE EXCEPTION 'Informe placa e modelo válidos.'; END IF;
  INSERT INTO public.veiculos(usuario_id,placa,modelo) VALUES(v_user,p_plate,trim(p_model)) ON CONFLICT(usuario_id,placa) DO UPDATE SET modelo=excluded.modelo RETURNING id INTO v_vehicle;
 END IF;
 INSERT INTO public.agendamentos(usuario_id,veiculo_id,data_hora,local) VALUES(v_user,v_vehicle,p_date_time,p_location) RETURNING id INTO v_id;
 INSERT INTO public.agendamento_itens(agendamento_id,servico_id,servico_nome,preco_unitario) VALUES(v_id,v_service.id,v_service.nome,v_service.preco);
 RETURN v_id;
END $$;
REVOKE ALL ON FUNCTION public.create_customer_booking(text,timestamptz,text,text,text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.create_customer_booking(text,timestamptz,text,text,text) TO authenticated;
