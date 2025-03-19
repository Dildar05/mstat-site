'use client';

import { useEffect, useState } from 'react';

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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

    const element = document.getElementById('faq-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const faqs = [
    {
      question: 'Как работает система управления возвратами?',
      answer:
        'Система разделяет возвраты на категории: новые заявки, на доставке, ожидает решения, споры и закрытые заявки. Это позволяет эффективно отслеживать статус каждого возврата.',
    },
    {
      question: 'Как формируются автоматические накладные?',
      answer:
        'Система автоматически генерирует накладные для каждого заказа, включая всю необходимую информацию о товаре, покупателе и условиях доставки.',
    },
    {
      question: 'Как работает интеграция с WhatsApp?',
      answer:
        'Вы можете настроить автоматические уведомления клиентам о статусе заказа, акциях и специальных предложениях через WhatsApp.',
    },
    {
      question: 'Как отслеживать споры с клиентами?',
      answer:
        "В разделе 'Споры' вы можете видеть все спорные ситуации. Наша система автоматически отправляет уведомления через WhatsApp при изменении статуса возврата, что позволяет оперативно реагировать на проблемы и улучшать коммуникацию с клиентами.",
    },
  ];

  return (
    <section id='faq-section' className='container mx-auto px-4 py-16'>
      <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className='text-2xl font-bold mb-2'>Вопросы и ответы</h2>
        <p className='text-gray-600 max-w-xl mx-auto'>Ответы на популярные вопросы о нашей платформе</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto'>
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`p-4 border border-gray-100 cursor-pointer hover:shadow-md transition-all text-black ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            } ${activeIndex === index ? 'shadow-red-glow' : ''}`}
            style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <h3 className='font-medium mb-2 flex justify-between items-center'>
              {item.question}
              <span className='text-red-600'>{activeIndex === index ? '−' : '+'}</span>
            </h3>
            <p
              className={`text-gray-600 text-sm overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
