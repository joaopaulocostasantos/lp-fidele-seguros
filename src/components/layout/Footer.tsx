import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo-fidele-seguros.svg"
                alt="Fidele Seguros"
                width={110}
                height={43}
                unoptimized
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Especialistas em planos de saúde para famílias. Há mais de 15 anos ajudando pessoas a entenderem o que pagam e encontrarem o plano certo.
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
              Desenvolvido com dedicação para famílias que merecem clareza na saúde.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
