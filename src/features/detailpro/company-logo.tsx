import logo from "@/assets/fb-logo.jpg";
import { COMPANY } from "./company";

export function CompanyLogo({ className = "size-20" }: { className?: string }) {
  return <img src={logo} alt={COMPANY.name} className={`shrink-0 object-contain rounded-lg ${className}`} />;
}