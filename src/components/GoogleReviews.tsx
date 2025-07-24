import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';

const GoogleReviews: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const reviews = [
    {
      id: 1,
      name: "Maria Santos",
      rating: 5,
      comment: "Excelente profissional! Vendeu a nossa casa em apenas 3 semanas pelo preço que queríamos. Muito transparente e sempre disponível.",
      date: "há 2 meses"
    },
    {
      id: 2,
      name: "João Silva",
      rating: 5,
      comment: "Recomendo vivamente! Acompanhou todo o processo de compra da nossa primeira casa com muita paciência e profissionalismo.",
      date: "há 1 mês"
    },
    {
      id: 3,
      name: "Ana Costa",
      rating: 5,
      comment: "Fantástico desde o primeiro contacto. Conseguiu vender o nosso apartamento acima do valor esperado. Muito satisfeita!",
      date: "há 3 semanas"
    },
    {
      id: 4,
      name: "Pedro Fernandes",
      rating: 5,
      comment: "Profissional de excelência. Vendemos e comprámos casa com a sua ajuda. Processo rápido, transparente e sem stress.",
      date: "há 1 semana"
    },
    {
      id: 5,
      name: "Carla Oliveira",
      rating: 5,
      comment: "Serviço impecável do início ao fim. Sempre muito profissional e atento aos detalhes. Recomendo sem hesitação!",
      date: "há 2 semanas"
    },
    {
      id: 6,
      name: "Rui Pereira",
      rating: 5,
      comment: "Conseguiu vender a nossa moradia num prazo recorde. Excelente comunicação e total transparência no processo.",
      date: "há 1 mês"
    }
  ];

  return (
    <div className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-foreground">EXCELENTE</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">Com base em 150+ avaliações</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-xl font-bold text-blue-600">G</span>
            <span className="text-xl font-bold text-red-500">o</span>
            <span className="text-xl font-bold text-yellow-500">o</span>
            <span className="text-xl font-bold text-blue-600">g</span>
            <span className="text-xl font-bold text-green-600">l</span>
            <span className="text-xl font-bold text-red-500">e</span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
                  <div className="bg-card p-4 rounded-lg shadow-md border h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-xs mb-2 leading-relaxed">{review.comment}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;