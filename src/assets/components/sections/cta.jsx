'use client';

import { useEffect, useState } from 'react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id='cta-section' className='bg-black py-12 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className={`text-2xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Начните отслеживать свои продажи
        </h2>
        <p
          className={`mb-6 max-w-xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          Узнайте реальную прибыль вашего Kaspi-магазина и улучшите коммуникацию с клиентами
        </p>
        <a
          href='http://93.183.73.20/registration'
          className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-red-600 hover:bg-red-700 text-white scale-100 hover:scale-105 transition-transform'
        >
          Попробовать за 9 990 ₸/мес
        </a>

        <div
          className={`mt-4 text-white/60 text-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          14 дней бесплатно • Отмена в любое время • Настройка за 2 минуты
        </div>
      </div>
    </section>
  );
}
