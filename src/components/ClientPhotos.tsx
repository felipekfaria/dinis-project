import React from 'react';
import client1 from '@/assets/client-1.jpg';
import client2 from '@/assets/client-2.jpg';
import client3 from '@/assets/client-3.jpg';
import client4 from '@/assets/client-4.jpg';

const ClientPhotos: React.FC = () => {
  const clients = [
    { id: 1, image: client1, name: "Cliente Satisfeito" },
    { id: 2, image: client2, name: "Família Feliz" },
    { id: 3, image: client3, name: "Cliente Premium" },
    { id: 4, image: client4, name: "Jovem Profissional" }
  ];

  return (
    <div className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div key={client.id} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{client.name}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg text-foreground mb-8">
            Já ajudei várias famílias a vender e comprar os seus imóveis de forma segura, 
            simples e com total transparência sempre pelo melhor preço, sem surpresas e com confiança.
          </p>
          
          <div className="bg-card p-8 rounded-xl shadow-lg border">
            <p className="text-xl text-foreground font-medium mb-6">
              Não acredito em soluções iguais para todos. Cada casa tem um propósito, 
              e cada pessoa uma razão. O meu trabalho é ouvir, cuidar e entregar o melhor resultado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPhotos;