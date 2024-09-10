import React, { Suspense } from 'react';

import plane from '@/assets/decorations/plane.svg';

import { useTypedTranslation } from '@/hooks';

import Section from '@/components/section';
import Loading from '@/components/shared/loading';
import Window from '@/components/window';
import GridDec from '@/components/shared/GridDec';

const LazyTraining = React.lazy(() => import('@/components/home/lazytraining'));

export default function EducationView() {
  const t = useTypedTranslation();

  return (
    <Section
      before={
        <div className='relative mx-auto w-full max-w-screen-lg'>
          <div
            className='absolute left-0 top-0 z-0 h-96 w-96 bg-cover bg-center opacity-10'
            style={{ backgroundImage: `url(${plane})` }}
          />
        </div>
      }
      after={
        <div className='relative mx-auto w-full max-w-screen-lg'>
          <GridDec className='absolute bottom-0 right-0' />
        </div>
      }
    >
      <Window title={t.text('home.academic.title')}></Window>

      <div className='flex h-8 justify-center'>
        <div className='h-full w-1 bg-gradient-to-b from-white to-transparent dark:w-[2px] dark:from-cyan' />
        <div className='flex-grow' />
        <div className='h-full w-1 bg-gradient-to-b from-white to-transparent dark:w-[2px] dark:from-cyan' />
      </div>
      <Suspense fallback={<Loading />}>
        <LazyTraining />
      </Suspense>
      <div className='flex h-16 justify-center border-b-4 dark:border-b-2 dark:border-b-cyan'>
        <div className='h-full w-1 bg-gradient-to-t from-white to-transparent dark:w-[2px] dark:from-cyan' />
        <div className='flex-grow' />
        <div className='h-full w-1 bg-gradient-to-t from-white to-transparent dark:w-[2px] dark:from-cyan' />
      </div>
    </Section>
  );
}
