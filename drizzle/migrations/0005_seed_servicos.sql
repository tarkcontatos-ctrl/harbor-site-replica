INSERT INTO public.servicos (slug, nome, descricao, preco, duracao_min) VALUES
('lavagem', 'Lavagem completa', 'Lavagem técnica com espuma ativa, descontaminação de rodas e secagem com microfibra sem riscos.', 120, 90),
('higienizacao', 'Higienização interna', 'Limpeza profunda de bancos, carpetes e teto, hidratação de couro e eliminação de odores.', 280, 240),
('polimento', 'Polimento de carroceria', 'Correção de riscos e marcas, recuperando o brilho e a profundidade da pintura original.', 650, 480),
('ceramica', 'Proteção cerâmica', 'Camada cerâmica que repele água e sujeira, protegendo a pintura por até 3 anos.', 1400, 960)
ON CONFLICT (slug) DO NOTHING;