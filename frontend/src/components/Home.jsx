import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { CheckCircle2, Shield, TrendingUp, Users, Clock, Zap, Star, ArrowRight } from 'lucide-react';
import { benefits, testimonials, faqItems, guaranteeInfo, stats } from '../mock';

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-800">Fórmula Negócio Online</span>
          </div>
          <Button 
            onClick={scrollToCTA}
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
          >
            Quero Começar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-2 text-sm font-medium">
              Método Validado por +10.000 Alunos
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Transforme Sua Vida com um
              <span className="block text-blue-600 mt-2">Negócio Online Lucrativo</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Aprenda o sistema completo para criar, lançar e escalar seu negócio digital do zero, 
              mesmo sem experiência ou grandes investimentos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Começar Minha Transformação
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
              </Button>
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Por Que Escolher a Fórmula Negócio Online?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Um sistema completo e validado para você alcançar a liberdade financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const icons = [CheckCircle2, Zap, Users, Clock, TrendingUp, Shield];
              const Icon = icons[index % icons.length];
              
              return (
                <Card 
                  key={benefit.id} 
                  className="border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-green-500 shadow-xl bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {guaranteeInfo.title}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
                {guaranteeInfo.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Histórias de Sucesso Reais
            </h2>
            <p className="text-xl text-slate-600">
              Veja como alunos estão transformando suas vidas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-slate-600">
              Tire suas dúvidas antes de começar
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={`item-${item.id}`}
                className="bg-white border-2 border-slate-200 rounded-lg px-6 hover:border-blue-400 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-section" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto Para Mudar Sua Vida?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de alunos que já estão construindo seus negócios online lucrativos
          </p>
          
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 font-bold transition-all duration-300 hover:scale-105 shadow-2xl"
            onClick={() => window.open('https://www.hotmart.com', '_blank')}
          >
            Garantir Minha Vaga Agora
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">Suporte especializado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Fórmula Negócio Online</span>
              </div>
              <p className="text-slate-400">
                O sistema completo para criar e escalar seu negócio digital.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links Importantes</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Suporte</h3>
              <p className="text-slate-400">
                Dúvidas? Entre em contato conosco através da plataforma Hotmart.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2025 Fórmula Negócio Online. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos, nem avalia a tecnicidade e experiência daqueles que os produzem.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;