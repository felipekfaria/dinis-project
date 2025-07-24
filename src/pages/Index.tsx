import React from 'react';
import { Button } from '@/components/ui/button';
import EvaluationForm from '@/components/EvaluationForm';
import ScrollingText from '@/components/ScrollingText';
import ClientPhotos from '@/components/ClientPhotos';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';
const Index = () => {
  const scrollingTexts = ["O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO", "O FUTURO COMEÇA HOJE", "VENDA A SUA CASA PELO MELHOR PREÇO"];
  const scrollToForm = () => {
    const formElement = document.getElementById('evaluation-form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen">
      {/* Red Stripe */}
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
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Saiba o valor da sua casa de forma simples, gratuita e sem complicações em 2025.
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Deixe o seu contacto e receba uma avaliação precisa da sua casa, 
                com base no mercado atual para poder pedir o preço justo e evitar surpresas na hora de vender.
              </p>
              
              <Button variant="cta" size="lg" onClick={scrollToForm} className="text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 w-full md:w-auto">
                QUERO UMA AVALIAÇÃO 100% GRATUITA
              </Button>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-2xl border border-white/20" id="evaluation-form">
              <EvaluationForm />
            </div>
          </div>
        </div>

        {/* Scrolling Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-2 md:py-4">
          <ScrollingText texts={scrollingTexts} className="text-sm md:text-lg font-bold" />
        </div>
      </section>

      {/* Client Photos Section */}
      <ClientPhotos />

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-center">
        <div className="container mx-auto px-4">
          <Button variant="cta" size="lg" onClick={scrollToForm} className="text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 w-full md:w-auto">
            QUERO UMA AVALIAÇÃO 100% GRATUITA
          </Button>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-hero-gradient text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
            Pronto para descobrir o valor real da sua casa?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Receba uma avaliação gratuita e profissional em menos de 24 horas, 
            sem qualquer compromisso da sua parte.
          </p>
          <Button variant="cta" size="lg" onClick={scrollToForm} className="text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 w-full md:w-auto">
            QUERO UMA AVALIAÇÃO 100% GRATUITA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-lg font-medium">
            © 2025 Mário Caetano - Consultor Imobiliário RE/MAX
          </p>
          <div className="mt-4 bg-primary text-primary-foreground py-2">
            <ScrollingText texts={scrollingTexts} className="text-sm font-medium" />
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;