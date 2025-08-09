import React from 'react';
import { Button } from '@/components/ui/button'; // Importamos o Button

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

  return <div className="py-16 bg-white"> {/* Mudei o fundo para branco como na referência */}
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
        
        {/* ========================================================== */}
        {/* SEÇÃO DE TEXTO E BOTÃO ESTILIZADA COMO NA REFERÊNCIA        */}
        {/* ========================================================== */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-10">
            Já ajudei várias famílias a <span className="font-bold text-blue-600">vender e comprar</span> os seus imóveis de forma <span className="font-bold text-blue-600">segura, simples</span> e com total <span className="font-bold text-blue-600">transparência</span> sempre pelo melhor preço, sem surpresas e com confiança.
          </p>

          <Button 
            onClick={scrollToForm}
            className="bg-blue-600 text-white font-bold text-lg md:text-xl py-6 px-10 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            QUERO UMA AVALIAÇÃO 100% GRATUITA
          </Button>
        </div>
      </div>
    </div>;
};

export default ClientPhotos;