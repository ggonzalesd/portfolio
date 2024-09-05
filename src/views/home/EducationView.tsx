import React, { Suspense } from 'react';

import { useTypedTranslation } from '@/hooks';

import Button from '@/components/button';
import Section from '@/components/section';
import Loading from '@/components/shared/loading';

const LazyTraining = React.lazy(() => import('@/components/home/lazytraining'));

export default function EducationView() {
  const t = useTypedTranslation();

  return (
    <Section>
      <div className='flex items-center justify-between border-4 bg-gradient-to-r from-secondary to-primary'>
        <span className='px-2'>{t.text('home.academic.title')}</span>
        <Button disabled>X</Button>
      </div>
      <div className='flex h-8 justify-center'>
        <div className='h-full w-1 bg-gradient-to-b from-white to-transparent' />
        <div className='flex-grow' />
        <div className='h-full w-1 bg-gradient-to-b from-white to-transparent' />
      </div>
      <Suspense fallback={<Loading />}>
        <LazyTraining />
      </Suspense>
      <div className='flex h-16 justify-center border-b-4'>
        <div className='h-full w-1 bg-gradient-to-t from-white to-transparent' />
        <div className='flex-grow' />
        <div className='h-full w-1 bg-gradient-to-t from-white to-transparent' />
      </div>
    </Section>
  );
}
