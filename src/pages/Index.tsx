import React from 'react';
import { Button } from '@/components/ui/button';
import EvaluationForm from '@/components/EvaluationForm';
import ScrollingText from '@/components/ScrollingText';
import ClientPhotos from '@/components/ClientPhotos';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';

import consultantImage from '@/assets/mariocaetano.png';

const Index = () => {
  const scrollingTexts = ["O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO", "O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO"];
  const scrollToForm = () => {
    const formElement = document.getElementById('evaluation-form-section'); 
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen">
      {/* Red Stripe (Sem alterações) */}
      <div className="bg-red-stripe text-white py-2 md:py-3 overflow-hidden">
        <div className="whitespace-nowrap">
            <div className="animate-scroll inline-block">
                <span className="text-sm md:text-lg font-bold mx-4 md:mx-8">AVALIAÇÃO 100% GRATUITA</span>
                <span className="text-sm md:text-lg font-bold mx-4 md:mx-8">AVALIAÇÃO 100% GRATUITA</span>
                <span className="text-sm md:text-lg font-bold mx-4 md:mx-8">AVALIAÇÃO 100% GRATUITA</span>
                <span className="text-sm md:text-lg font-bold mx-4 md:mx-8">AVALIAÇÃO 100% GRATUITA</span>
            </div>
        </div>
      </div>

      {/* Hero Section - Agora Otimizada para Mobile */}
      <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          {/* O container principal agora é um Grid que vai reposicionar os seus filhos no desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* ========================================================== */}
            {/* Bloco 1 (Mobile): IMAGEM                                 */}
            {/* ========================================================== */}
            {/* No Desktop: Esta div será movida para a coluna 2, linha 1, e ocupará 2 linhas de altura. */}
            <div className="mb-10 lg:mb-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex items-end justify-center">
              <img 
                src={consultantImage} 
                alt="Consultor Imobiliário Mário Caetano"
                className="max-w-xs sm:max-w-sm lg:max-w-2xl mx-auto"
              />
            </div>
            
            {/* ========================================================== */}
            {/* Bloco 2 (Mobile): TEXTOS                                 */}
            {/* ========================================================== */}
            {/* No Desktop: Esta div irá para a coluna 1, linha 1. */}
            <div className="text-center lg:text-left lg:col-start-1 lg:row-start-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Saiba o valor da sua casa de forma simples, gratuita e sem complicações.
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Deixe o seu contacto e receba uma avaliação precisa da sua casa, 
                com base no mercado atual para poder pedir o preço justo e evitar surpresas na hora de vender.
              </p>
            </div>
            
            {/* ========================================================== */}
            {/* Bloco 3 (Mobile): FORMULÁRIO                             */}
            {/* ========================================================== */}
            {/* No Desktop: Esta div irá para a coluna 1, linha 2. */}
            <div id="evaluation-form-section" className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mt-10 lg:col-start-1 lg:row-start-2">
              <div className='text-center mb-6'>
                  <h2 className='text-2xl font-bold text-white'>Avaliação Gratuita</h2>
                  <p className='text-white/70'>Preencha os dados abaixo e receba a sua avaliação em 24h</p>
              </div>
              <EvaluationForm />
            </div>

          </div>
        </div>

        {/* Scrolling Text (Sem alterações) */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-2 md:py-4">
          <ScrollingText texts={scrollingTexts} className="text-sm md:text-lg font-bold" />
        </div>
      </section>

      {/* O resto da página continua igual... */}
      <ClientPhotos />
      <FAQ />
      {/* ... */}
    </div>;
};
export default Index;