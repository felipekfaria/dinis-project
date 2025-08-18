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
                <div className="max-w-4xl mx-auto">
                    
                    {/* Seção Principal - Nome e Redes Sociais */}
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-2">Mário Caetano</h3>
                        <p className="text-xl text-white/80 mb-8">Consultor Imobiliário</p>
                        
                        {/* Redes Sociais */}
                        <div className="flex justify-center gap-4 mb-12">
                            <a 
                                href="https://www.facebook.com/mariocaetanoconsultor" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                                aria-label="Facebook"
                            >
                                <Facebook size={24} className="text-white" />
                            </a>
                            <a 
                                href="https://www.instagram.com/mariocaetano_oconsultor" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} className="text-white" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/mariocaetano" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-14 h-14 bg-blue-700 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} className="text-white" />
                            </a>
                            <a 
                                href="https://www.tiktok.com/@mariocaetanoconsultor" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-14 h-14 bg-black hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-700/30"
                                aria-label="TikTok"
                            >
                                <TikTokIcon size={24} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Contactos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                        <div className="text-center">
                            <a 
                                href="mailto:m.caetano@remax.pt" 
                                className="group inline-flex flex-col items-center gap-3 hover:text-primary transition-colors"
                            >
                                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/70 mb-1">Email</p>
                                    <p className="text-white font-medium text-lg">m.caetano@remax.pt</p>
                                </div>
                            </a>
                        </div>
                        
                        <div className="text-center">
                            <a 
                                href="tel:+351919088086" 
                                className="group inline-flex flex-col items-center gap-3 hover:text-primary transition-colors"
                            >
                                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/70 mb-1">Telefone</p>
                                    <p className="text-white font-medium text-lg">+351 919 088 086</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Links Legais */}
                    <div className="flex justify-center gap-8 mb-8">
                        <a 
                            href="/politica-de-privacidade" 
                            className="text-white/70 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white"
                        >
                            Política de Privacidade
                        </a>
                        <a 
                            href="/termos-e-condicoes" 
                            className="text-white/70 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white"
                        >
                            Termos e Condições
                        </a>
                    </div>

                    {/* Direitos autorais */}
                    <div className="text-center pt-8 border-t border-white/20">
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