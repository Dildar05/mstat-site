'use client';

import { BarChart3, MessageCircle, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const steps = [
    {
      title: 'Подключение',
      description: 'Подключите ваш Kaspi магазин за 2 минуты',
      icon: <BarChart3 className='h-6 w-6 text-red-600' />,
    },
    {
      title: 'Анализ',
      description: 'Отслеживайте продажи, комиссии и прибыль',
      icon: <DollarSign className='h-6 w-6 text-red-600' />,
    },
    {
      title: 'Коммуникация',
      description: 'Используйте WhatsApp для связи с клиентами',
      icon: <MessageCircle className='h-6 w-6 text-red-600' />,
    },
  ];

  return (
    <section id='how-it-works' className='container mx-auto px-4 py-16'>
      <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className='text-2xl font-bold mb-2 text-black'>Как это работает</h2>
        <p className='text-gray-600 max-w-xl mx-auto'>
          Наша платформа помогает отслеживать все ключевые показатели вашего Kaspi магазина
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-black'>
        {steps.map((item, index) => (
          <div
            key={index}
            className={`p-4 hover:shadow-md transition-all duration-300 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
          >
            <div className='flex justify-center mb-3'>
              <div className='animate-pulse'>{item.icon}</div>
            </div>
            <h3 className='text-lg font-medium mb-2 text-center'>{item.title}</h3>
            <p className='text-gray-600 text-center'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
