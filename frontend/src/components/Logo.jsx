import React from 'react';

const Logo = ({ className = "h-16 w-16", textClassName = "text-3xl" }) => {
  return (
    <div className="flex items-center gap-4">
      <svg
        className={className}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Círculo externo com borda */}
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="#1e40af"
          stroke="#3b82f6"
          strokeWidth="3"
        />
        
        {/* Gradiente de fundo */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="url(#logoGradient)"
        />
        
        {/* Letra F estilizada */}
        <path
          d="M 40 35 L 75 35 L 75 42 L 48 42 L 48 53 L 70 53 L 70 60 L 48 60 L 48 85"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Seta de crescimento integrada */}
        <path
          d="M 68 70 L 68 85 M 68 70 L 62 76 M 68 70 L 74 76"
          stroke="url(#arrowGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Círculo de destaque */}
        <circle
          cx="80"
          cy="35"
          r="8"
          fill="#fbbf24"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        
        {/* Mini estrela no círculo */}
        <path
          d="M 80 32 L 81 34 L 83 34 L 81.5 35.5 L 82 37.5 L 80 36 L 78 37.5 L 78.5 35.5 L 77 34 L 79 34 Z"
          fill="#ffffff"
        />
      </svg>
      
      <div className="flex flex-col leading-tight">
        <span className={`${textClassName} font-bold text-white`}>
          Fórmula Negócio
        </span>
        <span className="text-base font-semibold text-blue-400 tracking-wider">
          ONLINE
        </span>
      </div>
    </div>
  );
};

export default Logo;