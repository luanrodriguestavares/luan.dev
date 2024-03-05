import React, { ReactNode } from 'react';

interface CardProps {
  src: string;
  className?: string; // Propriedade para a classe do componente Card
  ringColorClass?: string; // Propriedade para a classe da cor do anel
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ src, className, ringColorClass, children }) => {
  return (
    <div className={className}>
      <div className={`group rounded-lg flex items-center gap-4 border bg-zinc-50 dark:bg-zinc-900 p-3`}>
        <div className={`group-hover:ring-8 ${ringColorClass} ring-opacity-50 rounded-lg overflow-hidden transition-all duration-300 ease-in-out`}>
          <img src={src} alt="Descrição da imagem" className="w-10 h-auto transition-all duration-300 ease-in-out" />
        </div>
        <div className="font-medium dark:text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;