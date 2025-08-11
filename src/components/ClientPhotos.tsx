import React from 'react';
import { Button } from '@/components/ui/button';

// Imports das suas imagens
import newClient1 from '@/assets/474625330_1429740884668950_8305339077519804079_n.jpg';
import newClient2 from '@/assets/491222308_1101358008684921_2827100385038073306_n.jpg';
import newClient3 from '@/assets/491830053_1101363428684379_1585569211937320176_n.jpg';
import newClient4 from '@/assets/512655082_1157126336441421_7653544097145515534_n.jpg';
import newClient5 from '@/assets/WhatsAppimage.jpeg';

const ClientPhotos: React.FC = () => {
  const clients = [{
    id: 1,
    image: newClient1,
    alt: "Resultado de cliente 1",
    isWide: true,
    isFeaturedMobile: true
  }, {
    id: 2,
    image: newClient2,
    alt: "Resultado de cliente 2",
    isWide: false
  }, {
    id: 3,
    image: newClient3,
    alt: "Resultado de cliente 3",
    isWide: false
  }, {
    id: 4,
    image: newClient4,
    alt: "Resultado de cliente 4",
    isWide: true
  }, {
    id: 5,
    image: newClient5,
    alt: "Resultado de cliente 5",
    isWide: false
  }];

  // Função de scroll suave para o botão
  const scrollToForm = () => {
    const formElement = document.getElementById('evaluation-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Galeria de Fotos */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto items-start">
          {clients.map(client => <div key={client.id} className={`
                ${!client.isWide ? 'aspect-[3/4]' : ''}
                ${client.isFeaturedMobile ? 'col-span-2 lg:col-span-1' : ''} 
                rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-lg 
                transform hover:scale-105 transition-transform duration-300
              `}>
              <img src={client.image} alt={client.alt} className="w-full h-full object-cover" />
            </div>)}
        </div>
        
        <div className="text-center mt-16 max-w-3xl mx-auto">
          {/* ========================================================== */}
          {/* ALTERAÇÃO 1: Adicionada a fonte Gotham ao texto.           */}
          {/* ========================================================== */}
          <p className="text-xl md:text-2xl text-gray-900 font-gotham font-medium leading-relaxed mb-10">
            Já ajudei várias famílias a <span className="font-gotham font-black text-[#000EFF]">vender e comprar</span> os seus imóveis de forma <span className="font-gotham font-black text-[#000EFF]">segura, simples</span> e com total <span className="font-gotham font-black text-[#000EFF]">transparência</span> sempre pelo melhor preço, sem surpresas e com confiança.
          </p>

          {/* ========================================================== */}
          {/* ALTERAÇÃO 2: Adicionada a fonte e cor ao botão.            */}
          {/* ========================================================== */}
          <Button 
            onClick={scrollToForm}
            className="w-full md:w-auto inline-flex items-center justify-center font-gotham font-black text-base sm:text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            QUERO UMA AVALIAÇÃO 100% GRATUITA
          </Button>
        </div>
      </div>
    </div>;
};

export default ClientPhotos;