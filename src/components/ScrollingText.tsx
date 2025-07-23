import React from 'react';

interface ScrollingTextProps {
  texts: string[];
  className?: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ texts, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex animate-scroll">
        {[...texts, ...texts].map((text, index) => (
          <span key={index} className="flex-shrink-0 px-8 text-sm font-medium">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;