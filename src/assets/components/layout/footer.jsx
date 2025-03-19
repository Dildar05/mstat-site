export default function Footer() {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='flex items-center mb-3'>
            <div className='mr-1 text-red-600 text-lg font-bold'>K</div>
            <span className='font-medium'>Market Stat</span>
          </div>
          <p className='text-white/60 text-sm mb-3'>Автоматизация и оптимизация Kaspi магазинов</p>
          <div className='text-white/60 text-xs'>© MarketStat.com, 2023</div>
        </div>
      </div>
    </footer>
  );
}
