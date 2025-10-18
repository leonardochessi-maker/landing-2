import React from 'react';

const Logo = ({ className = "h-10 w-10", textClassName = "text-2xl" }) => {
  return (
    <div className="flex items-center gap-3">
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Escudo exterior */}
        <path
          d="M50 5 L85 20 L85 50 Q85 75 50 95 Q15 75 15 50 L15 20 Z"
          fill="#1e40af"
          stroke="#1e3a8a"
          strokeWidth="2"
        />
        
        {/* Escudo interno com gradiente */}
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        <path
          d="M50 12 L78 24 L78 50 Q78 70 50 87 Q22 70 22 50 L22 24 Z"
          fill="url(#shieldGradient)"
        />
        
        {/* Símbolo de crescimento - seta ascendente estilizada */}
        <path
          d="M50 35 L50 65 M50 35 L38 47 M50 35 L62 47"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Linha de base representando fundação */}
        <line
          x1="35"
          y1="70"
          x2="65"
          y2="70"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
        />
        
        {/* Estrela de excelência */}
        <path
          d="M50 22 L52 28 L58 28 L53 32 L55 38 L50 34 L45 38 L47 32 L42 28 L48 28 Z"
          fill="#fbbf24"
          stroke="#f59e0b"
          strokeWidth="0.5"
        />
      </svg>
      
      <div className="flex flex-col leading-tight">
        <span className={`${textClassName} font-bold text-slate-800`}>
          Fórmula Negócio
        </span>
        <span className="text-sm font-semibold text-blue-600 tracking-wide">
          ONLINE
        </span>
      </div>
    </div>
  );
};

export default Logo;