'use client';

import { BarChart3, Calculator, DollarSign, RefreshCcw, MessageCircle, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('features');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      title: 'Продажи',
      description: 'Показывает количество проданных товаров и общий доход',
      icon: <BarChart3 className='h-6 w-6 text-red-600' />,
    },
    {
      title: 'Комиссия',
      description: 'Рассчитывает комиссию Kaspi, чтобы вы понимали, сколько зарабатываете в моменте',
      icon: <Calculator className='h-6 w-6 text-red-600' />,
    },
    {
      title: 'Чистая прибыль',
      description: 'После вычета всех затрат видно, сколько реально заработано',
      icon: <DollarSign className='h-6 w-6 text-red-600' />,
    },
    {
      title: 'Управление возвратами',
      description:
        'Отслеживание новых заявок, доставки, решений, споров и закрытых заявок с возможностью добавления комментариев',
      icon: <RefreshCcw className='h-6 w-6 text-red-600' />,
    },
    {
      title: 'WhatsApp интеграция',
      description: 'Автоматические рассылки клиентам для повышения продаж и положительных отзывов',
      icon: <MessageCircle className='h-6 w-6 text-red-600' />,
    },
    {
      title: 'Автоматические накладные',
      description: 'Автоматическое формирование накладных для всех заказов',
      icon: <FileText className='h-6 w-6 text-red-600' />,
    },
  ];

  return (
    <section id='features' className='bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className='text-2xl text-black font-bold mb-2'>Ключевые функции</h2>
          <p className='text-gray-600 max-w-xl mx-auto'>
            Все необходимые инструменты для управления вашим Kaspi магазином
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-4 hover:shadow-red-glow transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className='mb-3 inline-block'>{feature.icon}</div>
              <h3 className='text-lg font-medium mb-2 text-black'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 bg-white p-6 border border-gray-100 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <h3 className='text-xl font-bold mb-4 text-black'>Расширенное управление возвратами</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {[
              { title: 'Новые заявки', desc: 'Обработка новых заявок на возврат' },
              { title: 'На доставке', desc: 'Отслеживание возвратов в пути' },
              { title: 'Ожидает решения', desc: 'Заявки на рассмотрении' },
              { title: 'Споры', desc: 'Управление спорными ситуациями' },
              { title: 'Закрытые заявки', desc: 'История завершенных возвратов' },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-3 bg-gray-50 hover:bg-gray-100 transition-colors ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                <h4 className='font-medium mb-1 text-black'>{item.title}</h4>
                <p className='text-sm text-gray-600'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
