import { AiOutlineFile } from 'react-icons/ai';
import coursera from '@/assets/logos/coursera.png';
import IFramer from '../shared/iframer';
import { useState } from 'react';

export default function FileTraining() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className='flex flex-col items-center border-4 border-transparent hover:cursor-pointer hover:border-white active:bg-sky-400/50'
        onClick={() => setOpen(true)}
      >
        <picture className='relative flex flex-col items-center justify-center'>
          <img
            src={coursera}
            className='absolute aspect-square h-auto w-12 object-cover'
          />
          <AiOutlineFile size={96} className='text-white' />
        </picture>
        <span className='select-none text-wrap text-center text-xs'>
          SQL Básico para ciencia de datos
        </span>
        <span className='select-none text-sm'>June 2019</span>
      </button>
      {open && (
        <section className='fixed left-0 top-0 z-20 flex h-full w-full justify-center backdrop-brightness-50'>
          <IFramer
            frames={[
              {
                display: 'Sql Básico',
                value:
                  import.meta.env.BASE_URL +
                  '/download/sql-basics-for-data-science.pdf',
              },
            ]}
            download={true}
            redirect={true}
            setOpen={setOpen}
          >
            <span className='p-2'>
              URL:
              https://www.coursera.org/account/accomplishments/specialization/PEM2VZ2W76G5
            </span>
          </IFramer>
        </section>
      )}
    </>
  );
}
