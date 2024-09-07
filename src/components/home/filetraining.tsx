import { useState } from 'react';
import cn from 'classnames';

import { useTypedTranslation } from '@/hooks';

import IFramer from '../shared/iframer';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { PiFolderOpenFill } from 'react-icons/pi';

interface Props {
  name: string;
  date: { month: string; year: number };
  src: string;
  filelink: string;
  verifylink: string;
  icons?: { src: string; display: string }[];
  active?: boolean;
  setActive?: () => void;
}

export default function FileTraining({
  name,
  src,
  filelink,
  verifylink,
  icons,
  date: { month, year },
  active,
  setActive,
}: Props) {
  const t = useTypedTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={cn(
          { ['dark:border-cyan border-yellow-200']: active },
          'flex flex-col items-center border-4 border-transparent hover:cursor-pointer hover:border-white active:bg-sky-400/50',
          'dark:rounded-lg dark:border-2',
        )}
        onClick={() => {
          setOpen(true);
          if (setActive) setActive();
        }}
      >
        <picture className='relative flex flex-col items-center justify-center'>
          <img
            src={src}
            className='absolute aspect-square h-auto w-12 rounded-full bg-white object-cover p-2'
          />
          <PiFolderOpenFill
            size={96}
            className='dark:text-cyan/50 text-[#e8d]'
          />
          <div className='absolute bottom-0 right-0 flex gap-[2px]'>
            {icons &&
              icons.map(({ src, display }) => (
                <img
                  className='h-5 w-5 overflow-hidden rounded-full border-[1px] border-zinc-600 bg-zinc-800 object-contain object-center p-[2px]'
                  key={display}
                  src={src}
                  alt={display}
                />
              ))}
          </div>
        </picture>
        <span className='select-none text-wrap text-center text-xs hover:underline'>
          {name}
        </span>
        <span className='dark:text-cyan select-none text-xs italic text-zinc-700'>
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
              {t.text('home.academic.file.verify')}
              <FaExternalLinkAlt />
            </a>
          </IFramer>
        </section>
      )}
    </>
  );
}
