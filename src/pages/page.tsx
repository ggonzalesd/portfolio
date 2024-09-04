import GridDec from '@/components/shared/GridDec';
import AppLayout from '@/layouts/AppLayout';
// import EducationView from '@/views/home/EducationView';
import HeroHomeView from '@/views/home/HeroHomeView';
import JobsHomeView from '@/views/home/JobsHomeView';
import StackHomeView from '@/views/home/StackHomeView';

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
      <StackHomeView />
      <JobsHomeView />
      {/* <EducationView /> */}
    </AppLayout>
  );
}
