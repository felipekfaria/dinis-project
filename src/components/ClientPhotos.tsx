import React from 'react';

import newClient1 from '@/assets/474625330_1429740884668950_8305339077519804079_n.jpg';
import newClient2 from '@/assets/491222308_1101358008684921_2827100385038073306_n.jpg';
import newClient3 from '@/assets/491830053_1101363428684379_1585569211937320176_n.jpg';
import newClient4 from '@/assets/512655082_1157126336441421_7653544097145515534_n.jpg';
import newClient5 from '@/assets/WhatsAppimage.jpeg';

const ClientPhotos: React.FC = () => {
  const clients = [
    { id: 1, image: newClient1, alt: "Resultado de cliente 1", isWide: true, isFeaturedMobile: true },
    { id: 2, image: newClient2, alt: "Resultado de cliente 2", isWide: false },
    { id: 3, image: newClient3, alt: "Resultado de cliente 3", isWide: false },
    { id: 4, image: newClient4, alt: "Resultado de cliente 4", isWide: true },
    { id: 5, image: newClient5, alt: "Resultado de cliente 5", isWide: false },
  ];

  return (
    <div className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        
        {/* ========================================================== */}
        {/* MELHORIA 2: Título Estratégico para a Prova Social        */}
        {/* ========================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados Reais, Vidas Transformadas
          </h2>
          <p className="text-lg text-muted-foreground">
            Junte-se às dezenas de famílias que confiaram em nós para alcançar o melhor negócio, com segurança e sem complicações.
          </p>
        </div>

        {/* A Galeria (sem alterações) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto items-start">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className={`
                ${!client.isWide ? 'aspect-[3/4]' : ''}
                ${client.isFeaturedMobile ? 'col-span-2 lg:col-span-1' : ''} 
                rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-lg 
                transform hover:scale-105 transition-transform duration-300
              `}
            >
              <img
                src={client.image}
                alt={client.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* O Texto "Eu não acredito..." (sem alterações) */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
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