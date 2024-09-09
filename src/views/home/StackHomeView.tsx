import React, { Suspense } from 'react';

import { useTypedTranslation } from '@/hooks';

import Section from '@/components/section';
import Loading from '@/components/shared/loading';
import Window from '@/components/window';

const Skills = React.lazy(() => import('@/components/home/skills'));

export default function StackHomeView() {
  const t = useTypedTranslation();

  return (
    <Section className='mt-2'>
      <Window title={t.text('home.skills.title')}>
        <Suspense fallback={<Loading />}>
          <Skills />
        </Suspense>
      </Window>
    </Section>
  );
}
