import GridDec from '@/components/shared/GridDec';
import AppLayout from '@/layouts/AppLayout';
import HeroHomeView from '@/views/home/HeroHomeView';

export default function HomePage() {
  return (
    <AppLayout>
      <div className='relative w-full'>
        <GridDec className='absolute right-0 top-0' />
      </div>
      <HeroHomeView />
      <div className='relative w-full'>
        <GridDec className='absolute bottom-0 left-0' />
      </div>
    </AppLayout>
  );
}
