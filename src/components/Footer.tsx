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
        <footer className="bg-gray-900 text-white/70">
            {/* Opcional: Adiciona a faixa de scroll aqui também para um look consistente */}
            <div className="bg-primary text-primary-foreground py-2 md:py-4">
                <ScrollingText texts={scrollingTexts} className="text-sm md:text-lg font-bold" />
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col gap-8">
                    
                    {/* Bloco Principal com Identidade e Contactos */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                        
                        {/* Bloco de Identidade */}
                        <div className='flex-1'>
                            <h3 className="text-xl font-bold text-white">Mário Caetano</h3>
                            <p className="text-sm">Consultor Imobiliário</p>
                        </div>

                        {/* Bloco de Contactos */}
                        <div className='flex-1 flex flex-col md:flex-row gap-4 md:gap-8 justify-center'>
                            <a href="mailto:m.caetano@remax.pt" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
                                <Mail size={16} />
                                <span>m.caetano@remax.pt</span>
                            </a>
                            <a href="tel:+351919088086" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
                                <Phone size={16} />
                                <span>+351 919 088 086</span>
                            </a>
                        </div>

                        {/* Bloco de Links Legais */}
                        <div className='flex-1 flex justify-center md:justify-end gap-6 text-sm'>
                            <a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
                            <a href="/termos-e-condicoes" className="hover:text-white transition-colors">Termos e Condições</a>
                        </div>
                    </div>

                    {/* Bloco de Redes Sociais */}
                    <div className="flex justify-center gap-6">
                        <a 
                            href="https://www.facebook.com/mariocaetanoconsultor" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                        >
                            <Facebook size={20} />
                            <span className="hidden sm:inline">Facebook</span>
                        </a>
                        <a 
                            href="https://www.instagram.com/mariocaetano_oconsultor" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                        >
                            <Instagram size={20} />
                            <span className="hidden sm:inline">Instagram</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/mariocaetano" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                        >
                            <Linkedin size={20} />
                            <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                        <a 
                            href="https://www.tiktok.com/@mariocaetanoconsultor" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-red-400 transition-colors"
                        >
                            <TikTokIcon size={20} />
                            <span className="hidden sm:inline">TikTok</span>
                        </a>
                    </div>
                </div>

                {/* Linha de Direitos Autorais */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs">
                    <p>© {new Date().getFullYear()} Mário Caetano | Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;