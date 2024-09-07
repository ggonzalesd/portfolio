import React, { Suspense } from 'react';
import cn from 'classnames';

import { useTypedTranslation } from '@/hooks';

import Button from '@/components/button';
import Section from '@/components/section';
import Loading from '@/components/shared/loading';

const Skills = React.lazy(() => import('@/components/home/skills'));

export default function StackHomeView() {
  const t = useTypedTranslation();

  return (
    <Section className='mt-2'>
      <div className='dark:border-cyan border-4 dark:rounded-t-xl dark:border-2'>
        <div
          className={cn(
            'flex w-full items-center justify-between bg-gradient-to-r',
            'from-secondary to-primary',
            'dark:from-secondarydark dark:to-primarydark dark:rounded-t-xl',
          )}
        >
          <span className='px-2'>{t.text('home.skills.title')}</span>
          <Button disabled>X</Button>
        </div>
        <Suspense fallback={<Loading />}>
          <Skills />
        </Suspense>
      </div>
    </Section>
  );
}
