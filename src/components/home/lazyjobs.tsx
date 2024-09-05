import JobCard from './jobcard';

import job from '@/assets/logos/agiletech.jpg';

import react from '@/assets/skills/react.svg';
import typescript from '@/assets/skills/typescript.svg';
import redux from '@/assets/skills/redux.svg';
import node_ from '@/assets/skills/nodejs.svg';

export default function LazyJobs() {
  return (
    <>
      <JobCard
        src={job}
        positions={['Fullstack practicante', 'React', 'NestJs', 'PostgreSQL']}
        name='Grupo Agiletech Peru Enterprise Solutions S.A.C'
        technologies={[react, typescript, redux, node_]}
        start={{ month: 'app.month.04-april', year: 2024 }}
        end={{ month: 'app.month.08-august', year: 2024 }}
        time={5}
        descriptions={[
          'Implementación de landing pages con React, Vite, y Tailwind.',
          'Desarrollo de API REST con NestJS, TypeScript, y PostgreSQL para un proyecto de gestión de agrícola y un videojuego.',
          'Mantenimiento de proyectos web basados en React y Material UI.',
        ]}
      />
    </>
  );
}
