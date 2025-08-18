import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import consultantImage2 from '@/assets/mariocaetano2.png';
import googleLogo from '@/assets/google.png';

// Imports dos novos avatares
import fikeAvatar from '@/assets/fike.png';
import tiagoAvatar from '@/assets/Tiago-brava.png';
import fabiaAvatar from '@/assets/fabia-silva.png';
import luisAvatar from '@/assets/luis-areal.png';
import magdaAvatar from '@/assets/magda-faria.png';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

// ========================================================================
// NOVO SUB-COMPONENTE PARA O CARD DE AVALIAÇÃO COM A NOVA LÓGICA
// ========================================================================
const ReviewCard = ({ review }: { review: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 110;
  const isLongComment = review.comment.length > characterLimit;

  return (
    <div className="bg-white p-4 rounded-lg h-full shadow-md flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
          {review.avatar ? (
            <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white font-bold">{review.name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{review.name}</h4>
          <div className="flex items-center gap-1.5">
            <div className="flex">{[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
            <CheckCircle2 className="w-4 h-4 text-blue-500 fill-white" />
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <p className="text-sm text-gray-600 leading-relaxed">
          {isLongComment && !isExpanded
            ? `${review.comment.substring(0, characterLimit)}...`
            : review.comment}
        </p>
      </div>
      
      {isLongComment && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="text-xs text-blue-600 font-semibold mt-2 self-start hover:underline"
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </button>
      )}
    </div>
  );
};


// ========================================================================
// LAYOUT PARA DESKTOP
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
                    <ReviewCard review={review} />
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
// LAYOUT APENAS PARA MOBILE (COM A NOVA BARRA DE PROGRESSO)
// ========================================================================
const MobileLayout = ({ reviews, emblaRef, scrollSnaps, selectedIndex }: any) => (
  <section className="py-16 bg-[#163357]">
    <div className="container mx-auto px-4">
      <div className="flex justify-center mb-8">
        <img 
          src={consultantImage2} 
          alt="Consultor Imobiliário"
          className="w-full max-w-xs h-auto"
        />
      </div>

      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl md:text-2xl font-gotham font-medium text-white leading-relaxed">
          Não acredito em soluções iguais para todos. <br />
          Cada casa tem um propósito, e cada pessoa uma razão. <br />
          O meu trabalho é <span className="text-sky-400 font-gotham font-black">ouvir, cuidar e entregar o melhor resultado.</span>
        </h2>
      </div>
      
      <div className="relative bg-[#cde4f0] p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto">
        <div className="text-center mb-8 text-gray-800">
          <span className="text-2xl font-extrabold">EXCELENTE</span>
          <div className="flex justify-center my-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}</div>
          <p className="text-gray-600 font-semibold">Com base em 560 avaliações</p>
          <div className="flex justify-center mt-3"><img src={googleLogo} alt="Avaliações do Google" className="h-8 w-auto" /></div>
        </div>

        <div className="overflow-hidden mt-4" ref={emblaRef}>
          <div className="flex -mx-3">
            {reviews.map((review: any) => (
              <div key={review.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] px-3">
                 <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index: number) => (
              <div 
                key={index}
                className={`w-6 h-1 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'bg-gray-700 w-12' : 'bg-gray-400 opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);


// ========================================================================
// COMPONENTE PRINCIPAL (COM A NOVA LÓGICA PARA A BARRA)
// ========================================================================
const GoogleReviews: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const reviews = [
    { id: 1, name: "Helena Costa", rating: 5, comment: "O Mário foi um consultor muito prestável na compra do meu apartamento e do meu namorado. Além de saber exatamente o que procurávamos mostrou-se sempre disponível para toda e qualquer dúvida. Recomendo plenamente o seu serviço.", avatar: null },
    { id: 2, name: "Fike", rating: 5, comment: "Gostei da disponibilidade 😃", avatar: fikeAvatar },
    { id: 3, name: "Tiago Brava", rating: 5, comment: "Confiança e dedicação!", avatar: tiagoAvatar },
    { id: 4, name: "Fábia Silva", rating: 5, comment: "Serviço 5 estrelas.", avatar: fabiaAvatar },
    { id: 5, name: "Luís Areal", rating: 5, comment: "⭐️⭐️⭐️⭐️⭐️", avatar: luisAvatar },
    { id: 6, name: "Magda Faria", rating: 5, comment: "⭐️⭐️⭐️⭐️⭐️", avatar: magdaAvatar }
  ];
  
  const componentProps = { reviews, emblaRef, scrollPrev, scrollNext, scrollSnaps, selectedIndex };

  return isDesktop 
    ? <DesktopLayout {...componentProps} /> 
    : <MobileLayout {...componentProps} />;
};

export default GoogleReviews;