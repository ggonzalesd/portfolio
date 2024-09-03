import AppLayout from '@/layouts/AppLayout';
import HeroHomeView from '@/views/home/HeroHomeView';

export default function HomePage() {
  return (
    <AppLayout>
      <div className='relative w-full'>
        <div className='absolute right-0 top-0 grid grid-cols-6'>
          {[...new Uint8Array(36)].map((_, index) => (
            <div
              key={index}
              className='h-10 w-10 border-[1px] border-white/40'
            />
          ))}
        </div>
        <div className='absolute left-0 top-[300px] grid grid-cols-6'>
          {[...new Uint8Array(36)].map((_, index) => (
            <div
              key={index}
              className='h-10 w-10 border-[1px] border-white/40'
            />
          ))}
        </div>
      </div>
      <HeroHomeView />
    </AppLayout>
  );
}
