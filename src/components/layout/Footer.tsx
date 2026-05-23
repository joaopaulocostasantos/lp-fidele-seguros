import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-slate-950 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Fidele<span className="text-blue-400">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Consultoria estratégica em benefícios corporativos. Há mais de 15 anos sendo o parceiro de saúde de empresas que valorizam seus talentos.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5511999999999" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-blue-400" />
                  (11) 9 9999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@fideleseguros.com.br" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-blue-400" />
                  contato@fideleseguros.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <span>São Paulo, SP — Brasil</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Fidele Corretora de Seguros. SUSEP nº 00000.000000/0000-00. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-600">
            Desenvolvido com excelência para o mercado corporativo.
          </p>
        </div>
      </div>
    </footer>
  );
}
