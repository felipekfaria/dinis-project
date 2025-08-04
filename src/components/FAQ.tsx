import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      id: "item-1",
      question: "A avaliação é mesmo gratuita?",
      answer: "Sim, totalmente gratuita e sem qualquer compromisso. O objetivo é ajudá-lo a perceber o valor real do seu imóvel antes de tomar qualquer decisão, com total transparência."
    },
    {
      id: "item-2", 
      question: "Sou obrigado(a) a pôr o imóvel à venda depois da avaliação?",
      answer: "Não. A decisão é sempre sua. A avaliação serve apenas para o informar, sem qualquer tipo de pressão ou compromisso da sua parte."
    },
    {
      id: "item-3",
      question: "Quem faz a avaliação?",
      answer: "A avaliação é feita por mim, Mário Caetano, consultor imobiliário com mais de 5 anos de experiência e responsável por mais de 150 imóveis vendidos com sucesso. Tive o privilégio de ajudar centenas de famílias a comprar e vender casa com confiança, segurança e resultados reais. Sou reconhecido como um dos consultores de referência na zona norte de Portugal, com vários prémios da RE/MAX Portugal. Conto ainda com uma equipa especializada em marketing, fotografia e vídeo profissional, para destacar o seu imóvel da concorrência, e um vasto contacto de compradores qualificados, que procuram ativamente imóveis na região."
    },
    {
      id: "item-4",
      question: "Quanto tempo demora até receber a avaliação?",
      answer: "Na maioria dos casos, recebo os dados e entrego a avaliação em menos de 24 horas úteis. Em alguns casos específicos, posso entrar em contacto para pedir mais informações ou agendar uma visita ao imóvel."
    },
    {
      id: "item-5",
      question: "Preciso de preparar documentos ou fotos?",
      answer: "Não é obrigatório, mas se tiver fotografias, planta ou mais detalhes sobre o imóvel (como tipologia, estado de conservação ou localização exata), isso ajuda a tornar a avaliação mais precisa."
    },
    {
      id: "item-6",
      question: "Se decidir vender, o que acontece a seguir?",
      answer: "Se quiser avançar, acompanho todo o processo: desde a preparação e promoção do imóvel, com fotos, vídeos e anúncios profissionais, até à negociação com potenciais compradores e o fecho da venda com segurança e confiança."
    },
    {
      id: "item-7",
      question: "Em quanto tempo consigo vender a minha casa?",
      answer: "Cada casa é uma casa, e o tempo de venda depende de vários fatores como a localização, o estado do imóvel, o preço e o momento do mercado. No entanto, o tempo médio de venda com o meu acompanhamento ronda os 90 dias. Já tive vários casos de sucesso em apenas 10 a 30 dias, graças a estratégias bem definidas, promoção profissional e à base de compradores qualificados que tenho à disposição."
    }
  ];

  return (
    <div className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ❓ Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className={`border border-border rounded-lg px-6 ${
                  index % 2 === 0 ? 'bg-accent/10' : 'bg-secondary/20'
                }`}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  <span className={`mr-4 ${index % 2 === 0 ? 'text-primary' : 'text-secondary-foreground'}`}>              
                  </span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;