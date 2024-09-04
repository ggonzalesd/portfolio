import Section from '@/components/section';

import Button from '@/components/button';
import JobCard from '@/components/home/jobcard';

import job from '@/assets/logos/agiletech.jpg';

import react from '@/assets/skills/react.svg';
import typescript from '@/assets/skills/typescript.svg';
import redux from '@/assets/skills/redux.svg';
import node_ from '@/assets/skills/nodejs.svg';

export default function JobsHomeView() {
  return (
    <Section>
      <div className='mt-4 flex flex-col border-4'>
        <div className='flex w-full items-center justify-between bg-gradient-to-r from-[#8af] to-[#f8d]'>
          <span className='px-2'>Experience</span>
          <Button disabled>X</Button>
        </div>
        <div className='flex flex-col gap-4 bg-zinc-300 p-2'>
          <JobCard
            src={job}
            positions={[
              'Fullstack practicante',
              'React',
              'NestJs',
              'PostgreSQL',
            ]}
            name='Grupo Agiletech Peru Enterprise Solutions S.A.C'
            technologies={[react, typescript, redux, node_]}
            start={{ month: 'app.moth.01-febrary', year: 2024 }}
            time={5}
            descriptions={[
              'Implementación de landing pages con React, Vite, y Tailwind.',
              'Desarrollo de API REST con NestJS, TypeScript, y PostgreSQL para un proyecto de gestión de agrícola y un videojuego.',
              'Mantenimiento de proyectos web basados en React y Material UI.',
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
