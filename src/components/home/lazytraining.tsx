import { useState } from 'react';
import { useTypedTranslation } from '@/hooks';

import { LangKey } from '@/locale/en';
import skills from '@/assets/skills';

import FileTraining from './filetraining';

import coursera from '@/assets/logos/coursera.png';
import platzi from '@/assets/logos/platzi.png';

export default function LazyTraining() {
  const [index, setIndex] = useState(-1);
  const t = useTypedTranslation();

  return (
    <div className='flex justify-center px-4'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
        {trainings.map(
          ({ src, name, month, year, filelink, verifylink, icons }, idx) => (
            <div key={name} className='flex w-full justify-center'>
              <FileTraining
                src={src}
                name={t.text(name)}
                date={{ month: t.text(month), year }}
                filelink={filelink}
                verifylink={verifylink}
                icons={icons}
                active={index === idx}
                setActive={() => setIndex(idx)}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}

const trainings: {
  src: string;
  name: LangKey;
  month: LangKey;
  year: number;
  filelink: string;
  verifylink: string;
  icons?: { src: string; display: string }[];
}[] = [
  {
    src: coursera,
    name: 'home.academic.file.basic-sql',
    month: 'app.month.06-june',
    year: 2024,
    filelink:
      import.meta.env.BASE_URL + '/download/sql-basics-for-data-science.pdf',
    verifylink:
      'https://www.coursera.org/account/accomplishments/specialization/PEM2VZ2W76G5',
    icons: [skills.sqlite],
  },
  {
    src: platzi,
    name: 'home.academic.file.react-redering',
    month: 'app.month.01-january',
    year: 2023,
    filelink:
      import.meta.env.BASE_URL + '/download/diploma-react-patrones-render.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2457-react-patrones-render/diploma/detalle/',
    icons: [skills.react, skills.nodejs],
  },
  {
    src: platzi,
    name: 'home.academic.file.react-state',
    month: 'app.month.01-january',
    year: 2023,
    filelink: import.meta.env.BASE_URL + '/download/diploma-react-estado.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2597-react-estado/diploma/detalle/',
    icons: [skills.react, skills.nodejs],
  },
  {
    src: platzi,
    name: 'home.academic.file.express-rest',
    month: 'app.month.12-december',
    year: 2022,
    filelink: import.meta.env.BASE_URL + '/download/diploma-backend-nodejs.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2485-backend-nodejs/diploma/detalle/',
    icons: [skills.javascript, skills.nodejs, skills.sequelize],
  },
  {
    src: platzi,
    name: 'home.academic.file.node-backend-postgresql',
    month: 'app.month.01-january',
    year: 2023,
    filelink:
      import.meta.env.BASE_URL +
      '/download/diploma-backend-nodejs-postgres.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2507-backend-nodejs-postgres/diploma/detalle/',
    icons: [skills.postgresql, skills.nodejs, skills.sequelize],
  },
  {
    src: platzi,
    name: 'home.academic.file.typescript-advanced',
    month: 'app.month.12-december',
    year: 2022,
    filelink:
      import.meta.env.BASE_URL +
      '/download/diploma-typescript-tipos-avanzados.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2879-typescript-tipos-avanzados/diploma/detalle/',
    icons: [skills.typescript, skills.nodejs],
  },
  {
    src: platzi,
    name: 'home.academic.file.closures-and-scope-js',
    month: 'app.month.01-january',
    year: 2023,
    filelink:
      import.meta.env.BASE_URL +
      '/download/diploma-javascript-closures-scope.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/3213-javascript-closures-scope/diploma/detalle/',
    icons: [skills.nodejs, skills.javascript],
  },
  {
    src: platzi,
    name: 'home.academic.file.java-testing',
    month: 'app.month.12-december',
    year: 2022,
    filelink: import.meta.env.BASE_URL + '/download/diploma-testing-java.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/1503-testing-java/diploma/detalle/',
    icons: [skills.java],
  },
  {
    src: platzi,
    name: 'home.academic.file.basic-python',
    month: 'app.month.07-july',
    year: 2022,
    filelink: import.meta.env.BASE_URL + '/download/diploma-python-basico.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/1937-python-basico/diploma/detalle/',
    icons: [skills.python],
  },
  {
    src: coursera,
    name: 'home.academic.file.art-for-games',
    month: 'app.month.07-july',
    year: 2023,
    filelink: import.meta.env.BASE_URL + '/download/art-for-games.pdf',
    verifylink:
      'https://www.coursera.org/account/accomplishments/specialization/4ASV8MJLT4PP',
  },
];
