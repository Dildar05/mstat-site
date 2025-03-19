import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className='pt-24 bg-black text-white'>
      <div className='container mx-auto px-4 py-16 max-w-[1400px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div>
            <div className='inline-block bg-red-600 text-white text-xs font-medium px-2 py-1 rounded mb-4'>
              АНАЛИТИКА
            </div>
            <h1 className='text-3xl md:text-4xl font-bold mb-4 leading-tight'>Удобный учет продаж в Kaspi-магазине</h1>
            <p className='text-white/80 mb-6'>
              Отслеживайте ключевые метрики, анализируйте продажи и увеличивайте прибыль с помощью нашей платформы.
            </p>
            <a
              href='https://wa.me/77054828964?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%20Market%20Stat%20...'
              className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-red-600 hover:bg-red-700 text-white scale-100 hover:scale-105 transition-transform'
            >
              Начать бесплатно <ArrowRight className='ml-2 h-4 w-4' />
            </a>
          </div>

          {/* Дашборд */}
          <div className='relative'>
            <div className='absolute -top-6 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/20 z-10'>
              <div className='flex items-center text-green-400 text-sm'>
                <TrendingUp className='h-3 w-3 mr-1' />
                +175%
              </div>
            </div>

            <div className='bg-[#0A0A0A] rounded-xl border border-gray-800 overflow-hidden shadow-2xl shadow-red-600/20 relative'>
              {/* Добавляем дополнительный эффект свечения */}
              <div className='absolute -inset-1 bg-red-600/10 blur-md rounded-xl -z-10'></div>

              {/* Заголовок окна */}
              <div className='px-4 py-2 border-b border-gray-800 flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <div className='flex space-x-1'>
                    <div className='w-2.5 h-2.5 rounded-full bg-red-500'></div>
                    <div className='w-2.5 h-2.5 rounded-full bg-yellow-500'></div>
                    <div className='w-2.5 h-2.5 rounded-full bg-green-500'></div>
                  </div>
                </div>
                <div className='text-sm text-gray-400'>Market Stat Analytics</div>
                <div className='w-16'></div>
              </div>

              {/* Контент дашборда */}
              <div className='p-4'>
                {/* Заголовок с Live индикатором */}
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='bg-red-600 rounded-full p-2 shadow-red-pulse'>
                      <div className='text-white font-bold text-sm'>MS</div>
                    </div>
                    <div className='text-white font-medium'>Аналитика продаж</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse'></div>
                    <span className='text-green-500 text-xs'>Live</span>
                  </div>
                </div>

                {/* График */}
                <div className='relative h-40 mb-6'>
                  <div className='absolute inset-0'>
                    <div className='text-xs text-gray-500 absolute -left-2 top-0'>320</div>
                    <div className='text-xs text-gray-500 absolute -left-2 bottom-0'>0</div>
                    <div className='h-full w-full flex items-end'>
                      <svg className='w-full h-full' viewBox='0 0 300 100' preserveAspectRatio='none'>
                        <defs>
                          <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                            <stop offset='0%' style={{ stopColor: '#ef4444', stopOpacity: 0.2 }} />
                            <stop offset='100%' style={{ stopColor: '#ef4444', stopOpacity: 0 }} />
                          </linearGradient>
                          <filter id='redGlow'>
                            <feGaussianBlur stdDeviation='2.5' result='blur' />
                            <feFlood floodColor='#ef4444' floodOpacity='0.5' result='color' />
                            <feComposite in='color' in2='blur' operator='in' result='shadow' />
                            <feComposite in='SourceGraphic' in2='shadow' operator='over' />
                          </filter>
                        </defs>
                        <path
                          d='M0,80 C50,70 100,90 150,40 C200,0 250,30 300,60'
                          fill='none'
                          stroke='#ef4444'
                          strokeWidth='2'
                          className='animate-draw-line'
                          filter='url(#redGlow)'
                        />
                        <path
                          d='M0,80 C50,70 100,90 150,40 C200,0 250,30 300,60 L300,100 L0,100 Z'
                          fill='url(#gradient)'
                          className='animate-fill-gradient'
                        />
                      </svg>
                    </div>
                    <div className='absolute top-2 right-0 text-green-400 text-sm'>+12.5%</div>
                  </div>
                </div>

                {/* Метрики */}
                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-[#1A1A1A] p-4 rounded-lg hover:shadow-red-glow transition-shadow duration-300'>
                    <div className='text-gray-400 text-sm mb-2'>Продажи</div>
                    <div className='text-white font-bold'>193 шт.</div>
                    <div className='text-green-400 text-sm'>3 127 920 ₸</div>
                  </div>
                  <div className='bg-[#1A1A1A] p-4 rounded-lg hover:shadow-red-glow transition-shadow duration-300'>
                    <div className='text-gray-400 text-sm mb-2'>Прибыль</div>
                    <div className='text-white font-bold'>1 240 440 ₸</div>
                    <div className='text-green-400 text-sm'>+8.3%</div>
                  </div>
                  <div className='bg-[#1A1A1A] p-4 rounded-lg hover:shadow-red-glow transition-shadow duration-300'>
                    <div className='text-gray-400 text-sm mb-2'>Средний чек</div>
                    <div className='text-white font-bold'>16 206 ₸</div>
                    <div className='text-green-400 text-sm'>+2.1%</div>
                  </div>
                  <div className='bg-[#1A1A1A] p-4 rounded-lg hover:shadow-red-glow transition-shadow duration-300'>
                    <div className='text-gray-400 text-sm mb-2'>Возвраты</div>
                    <div className='text-white font-bold'>6 шт.</div>
                    <div className='text-red-400 text-sm'>27 940 ₸</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
