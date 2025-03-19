'use client';

import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'Владелец магазина',
      quote: 'Market Stat помог мне увидеть реальную прибыль после вычета всех комиссий Kaspi.',
      rating: 5,
    },
    {
      name: 'Мария Иванова',
      role: 'Менеджер магазина',
      quote: 'Интеграция с WhatsApp увеличила повторные продажи на 40%. Очень удобно!',
      rating: 5,
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Предприниматель',
      quote: 'Теперь я точно знаю, какие товары приносят больше прибыли, а какие уходят в минус.',
      rating: 5,
    },
  ];

  return (
    <section id='testimonials' className='py-16'>
      <div className='container mx-auto px-4'>
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className='text-2xl font-bold mb-2 text-black'>Отзывы клиентов</h2>
          <p className='text-gray-600 max-w-xl mx-auto'>
            Присоединяйтесь к сотням довольных владельцев Kaspi магазинов
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-4 border border-gray-100 hover:shadow-md transition-shadow text-black ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className='flex items-center mb-3'>
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 text-red-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                      fill='currentColor'
                    />
                  ))}
              </div>
              <p className='mb-4'>"{testimonial.quote}"</p>
              <div className='flex items-center'>
                <div className='w-8 h-8 rounded-full bg-gray-200 mr-3'></div>
                <div>
                  <div className='font-medium text-sm'>{testimonial.name}</div>
                  <div className='text-xs text-gray-600'>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
