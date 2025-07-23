import React from 'react';
import { Star } from 'lucide-react';

const GoogleReviews: React.FC = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-card p-6 rounded-lg shadow-md border">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-2">{review.comment}</p>
              <p className="text-xs text-muted-foreground">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;