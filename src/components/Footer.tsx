// src/components/Footer.tsx

import React from 'react';
import { Mail, Phone } from 'lucide-react'; // Ícones para um toque profissional
import ScrollingText from './ScrollingText'; // Reutilizamos o componente de scroll

const Footer: React.FC = () => {
    // Reutilizamos a mesma lista de textos ou podemos criar uma nova
    const scrollingTexts = ["O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO"];

    return (
        <footer className="bg-gray-900 text-white/70">
            {/* Opcional: Adiciona a faixa de scroll aqui também para um look consistente */}
            <div className="bg-primary text-primary-foreground py-2 md:py-4">
                <ScrollingText texts={scrollingTexts} className="text-sm md:text-lg font-bold" />
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    
                    {/* Bloco de Identidade */}
                    <div className='flex-1'>
                        <h3 className="text-xl font-bold text-white">Mário Caetano</h3>
                        <p className="text-sm">Consultor Imobiliário</p>
                    </div>

                    {/* Bloco de Contactos (Opcional mas recomendado para confiança) */}
                    <div className='flex-1 flex flex-col md:flex-row gap-4 md:gap-8 justify-center'>
                        <a href="mailto:seu.email@exemplo.com" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
                            <Mail size={16} />
                            <span>seu.email@exemplo.com</span>
                        </a>
                        <a href="tel:+3519xxxxxxx" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
                            <Phone size={16} />
                            <span>+351 9xx xxx xxx</span>
                        </a>
                    </div>

                    {/* Bloco de Links Legais */}
                    <div className='flex-1 flex justify-center md:justify-end gap-6 text-sm'>
                        <a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="/termos-e-condicoes" className="hover:text-white transition-colors">Termos e Condições</a>
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