import { AiOutlineFile } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import IFramer from '../shared/iframer';
import { useState } from 'react';

interface Props {
  name: string;
  date: { month: string; year: number };
  src: string;
  filelink: string;
  verifylink: string;
}

export default function FileTraining({
  name,
  src,
  filelink,
  verifylink,
  date: { month, year },
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className='flex flex-col items-center border-4 border-transparent hover:cursor-pointer hover:border-white active:bg-sky-400/50'
        onClick={() => setOpen(true)}
      >
        <picture className='relative flex flex-col items-center justify-center'>
          <img
            src={src}
            className='absolute aspect-square h-auto w-12 rounded-full bg-white object-cover p-2'
          />
          <AiOutlineFile size={96} className='text-white' />
        </picture>
        <span className='select-none text-wrap text-center text-xs hover:underline'>
          {name}
        </span>
        <span className='select-none text-xs italic text-zinc-700'>
          {month} {year}
        </span>
      </button>
      {open && (
        <section className='fixed left-0 top-0 z-20 flex h-full w-full justify-center backdrop-brightness-50'>
          <IFramer
            frames={[
              {
                display: name,
                value: filelink,
              },
            ]}
            download={true}
            redirect={true}
            setOpen={setOpen}
          >
            <a
              className='flex items-center gap-2 p-2 text-sky-700 underline'
              href={verifylink}
              target='_blank'
            >
              Verify in website
              <FaExternalLinkAlt />
            </a>
          </IFramer>
        </section>
      )}
    </>
  );
}
