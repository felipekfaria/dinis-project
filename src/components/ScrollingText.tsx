// Exemplo de como o seu ScrollingText.tsx poderá ficar:

import React from 'react';

// MUDANÇA PRINCIPAL AQUI:
interface ScrollingTextProps {
  texts: React.ReactNode[]; // Trocamos string[] por React.ReactNode[]
  className?: string; // Mantemos a className opcional
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ texts, className }) => {
  const extendedTexts = [...texts, ...texts]; // Duplica para um loop suave

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className || ''}`}>
      <div className="inline-block animate-scroll">
        {extendedTexts.map((text, index) => (
          <span key={index} className="mx-4">
            {text} {/* Agora o React sabe renderizar os seus spans estilizados */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;