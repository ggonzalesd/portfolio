import cn from 'classnames';
import Button, { buttonStyleGenerator } from '../button';
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useState } from 'react';
import { GrView } from 'react-icons/gr';

import styles from './InfosTag.module.css';
import Loading from '../shared/loading';
import Error from '../shared/error';

interface Props {
  Icon: IconType;
  value: string;
  display: string;
  action: 'COPY' | 'LINK' | 'EMBED';
}

export default function InfosTag({ Icon, display, value, action }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'OK' | 'LOADING' | 'ERROR'>('LOADING');

  const onLoadIframe: React.ReactEventHandler<HTMLIFrameElement> = (e) => {
    const iframe = e.target as HTMLIFrameElement;
    if (iframe.contentDocument) {
      setStatus('OK');
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className='flex items-center bg-zinc-300'>
      <Button variant='old'>
        <Icon size={24} />
      </Button>
      <span className='flex-grow px-2 text-blue-700'>{display}</span>
      {action === 'COPY' && (
        <Button
          variant='old'
          onClick={() => navigator.clipboard.writeText(value)}
        >
          <FaCopy size={24} />
        </Button>
      )}
      {action === 'LINK' && (
        <a
          href={value}
          target='_blank'
          className={buttonStyleGenerator({ variant: 'old' })}
        >
          <FaExternalLinkAlt size={24} />
        </a>
      )}
      {action === 'EMBED' && (
        <Button variant='old' onClick={() => setOpen(true)}>
          <GrView size={24} />
        </Button>
      )}
      {action === 'EMBED' && open && (
        <section className='fixed left-0 top-0 z-20 flex h-full w-full justify-center'>
          <div
            className={cn(
              styles.InfosTagPdf,
              'absolute top-14 flex h-5/6 w-9/12 flex-col border-4 bg-zinc-300 shadow-md shadow-black/80',
            )}
          >
            <div className='from-primary to-secondary flex items-center justify-between bg-gradient-to-r'>
              <span className='px-2'>{display}</span>
              <div>
                <Button>Download</Button>
                <Button onClick={() => setOpen(false)}>X</Button>
              </div>
            </div>
            {status === 'LOADING' && <Loading />}
            {status === 'ERROR' && <Error />}
            <iframe
              className={cn(
                status === 'OK' ? 'block' : 'hidden',
                'h-full w-full',
              )}
              src={value}
              title='Curriculum Vitae'
              onLoad={onLoadIframe}
            />
          </div>
        </section>
      )}
    </div>
  );
}
