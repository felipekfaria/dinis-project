import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import consultantImage3 from '@/assets/mariocaetano3.png';

const FAQ: React.FC = () => {
  const faqs = [
    { id: "item-1", question: "A avaliação é mesmo gratuita?", answer: "Sim, totalmente gratuita e sem qualquer compromisso. O objetivo é ajudá-lo a perceber o valor real do seu imóvel antes de tomar qualquer decisão." },
    { id: "item-2", question: "Sou obrigado(a) a pôr o imóvel à venda depois da avaliação?", answer: "Não. A decisão é sempre sua. A avaliação serve apenas para o informar, sem qualquer tipo de pressão ou compromisso da sua parte." },
    { id: "item-3", question: "Quem faz a avaliação?", answer: "A avaliação é feita por mim, Mário Caetano, consultor imobiliário com mais de 5 anos de experiência e responsável por mais de 150 imóveis vendidos com sucesso." },
    { id: "item-4", question: "Quanto tempo demora até receber a avaliação?", answer: "Na maioria dos casos, recebo os dados e entrego a avaliação em menos de 24 horas úteis." },
    { id: "item-5", question: "Preciso de preparar documentos ou fotos?", answer: "Não é obrigatório, mas qualquer detalhe extra (fotos, plantas) ajuda a tornar a avaliação mais precisa." },
    { id: "item-6", question: "Se decidir vender, o que acontece a seguir?", answer: "Se quiser avançar, acompanho todo o processo: desde a preparação e promoção do imóvel, até à negociação e fecho da venda com segurança." },
    { id: "item-7", question: "Em quanto tempo consigo vender a minha casa?", answer: "O tempo de venda depende de vários fatores. No entanto, o tempo médio com o meu acompanhamento ronda os 90 dias, com vários casos de sucesso em menos de 30 dias." },
  ];

  return (
    // A secção principal é relativa para ser o ponto de referência.
    <section className="relative py-20 bg-white">
      {/* ========================================================== */}
      {/* 1. IMAGEM AGORA FICA FORA DO FLUXO NORMAL DO CONTEÚDO      */}
      {/* ========================================================== */}
      <img 
        src={consultantImage3} 
        alt="" // Decorativa
        aria-hidden="true"
        // No desktop ('lg'), fica fixa no canto esquerdo. Diminuí um pouco o tamanho para max-w-md
        className="hidden lg:block absolute left-0 bottom-0 w-auto h-auto max-w-2xl z-0"
      />
      
      <div className="container mx-auto px-4">
        {/* ========================================================== */}
        {/* 2. CONTEÚDO CENTRALIZADO SEMPRE                          */}
        {/* ========================================================== */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              PERGUNTAS FREQUENTES
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-[#0d1b2a] rounded-lg border-none"
              >
                <AccordionTrigger className="w-full text-white font-semibold text-lg py-4 px-6 hover:no-underline flex justify-center">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;