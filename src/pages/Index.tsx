import React from 'react';
// import { Button } from '@/components/ui/button'; // O botão de scroll foi removido
import EvaluationForm from '@/components/EvaluationForm';
import ScrollingText from '@/components/ScrollingText';
import ClientPhotos from '@/components/ClientPhotos';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';

import consultantImage from '@/assets/mariocaetano.png';

const Index = () => {
  const scrollingTexts = ["O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO", "O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO"];
  // A função scrollToForm foi removida pois não há mais botão de scroll

  return (
    <div className="min-h-screen">
      {/* Red Stripe */}
      <div className="bg-red-stripe text-white py-2 md:py-3 overflow-hidden">
        {/* ... */}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Coluna Esquerda: Conteúdo Estratégico */}
            <div>
              <div className="text-center lg:text-left animate-fade-in-up">
                
                {/* 1. H1 REFINADO: Foco no benefício máximo */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Venda a sua casa pelo
                  <span className="bg-gradient-to-r from-amber-300 to-yellow-500 text-transparent bg-clip-text"> valor máximo</span>, sem complicações.
                </h1>
                
                {/* 2. SUBTÍTULO REFINADO: Foco na confiança e na ausência de risco */}
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                  Receba uma análise estratégica e gratuita para tomar a melhor decisão, <span className="font-semibold text-white">sem qualquer compromisso</span>.
                </p>
              </div>

              {/* 3. CARD DO FORMULÁRIO REFINADO: Foco na ação positiva */}
              <div id="evaluation-form-section" className="bg-black/25 backdrop-blur-lg p-8 rounded-2xl border border-white/20 animate-fade-in-up animation-delay-300">
                <div className='text-center mb-6'>
                    <h2 className='text-2xl font-bold text-white'>O primeiro passo para um bom negócio.</h2>
                    <p className='text-white/70'>É rápido, gratuito e 100% confidencial.</p>
                </div>
                <EvaluationForm />
              </div>
            </div>

            {/* Coluna Direita: Imagem */}
            <div className="hidden lg:flex items-end justify-center animate-fade-in animation-delay-500">
              <img 
                src={consultantImage} 
                alt="Consultor Imobiliário Mário Caetano"
                className="max-w-xl w-full" 
              />
            </div>
          </div>
        </div>

        {/* Scrolling Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-2 md:py-4">
          <ScrollingText texts={scrollingTexts} className="text-sm md:text-lg font-bold" />
        </div>
      </section>

      <ClientPhotos />
      <FAQ />
    </div>
  );
};

export default Index;