'use client';

import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Pricing() {
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

    const element = document.getElementById('pricing');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    'Отслеживание продаж и доходов',
    'Расчет комиссии Kaspi',
    'Анализ чистой прибыли',
    'Полное управление возвратами',
    'Интеграция с WhatsApp',
    'Автоматические накладные',
    'Система управления спорами',
    'Поддержка 24/7',
  ];

  return (
    <section id='pricing' className='container mx-auto px-4 py-16'>
      <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className='text-2xl font-bold mb-2 text-black'>Тариф</h2>
        <p className='text-gray-600 max-w-xl mx-auto'>Полный доступ ко всем функциям</p>
      </div>

      <div className='max-w-lg mx-auto'>
        <div
          className={`border border-red-600 p-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className='mb-6'>
            <div className='text-xl font-bold text-black'>СТАНДАРТ</div>
            <div className='flex items-end mt-2 text-black'>
              <div className='text-3xl font-bold'>9 990 ₸</div>
              <div className='text-gray-500 ml-2 mb-1'>+ 4990 ₸ (WhatsApp)</div>
              <div className='text-gray-500 ml-2 mb-1'>/мес</div>
            </div>
          </div>
          <div className='mb-6 space-y-3'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center ${isVisible ? 'animate-fade-in-right' : 'opacity-0'} text-black`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CheckCircle className='mr-2 h-4 w-4 text-red-600' />
                <span className='text-sm'>{feature}</span>
              </div>
            ))}
          </div>

          <a
            href='https://wa.me/77054828964?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%20Market%20Stat%20...'
            className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-red-600 hover:bg-red-700 text-white scale-100 hover:scale-105 transition-transform'
          >
            Начать бесплатный период
          </a>
          <p
            className={`text-center text-xs text-gray-500 mt-3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '1.2s' }}
          >
            14 дней бесплатно, без обязательств
          </p>
        </div>
      </div>
    </section>
  );
}
