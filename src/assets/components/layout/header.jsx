import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='fixed w-full z-50 border-b border-gray-100 bg-black text-white'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 2xl:max-w-[1400px]'>
        <div className='flex items-center'>
          <div className='bg-red-600 rounded-full p-2 shadow-red-pulse mr-[10px]'>
            <div className='text-white font-bold text-sm'>MS</div>
          </div>
          <span className='text-base'>Market Stat</span>
        </div>
        <nav className='hidden md:flex space-x-6'>
          <Link to='/#features' className='text-white/80 hover:text-white transition-colors'>
            Функции
          </Link>
          <Link to='/#how-it-works' className='text-white/80 hover:text-white transition-colors'>
            Процесс
          </Link>
          <Link to='/#pricing' className='text-white/80 hover:text-white transition-colors'>
            Тариф
          </Link>
        </nav>
        <a
          href='http://93.183.73.20/registration'
          className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-red-600 hover:bg-red-700 text-white scale-100 hover:scale-105 transition-transform'
        >
          Начать
        </a>
      </div>
    </header>
  );
}
