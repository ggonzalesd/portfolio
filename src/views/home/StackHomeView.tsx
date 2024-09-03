import Button from '@/components/button';
import Section from '@/components/section';
import { useTypedTranslation } from '@/hooks';
import React, { Suspense } from 'react';

const Skills = React.lazy(() => import('@/components/home/skills'));

export default function StackHomeView() {
  const t = useTypedTranslation();

  return (
    <Section className='mt-2'>
      <div className='border-4'>
        <div className='flex w-full items-center justify-between bg-gradient-to-r from-[#8af] to-[#f8d]'>
          <span className='px-2'>{t.text('home.skills.title')}</span>
          <Button disabled>X</Button>
        </div>
        <Suspense fallback='Loading...'>
          <Skills />
        </Suspense>
      </div>
    </Section>
  );
}
