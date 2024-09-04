import React, { Suspense } from 'react';

import Section from '@/components/section';
import Button from '@/components/button';
import Loading from '@/components/shared/loading';
import { useTypedTranslation } from '@/hooks';

const LazyJobs = React.lazy(() => import('@/components/home/lazyjobs'));

export default function JobsHomeView() {
  const t = useTypedTranslation();

  return (
    <Section>
      <div className='mt-4 flex flex-col border-4'>
        <div className='flex w-full items-center justify-between bg-gradient-to-r from-[#8af] to-[#f8d]'>
          <span className='px-2'>{t.text('home.experience.title')}</span>
          <Button disabled>X</Button>
        </div>
        <div className='flex flex-col gap-4 bg-zinc-300 p-2'>
          <Suspense fallback={<Loading />}>
            <LazyJobs />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}
