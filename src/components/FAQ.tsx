import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import consultantImage3 from '@/assets/mariocaetano3.png';

const FAQ: React.FC = () => {
  // Usei backticks (`) para a string de múltiplas linhas para melhor legibilidade
  const faqs = [
    { 
      id: "item-1", 
      question: "A avaliação é mesmo gratuita?", 
      answer: "Sim, totalmente gratuita e sem qualquer compromisso. O objetivo é ajudá-lo a perceber o valor real do seu imóvel antes de tomar qualquer decisão." 
    },
    { 
      id: "item-2", 
      question: "Sou obrigado(a) a pôr o imóvel à venda depois da avaliação?", 
      answer: "Não. A decisão é sempre sua. A avaliação serve apenas para o informar, sem qualquer tipo de pressão ou compromisso da sua parte." 
    },
    { 
      id: "item-3", 
      question: "Quem faz a avaliação?", 
      answer: `A avaliação é feita por mim, Mário Caetano, consultor imobiliário com vastos anos de experiência e responsável por mais de 150 imóveis vendidos com sucesso.

        Tive o privilégio de ajudar centenas de famílias a comprar e vender casa com confiança, segurança e resultados reais.

        Sou reconhecido como um dos consultores de referência de Portugal, com vários prémios da RE/MAX Portugal.

        Conto ainda com:

        •⁠ Uma equipa especializada em marketing, fotografia e vídeo profissional, para destacar o seu imóvel da concorrência;

        • Um vasto contacto de compradores qualificados, que procuram ativamente imóveis na região, o que facilita e acelera o processo de venda.

        Se decidir avançar, pode contar comigo e com a minha equipa em todas as etapas  do primeiro contacto até à escritura.`
    },
    { 
      id: "item-4", 
      question: "Como é feita a avaliação?", 
      answer: "Na maioria dos casos e após visitar o imóvel entrego-lhe o resultado da avaliação em menos de 24h." 
    },
    { 
      id: "item-5", 
      question: "Preciso de preparar documentos ou fotos?", 
      answer: "Não é obrigatório, mas qualquer detalhe extra (fotos, plantas) ajuda a tornar a avaliação mais precisa." 
    },
    { 
      id: "item-6", 
      question: "Se decidir vender, o que acontece a seguir?", 
      answer: "Se quiser avançar, acompanho todo o processo: desde a preparação e promoção do imóvel, com fotos, vídeos e anúncios profissionais, até à negociação com potenciais compradores e o fecho da venda com segurança e confiança." 
    },
    { 
      id: "item-7", 
      question: "Em quanto tempo consigo vender a minha casa?", 
      answer: `Cada casa é uma casa, e o tempo de venda depende de vários fatores como a localização, o estado do imóvel, o preço e o momento do mercado.

      No entanto, o tempo médio de venda com o meu acompanhamento ronda os 90 dias.

      Já tive vários casos de sucesso em apenas 10 a 30 dias, graças a estratégias bem definidas, promoção profissional e à base de compradores qualificados que tenho à disposição.

      O mais importante é fazer tudo bem desde o início — e é isso que eu e a minha equipa garantimos.` 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-12">

          <div className="flex-shrink-0 w-full lg:w-auto">
            <img 
              src={consultantImage3} 
              alt="Consultor Mário Caetano a apresentar"
              loading="lazy"
              className="block w-full sm:max-w-sm md:max-w-md lg:w-auto lg:max-w-lg h-auto mx-auto lg:mx-0"
            />
          </div>

          <div className="w-full max-w-lg">
            
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="bg-[#0d1b2a] rounded-lg border-none"
                >
                  <AccordionTrigger className="w-full text-white font-gotham font-black justify-center text-lg text-center py-4 px-6 hover:no-underline [&>svg]:hidden">
                    {faq.question}
                  </AccordionTrigger>

                  {/* ALTERAÇÃO APLICADA AQUI: 
                    - whitespace-pre-line: Preserva as quebras de linha da string.
                    - text-left: Alinha o texto à esquerda para melhor legibilidade.
                  */}
                  <AccordionContent className="px-6 pb-4 text-gray-300 text-left whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>  
    </section>
  );
};

export default FAQ;