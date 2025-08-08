import React from 'react';
import { Flame, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EvaluationForm from '@/components/EvaluationForm';
import ScrollingText from '@/components/ScrollingText';
import ClientPhotos from '@/components/ClientPhotos';
import FAQ from '@/components/FAQ';
import consultantImage from '@/assets/mariocaetano.png';
const Index = () => {
  const scrollingTexts = ["O FUTURO COMEÇA HOJE", " l ", "VENDA A SUA CASA PELO MELHOR PREÇO", " l ", "O FUTURO COMEÇA HOJE", " l "];
  const scrollToForm = () => {
    const formElement = document.getElementById('evaluation-form-section');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen">
      
      {/* Faixa Vermelha Estratégica */}
      <div className="bg-red-stripe text-white py-2.5 md:py-3 overflow-hidden">
        <div className="whitespace-nowrap">
          <div className="animate-scroll inline-flex">
            {[...Array(6)].map((_, i) => <span key={i} className="flex items-center text-sm md:text-base font-bold mx-6">
                <Flame className="h-5 w-5 mr-3 text-yellow-300 fill-current" />
                AVALIAÇÃO 100% GRATUITA<span className="mx-3 opacity-50">l</span>AVALIAÇÃO 100% GRATUITA
              </span>)}
          </div>
        </div>
      </div>

      {/* Hero Section - Estrutura Responsiva Definitiva */}
      <section className="relative bg-hero-gradient flex items-center justify-center px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          {/* O container principal usa Grid para reposicionar os filhos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Bloco 1 (Mobile): IMAGEM - Primeiro no código = primeiro no mobile */}
            {/* No Desktop: movido para a coluna 2 */}
            <div className="mb-10 lg:mb-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex items-end justify-center">
              <img src={consultantImage} alt="Consultor Imobiliário Mário Caetano" className="max-w-xs sm:max-w-sm lg:max-w-xl mx-auto w-full" />
            </div>
            
            {/* Bloco 2 (Mobile): TEXTOS */}
            {/* No Desktop: posicionado na coluna 1, linha 1 */}
            <div className="text-center lg:text-left lg:col-start-1 lg:row-start-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Saiba o valor da sua casa de forma simples, gratuita e sem complicações em 2025.
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
                Deixe o seu contacto e receba uma avaliação precisa da sua casa, com base no mercado atual para poder pedir o preço justo e evitar surpresas na hora de vender.
              </p>
            </div>
            
            {/* Bloco 3 (Mobile): FORMULÁRIO */}
            {/* No Desktop: posicionado na coluna 1, linha 2 */}
            <div id="evaluation-form-section" className="bg-black/25 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 mt-6 lg:col-start-1 lg:row-start-2">
              <div className='text-center mb-6'>
                
                
              </div>
              <EvaluationForm />
            </div>
          </div>
        </div>

        {/* Scrolling Text (Opcional: podemos esconder isto no mobile se a página ficar muito carregada) */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-2 md:py-4 hidden sm:block">
          <ScrollingText texts={scrollingTexts} className="text-sm md:text-lg font-bold" />
        </div>
      </section>

      <ClientPhotos />
      <FAQ />

      {/* Seção Final CTA */}
      <section className="py-16 md:py-20 text-center bg-secondary/30">
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
      </section>

      {/* Rodapé (Footer) */}
      <footer className="bg-gray-900 text-white/70">
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                {/* Bloco de Identidade */}
                <div className='flex-1'>
                    <h3 className="text-xl font-bold text-white">Mário Caetano</h3>
                    <p className="text-sm">Consultor Imobiliário</p>
                </div>
                {/* Bloco de Contactos */}
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
    </div>;
};
export default Index;