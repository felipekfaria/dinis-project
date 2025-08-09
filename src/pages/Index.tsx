import React from 'react';
import { Flame, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EvaluationForm from '@/components/EvaluationForm';
import ScrollingText from '@/components/ScrollingText';
import ClientPhotos from '@/components/ClientPhotos';
import GoogleReviews from '@/components/GoogleReviews'; // Componente importado
import FAQ from '@/components/FAQ';
import consultantImage from '@/assets/mariocaetano.png';

const Index = () => {
  const scrollingTexts = [
    <span key={1} className="font-extrabold tracking-tight">O FUTURO <span className="text-[#61d6ff]">COMEÇA HOJE</span></span>,
    <span key={2} className='font-extrabold tracking-tight mx-4 opacity-70'>|</span>,
    <span key={3} className="font-extrabold tracking-tight">VENDA A SUA CASA PELO <span className="text-[#61d6ff]">MELHOR PREÇO</span></span>,
    <span key={4} className='font-extrabold tracking-tight mx-4 opacity-70'>|</span>,
    <span key={5} className="font-extrabold tracking-tight">O FUTURO <span className="text-[#61d6ff]">COMEÇA HOJE</span></span>,
    <span key={6} className='font-extrabold tracking-tight mx-4 opacity-70'>|</span>,
    <span key={7} className="font-extrabold tracking-tight">VENDA A SUA CASA PELO <span className="text-[#61d6ff]">MELHOR PREÇO</span></span>,
    <span key={8} className='font-extrabold tracking-tight mx-4 opacity-70'>|</span>
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('evaluation-form-section');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <div className="min-h-screen">
      
      <div className="bg-red-stripe text-white py-2.5 md:py-3 overflow-hidden">
        <div className="whitespace-nowrap">
          <div className="animate-scroll inline-flex">
            {[...Array(6)].map((_, i) => <span key={i} className="flex items-center text-sm md:text-base font-bold mx-6">
                AVALIAÇÃO 100% GRATUITA<span className="mx-3 opacity-50">l</span>AVALIAÇÃO 100% GRATUITA
              </span>)}
          </div>
        </div>
      </div>

      <section className="relative bg-hero-gradient flex items-center justify-center px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
            
            <div className="mb-10 lg:mb-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex items-end justify-center">
              <img src={consultantImage} alt="Consultor Imobiliário Mário Caetano" className="max-w-sm sm:max-w-md lg:max-w-2xl mx-auto w-full" />
            </div>
            
            <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                {/* ========================================================== */}
                {/* ADICIONADA A CLASSE font-gotham AO H1                    */}
                {/* ========================================================== */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight lg:text-4xl font-gotham">
                  Saiba o valor da sua casa{" "}
                  <span className="text-[hsl(var(--hero-accent))]">de forma simples, gratuita e sem complicações</span>{" "}
                  em 2025.
                </h1>
                <p className="text-base sm:text-lg text-white/80 mb-4 leading-relaxed">
                  Deixe o seu contacto e receba uma avaliação precisa da sua casa, com base no mercado atual para poder pedir o preço justo e evitar surpresas na hora de vender.
                </p>
              </div>
              
              <div id="evaluation-form-section" className="bg-black/25 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20">
                <EvaluationForm />
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-2 md:py-4">
          <ScrollingText texts={scrollingTexts} />
        </div>
      </section>

      <ClientPhotos />
      
      {/* ========================================================== */}
      {/* Componente GoogleReviews adicionado no local correto      */}
      {/* ========================================================== */}
      <GoogleReviews />

      <FAQ />

      {/*<section className="py-16 md:py-20 text-center bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra o potencial do seu imóvel hoje mesmo. A nossa análise é gratuita, rápida e sem compromissos.
          </p>
          <Button variant="cta" size="lg" onClick={scrollToForm} className="text-base sm:text-lg px-6 sm:px-8">
            QUERO A MINHA AVALIAÇÃO GRATUITA
          </Button>
        </div>
      </section>*/}

      <footer className="bg-gray-900 text-white/70">
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                <div className='flex-1'>
                    <h3 className="text-xl font-bold text-white">Mário Caetano</h3>
                    <p className="text-sm">Consultor Imobiliário</p>
                </div>
                <div className='flex-1 flex flex-col md:flex-row gap-4 md:gap-8 justify-center'>
                    <a href="mailto:geral@mariocaetano.pt" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
                        <Mail size={16} />
                        <span>geral@mariocaetano.pt</span>
                    </a>
                    <a href="tel:+351912345678" className="flex items-center justify-center gap-2 hover:text-amber-400 transition-colors">
                        <Phone size={16} />
                        <span>+351 912 345 678</span>
                    </a>
                </div>
                <div className='flex-1 flex justify-center md:justify-end gap-6 text-sm'>
                    <a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
                    <a href="/termos-e-condicoes" className="hover:text-white transition-colors">Termos e Condições</a>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs">
                <p>© {new Date().getFullYear()} Mário Caetano | Todos os direitos reservados.</p>
            </div>
        </div>
      </footer>
    </div>;
};

export default Index;