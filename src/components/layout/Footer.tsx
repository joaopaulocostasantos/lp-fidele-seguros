import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#111948] py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Fidele<span className="text-[#FFCC00]">.</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Consultoria estratégica em benefícios corporativos. Há mais de 15 anos sendo o parceiro de saúde de empresas que valorizam seus talentos.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-[#FFCC00] hover:text-[#111948] transition-all"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-[#FFCC00] hover:text-[#111948] transition-all"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5511999999999" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-[#FFCC00]" />
                  (11) 9 9999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@fideleseguros.com.br" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-[#FFCC00]" />
                  contato@fideleseguros.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-[#FFCC00] mt-0.5 shrink-0" />
                <span>São Paulo, SP — Brasil</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Fidele Corretora de Seguros. SUSEP nº 00000.000000/0000-00. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#21A621]" />
            <p className="text-xs text-white/30">
              Desenvolvido com excelência para o mercado corporativo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
