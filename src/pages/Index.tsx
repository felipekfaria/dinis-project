import React from 'react';
import { Button } from '@/components/ui/button';
import EvaluationForm from '@/components/EvaluationForm';
import ScrollingText from '@/components/ScrollingText';
import ClientPhotos from '@/components/ClientPhotos';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';

// A importação da imagem continua correta
import consultantImage from '@/assets/4.png';

const Index = () => {
  const scrollingTexts = ["O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO", "O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO"];
  const scrollToForm = () => {
    // Apontamos o scroll para o novo local do formulário
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
            <span className="text-sm md:text-lg font-bold mx-4 md:mx-8">AVALIAÇÃO 100% GRATUITA</span>
            <span className="text-sm md:text-lg font-bold mx-4 md:mx-8">AVALIAÇÃO 100% GRATUITA</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center px-4 py-8">
        {/* Aumentei o max-w- para a seção ter mais espaço lateral */}
        <div className="container mx-auto max-w-7xl"> 
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* ========================================================== */}
            {/* Coluna Esquerda: Agora contém o texto E o formulário       */}
            {/* ========================================================== */}
            <div id="evaluation-form-section"> {/* Adicionei o ID aqui para o scroll */}
              <div className="text-center lg:text-left">
                <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Saiba o valor da sua casa de forma simples, gratuita e sem complicações em 2025.
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                  Deixe o seu contacto e receba uma avaliação precisa da sua casa, 
                  com base no mercado atual para poder pedir o preço justo e evitar surpresas na hora de vender.
                </p>
                
                {/* O Botão e a Imagem que estavam aqui foram removidos */}
              </div>

              {/* O formulário foi movido para cá, para a coluna da esquerda */}
              <div className="mt-8">
                <EvaluationForm />
              </div>
            </div>

            {/* ========================================================== */}
            {/* Coluna Direita: Agora contém APENAS a imagem              */}
            {/* ========================================================== */}
            <div className="hidden lg:flex items-center justify-center">
              <img 
                src={consultantImage} 
                alt="Consultor Imobiliário Mário Caetano"
                className="max-w-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Scrolling Text (Sem alterações) */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-2 md:py-4">
          <ScrollingText texts={scrollingTexts} className="text-sm md:text-lg font-bold" />
        </div>
      </section>

      {/* Todo o resto da página continua igual */}
      <ClientPhotos />
      <section className="py-12 md:py-16 bg-primary text-center">
        {/* ... */}
      </section>
      <GoogleReviews />
      <FAQ />
      <section className="py-16 md:py-20 bg-hero-gradient text-center">
        {/* ... */}
      </section>
      <footer className="bg-primary text-primary-foreground py-6 md:py-8">
        {/* ... */}
      </footer>
    </div>;
};
export default Index;