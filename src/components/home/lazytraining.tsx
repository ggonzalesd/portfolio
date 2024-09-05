import { useTypedTranslation } from '@/hooks';
import FileTraining from './filetraining';
import coursera from '@/assets/logos/coursera.png';
import platzi from '@/assets/logos/platzi.png';
import { LangKey } from '@/locale/en';

export default function LazyTraining() {
  const t = useTypedTranslation();

  return (
    <div className='flex justify-center px-4'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
        {trainings.map(({ src, name, month, year, filelink, verifylink }) => (
          <div key={name}>
            <FileTraining
              src={src}
              name={name}
              date={{ month: t.text(month), year }}
              filelink={filelink}
              verifylink={verifylink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const trainings: {
  src: string;
  name: string;
  month: LangKey;
  year: number;
  filelink: string;
  verifylink: string;
}[] = [
  {
    src: coursera,
    name: 'SQL Básico para ciencia de datos',
    month: 'app.month.06-june',
    year: 2024,
    filelink:
      import.meta.env.BASE_URL + '/download/sql-basics-for-data-science.pdf',
    verifylink:
      'https://www.coursera.org/account/accomplishments/specialization/PEM2VZ2W76G5',
  },
  {
    src: platzi,
    name: 'React: Patrones de render y composición',
    month: 'app.month.01-january',
    year: 2023,
    filelink:
      import.meta.env.BASE_URL + '/download/diploma-react-patrones-render.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2457-react-patrones-render/diploma/detalle/',
  },
  {
    src: platzi,
    name: 'React: Manejo de estado',
    month: 'app.month.01-january',
    year: 2023,
    filelink: import.meta.env.BASE_URL + '/download/diploma-react-estado.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2597-react-estado/diploma/detalle/',
  },
  {
    src: platzi,
    name: 'API Rest con Express.js',
    month: 'app.month.12-december',
    year: 2022,
    filelink: import.meta.env.BASE_URL + '/download/diploma-backend-nodejs.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2485-backend-nodejs/diploma/detalle/',
  },
  {
    src: platzi,
    name: 'Backend con Node.js y PostgreSQL',
    month: 'app.month.01-january',
    year: 2023,
    filelink:
      import.meta.env.BASE_URL +
      '/download/diploma-backend-nodejs-postgres.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2507-backend-nodejs-postgres/diploma/detalle/',
  },
  {
    src: platzi,
    name: 'Typescript: tipos avanazado',
    month: 'app.month.12-december',
    year: 2022,
    filelink:
      import.meta.env.BASE_URL +
      '/download/diploma-typescript-tipos-avanzados.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/2879-typescript-tipos-avanzados/diploma/detalle/',
  },
  {
    src: platzi,
    name: 'Closures y scope en Javascript',
    month: 'app.month.01-january',
    year: 2023,
    filelink:
      import.meta.env.BASE_URL +
      '/download/diploma-javascript-closures-scope.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/3213-javascript-closures-scope/diploma/detalle/',
  },
  {
    src: platzi,
    name: 'Testing en Java',
    month: 'app.month.12-december',
    year: 2022,
    filelink: import.meta.env.BASE_URL + '/download/diploma-testing-java.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/1503-testing-java/diploma/detalle/',
  },
  {
    src: platzi,
    name: 'Python básico',
    month: 'app.month.07-july',
    year: 2022,
    filelink: import.meta.env.BASE_URL + '/download/diploma-python-basico.pdf',
    verifylink:
      'https://platzi.com/p/grober_gonzales/curso/1937-python-basico/diploma/detalle/',
  },
  {
    src: coursera,
    name: 'Art for Games',
    month: 'app.month.07-july',
    year: 2023,
    filelink: import.meta.env.BASE_URL + '/download/art-for-games.pdf',
    verifylink:
      'https://www.coursera.org/account/accomplishments/specialization/4ASV8MJLT4PP',
  },
];
