// src/components/Footer.tsx

import React from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import ScrollingText from './ScrollingText';

// Componente customizado para o ícone do TikTok
const TikTokIcon = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.347-2.016-1.347-3.306C16.394.688 16.394 0 16.394 0h-3.347s.016 7.348.016 10.454c0 2.281-1.859 4.156-4.133 4.156-2.273 0-4.133-1.875-4.133-4.156 0-2.281 1.86-4.156 4.133-4.156.305 0 .602.033.891.094V3.047a7.532 7.532 0 0 0-.891-.063C4.25 2.984.781 6.453.781 10.734s3.469 7.75 7.75 7.75 7.75-3.469 7.75-7.75V7.812a9.15 9.15 0 0 0 5.281 1.656v-3.344a6.196 6.196 0 0 1-2.241-.562z"/>
    </svg>
);

const Footer: React.FC = () => {
    const scrollingTexts = ["O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO"];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Faixa de scroll superior */}
            <div className="bg-primary text-primary-foreground py-2 md:py-4">
                <ScrollingText texts={scrollingTexts} className="text-sm md:text-lg font-bold" />
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    
                    {/* Coluna 1: Identidade */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Mário Caetano</h3>
                        <p className="text-lg text-white/80 mb-6">Consultor Imobiliário</p>
                        
                        {/* Redes Sociais */}
                        <div className="space-y-2">
                            <p className="text-sm font-semibold text-white/90 mb-4">Siga-me nas redes sociais</p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a 
                                    href="https://www.facebook.com/mariocaetanoconsultor" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={20} className="text-white" />
                                </a>
                                <a 
                                    href="https://www.instagram.com/mariocaetano_oconsultor" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} className="text-white" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/mariocaetano" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} className="text-white" />
                                </a>
                                <a 
                                    href="https://www.tiktok.com/@mariocaetanoconsultor" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-black hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="TikTok"
                                >
                                    <TikTokIcon size={20} className="text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Contactos */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold text-white mb-6">Contactos</h4>
                        <div className="space-y-4">
                            <a 
                                href="mailto:m.caetano@remax.pt" 
                                className="flex items-center justify-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                            >
                                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full group-hover:scale-110 transition-transform">
                                    <Mail size={18} className="text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-white/70">Email</p>
                                    <p className="text-white font-medium">m.caetano@remax.pt</p>
                                </div>
                            </a>
                            <a 
                                href="tel:+351919088086" 
                                className="flex items-center justify-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                            >
                                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full group-hover:scale-110 transition-transform">
                                    <Phone size={18} className="text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-white/70">Telefone</p>
                                    <p className="text-white font-medium">+351 919 088 086</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Coluna 3: Links Legais */}
                    <div className="text-center md:text-right">
                        <h4 className="text-lg font-semibold text-white mb-6">Informações Legais</h4>
                        <div className="space-y-3">
                            <a 
                                href="/politica-de-privacidade" 
                                className="block text-white/80 hover:text-white transition-colors py-2"
                            >
                                Política de Privacidade
                            </a>
                            <a 
                                href="/termos-e-condicoes" 
                                className="block text-white/80 hover:text-white transition-colors py-2"
                            >
                                Termos e Condições
                            </a>
                        </div>
                    </div>
                </div>

                {/* Linha de separação e direitos autorais */}
                <div className="mt-16 pt-8 border-t border-white/20">
                    <div className="text-center">
                        <p className="text-white/60 text-sm">
                            © {new Date().getFullYear()} Mário Caetano | Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;