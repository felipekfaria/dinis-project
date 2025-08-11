import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import consultantImage2 from '@/assets/mariocaetano2.png';
import googleLogo from '@/assets/google.png';

// HOOK REUTILIZÁVEL PARA DETETAR O TAMANHO DA TELA
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

// ========================================================================
// LAYOUT PARA DESKTOP (INTOCADO)
// ========================================================================
const DesktopLayout = ({ reviews, emblaRef, scrollPrev, scrollNext }: any) => (
  <section className="py-24 bg-[#163357] overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[80%] w-[750px] z-0 hidden lg:block">
          <img 
            src={consultantImage2} 
            alt=""
            aria-hidden="true"
            className="w-full h-auto" 
          />
        </div>
        
        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-2xl font-gotham font-medium text-white leading-relaxed">
              Não acredito em soluções iguais para todos. <br />
              Cada casa tem um propósito, e cada pessoa uma razão. <br />
              O meu trabalho é <span className="text-sky-400 font-gotham font-black">ouvir, cuidar e entregar o melhor resultado.</span>
            </h2>
          </div>
          
          <div className="relative bg-[#cde4f0] p-6 sm:p-8 rounded-2xl">
            <div className="text-center mb-8 text-gray-800">
              <span className="text-2xl font-extrabold">EXCELENTE</span>
              <div className="flex justify-center my-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-gray-600 font-semibold">Com base em 560 avaliações</p>
              <div className="flex justify-center mt-3"><img src={googleLogo} alt="Avaliações do Google" className="h-8 w-auto" /></div>
            </div>

            <Button variant="outline" size="icon" className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex bg-white/80 hover:bg-white" onClick={scrollPrev}><ChevronLeft className="h-5 w-5" /></Button>
            <Button variant="outline" size="icon" className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex bg-white/80 hover:bg-white" onClick={scrollNext}><ChevronRight className="h-5 w-5" /></Button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -mx-3">
                {reviews.map((review: any) => (
                  <div key={review.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
                    <div className="bg-white p-4 rounded-lg h-full shadow-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center"><span className="text-white font-bold">{review.name.charAt(0)}</span></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{review.name}</h4>
                          <div className="flex">{[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ========================================================================
// LAYOUT APENAS PARA MOBILE (< 1024px)
// ========================================================================
const MobileLayout = ({ reviews, emblaRef }: any) => (
  <section className="py-16 bg-[#163357]">
    <div className="container mx-auto px-4">
      {/* 1. FOTO DO MÁRIO NO TOPO */}
      <div className="flex justify-center mb-8">
        {/* A ÚNICA ALTERAÇÃO ESTÁ AQUI: sem borda, sem arredondamento, apenas controlo de tamanho */}
        <img 
          src={consultantImage2} 
          alt="Consultor Imobiliário"
          className="w-full max-w-xs h-auto"
        />
      </div>

      {/* 2. TEXTO ABAIXO DA FOTO */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl md:text-2xl font-gotham font-medium text-white leading-relaxed">
          Não acredito em soluções iguais para todos. <br />
          Cada casa tem um propósito, e cada pessoa uma razão. <br />
          O meu trabalho é <span className="text-sky-400 font-gotham font-black">ouvir, cuidar e entregar o melhor resultado.</span>
        </h2>
      </div>
      
      {/* 3. CARD DO GOOGLE NO FINAL */}
      <div className="relative bg-[#cde4f0] p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto">
        <div className="text-center mb-8 text-gray-800">
          <span className="text-2xl font-extrabold">EXCELENTE</span>
          <div className="flex justify-center my-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}</div>
          <p className="text-gray-600 font-semibold">Com base em 560 avaliações</p>
          <div className="flex justify-center mt-3"><img src={googleLogo} alt="Avaliações do Google" className="h-8 w-auto" /></div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-3">
            {reviews.map((review: any) => (
              <div key={review.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] px-3">
                 <div className="bg-white p-4 rounded-lg h-full shadow-md">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center"><span className="text-white font-bold">{review.name.charAt(0)}</span></div>
                     <div>
                       <h4 className="font-semibold text-gray-800">{review.name}</h4>
                       <div className="flex">{[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                     </div>
                   </div>
                   <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);


// ========================================================================
// COMPONENTE PRINCIPAL QUE DECIDE QUAL LAYOUT RENDERIZAR
// ========================================================================
const GoogleReviews: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const reviews = [
    { id: 1, name: "Maria Santos", rating: 5, comment: "Excelente profissional! Vendeu a nossa casa em apenas 3 semanas pelo preço que queríamos...", date: "há 2 meses" },
    { id: 2, name: "João Silva", rating: 5, comment: "Recomendo vivamente! Acompanhou todo o processo de compra da nossa primeira casa com muita paciência e profissionalismo.", date: "há 1 mês" },
    { id: 3, name: "Ana Costa", rating: 5, comment: "Fantástico desde o primeiro contacto. Conseguiu vender o nosso apartamento acima do valor esperado. Muito satisfeita!", date: "há 3 semanas" },
    { id: 4, name: "Pedro Fernandes", rating: 5, comment: "Profissional de excelência. Vendemos e comprámos casa com a sua ajuda. Processo rápido e sem stress.", date: "há 1 semana" },
  ];
  
  const componentProps = { reviews, emblaRef, scrollPrev, scrollNext };

  return isDesktop 
    ? <DesktopLayout {...componentProps} /> 
    : <MobileLayout {...componentProps} />;
};

export default GoogleReviews;