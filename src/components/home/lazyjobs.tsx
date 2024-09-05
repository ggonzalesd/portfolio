import JobCard from './jobcard';

import job from '@/assets/logos/agiletech.jpg';
import react from '@/assets/skills/react.svg';
import typescript from '@/assets/skills/typescript.svg';
import redux from '@/assets/skills/redux.svg';
import node_ from '@/assets/skills/nodejs.svg';
import postgresql from '@/assets/skills/postgresql.svg';
import tailwind from '@/assets/skills/tailwind.svg';
import mui from '@/assets/skills/mui.png';
import nestjs from '@/assets/skills/nestjs.svg';
import typeorm from '@/assets/skills/typeorm.png';

export default function LazyJobs() {
  return (
    <>
      <JobCard
        src={job}
        positions={['Fullstack practicante', 'React', 'NestJs', 'PostgreSQL']}
        name='Grupo Agiletech Peru Enterprise Solutions S.A.C'
        technologies={[
          react,
          redux,
          node_,
          tailwind,
          mui,
          typescript,
          nestjs,
          postgresql,
          typeorm,
        ]}
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
