import { buttonStyleGenerator } from '@/components/button';
import Section from '@/components/section';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ListProjectsView() {
  const queries = new URLSearchParams(window.location.search);
  const projectId = queries.get('id');

  console.log(queries.get('id'));

  return (
    <Section>
      <div className='my-8 grid grid-cols-4 gap-4'>
        {projectId && <div className='h-full bg-red-50'>{projectId}</div>}
        {!projectId &&
          [...new Uint8Array(20)].map((_, index) => (
            <div
              key={index}
              className='flex w-full items-center justify-center'
            >
              <article className='max-w-48 border-4 bg-zinc-300 shadow-black/50 transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:cursor-pointer hover:shadow-lg'>
                <div className='flex justify-between bg-gradient-to-r from-primary to-secondary'>
                  <h4 className='text-md px-2 text-center'>Unitable</h4>
                  <a
                    href={
                      import.meta.env.BASE_URL +
                      '/projects/?id=' +
                      'unitable-2021'
                    }
                    className={buttonStyleGenerator({ variant: 'gold' })}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <figure>
                  <img
                    src=''
                    className='aspect-video h-auto w-48 bg-green-500 object-contain object-center'
                  />
                </figure>
                <p className='p-2 text-xs'>
                  Proyecto Backend para el curso de 'Programación web'
                  desarrollado con Spring Boot donde se usó PostgreSQL para la
                  base de datos y JWT para la autenticación de usuarios
                </p>
              </article>
            </div>
          ))}
      </div>
    </Section>
  );
}
