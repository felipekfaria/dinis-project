import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

// Componente customizado para o ícone do TikTok
const TikTokIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.347-2.016-1.347-3.306C16.394.688 16.394 0 16.394 0h-3.347s.016 7.348.016 10.454c0 2.281-1.859 4.156-4.133 4.156-2.273 0-4.133-1.875-4.133-4.156 0-2.281 1.86-4.156 4.133-4.156.305 0 .602.033.891.094V3.047a7.532 7.532 0 0 0-.891-.063C4.25 2.984.781 6.453.781 10.734s3.469 7.75 7.75 7.75 7.75-3.469 7.75-7.75V7.812a9.15 9.15 0 0 0 5.281 1.656v-3.344a6.196 6.196 0 0 1-2.241-.562z"/>
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#163357] text-white">
            <div className="container mx-auto px-4 py-8">
                
                {/* ========================================================== */}
                {/* LAYOUT PRINCIPAL AGORA É FLEX VERTICAL E CENTRALIZADO NO MOBILE */}
                {/* 'md:flex-row' e 'md:justify-between' restauram o layout de desktop */}
                {/* ========================================================== */}
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 border-b border-white/20 pb-8">
                    
                    {/* Bloco 1: Identidade e Ícones (Sempre no topo/esquerda) */}
                    {/* Centralizado no mobile com 'items-center' e alinhado à esquerda no desktop com 'md:items-start' */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-gotham font-black">Mário Caetano</h3>
                            <p className="text-base text-white/70">Consultor Imobiliário</p>
                        </div>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/mariocaetanoconsultor" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/mariocaetano_oconsultor" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/in/mariocaetano" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="https://www.tiktok.com/@mariocaetanoconsultor" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white" aria-label="TikTok"><TikTokIcon /></a>
                        </div>
                    </div>

                    {/* Bloco 2: Contactos (No meio no mobile, à direita no desktop) */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
                        <a href="mailto:m.caetano@remax.pt" className="flex items-center gap-3 text-white/90 hover:text-white">
                            <Mail size={20} />
                            <span className="font-medium">m.caetano@remax.pt</span>
                        </a>
                        <a href="tel:+351919088086" className="flex items-center gap-3 text-white/90 hover:text-white">
                            <Phone size={20} />
                            <span className="font-medium">+351 919 088 086</span>
                        </a>
                    </div>
                </div>

                {/* Linha Inferior: Direitos Autorais e Links Legais */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-center pt-6 text-sm text-white/60">
                    <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} Mário Caetano | Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</a>
                        <a href="/termos-e-condicoes" className="hover:text-white">Termos e Condições</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;