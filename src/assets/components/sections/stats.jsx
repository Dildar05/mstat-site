'use client';

import { useEffect, useState } from 'react';

export default function Stats() {
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

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { value: '100%', label: 'Точность учета' },
    { value: '24/7', label: 'Доступ к данным' },
    { value: '+40%', label: 'Рост повторных продаж' },
    { value: '-30%', label: 'Снижение возвратов и отрицательных отзывов' },
  ];

  return (
    <section id='stats-section' className='container mx-auto px-4 py-10'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 text-center ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className='text-2xl md:text-3xl font-bold text-red-600 mb-1'>{stat.value}</div>
            <div className='text-sm text-gray-600'>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
