import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Card } from './ui/card';

const VideoPlayer = ({ videoUrl, placeholder = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder padrão se não houver URL
  const defaultPlaceholder = "https://via.placeholder.com/800x450/1e40af/ffffff?text=Adicione+seu+v%C3%ADdeo+aqui";

  if (placeholder && !videoUrl) {
    return (
      <Card className="relative w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden shadow-2xl border-4 border-slate-700">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
            <Play className="h-12 w-12 text-white ml-1" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center">Vídeo de Apresentação</h3>
          <p className="text-slate-300 text-center max-w-md">
            Assista ao vídeo e descubra como a Fórmula Negócio Online pode transformar sua vida
          </p>
          <div className="mt-6 px-6 py-2 bg-slate-700 rounded-lg">
            <p className="text-sm text-slate-400">Adicione seu link de vídeo do YouTube ou Vimeo</p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-blue-400 rounded-lg rotate-12"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-blue-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-blue-400 rounded-lg rotate-45"></div>
        </div>
      </Card>
    );
  }

  // Se houver URL de vídeo, renderizar iframe
  return (
    <Card className="relative w-full aspect-video overflow-hidden shadow-2xl border-4 border-slate-200">
      <iframe
        className="w-full h-full"
        src={videoUrl}
        title="Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Card>
  );
};

export default VideoPlayer;