import cn from 'classnames';
import Button, { buttonStyleGenerator } from '../button';
import Loading from './loading';
import Error from './error';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

import { useMemo, useState } from 'react';
import { useTypedTranslation } from '@/hooks';

interface Props {
  frames: {
    display: string;
    value: string;
  }[];
  redirect?: boolean;
  download?: boolean;
  children?: React.ReactNode;
  setOpen: (value: boolean) => void;
}

export default function IFramer({
  frames,
  redirect,
  download,
  children,
  setOpen,
}: Props) {
  const t = useTypedTranslation();
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<'LOADING' | 'ERROR' | 'OK'>('LOADING');

  const frame = useMemo(() => frames[index], [index, frames]);

  const onLoadIframe: React.ReactEventHandler<HTMLIFrameElement> = (e) => {
    const iframe = e.target as HTMLIFrameElement;
    if (
      iframe.contentDocument &&
      iframe.contentDocument.contentType === 'application/pdf'
    ) {
      setStatus('OK');
    } else {
      setStatus('ERROR');
    }
  };

  const onDownload = () => {
    const link = document.createElement('a');
    link.download = frame?.display;
    link.href = frame?.value;
    link.click();
  };

  return (
    <div
      className={cn(
        // styles.InfosTagPdf,
        'absolute top-14 flex h-5/6 w-9/12 flex-col border-4 bg-zinc-300 shadow-md shadow-black/80',
      )}
    >
      <div className='flex items-center justify-between bg-gradient-to-r from-primary to-secondary'>
        <span className='px-2'>{frame ? frame.display : '[no-content]'}</span>
        <div className='flex'>
          {redirect && (
            <a
              href={frame?.value}
              target='_blank'
              className={buttonStyleGenerator({
                variant: 'old',
                className: 'flex items-center gap-2',
              })}
            >
              <FaExternalLinkAlt />
              <span className='hidden md:inline-block'>
                {t.text('app.iframer.redirect')}
              </span>
            </a>
          )}
          {download && (
            <Button className='flex items-center gap-2' onClick={onDownload}>
              <MdDownload />
              <span className='hidden md:inline-block'>
                {t.text('app.iframer.download')}
              </span>
            </Button>
          )}
          <Button onClick={() => setOpen(false)}>X</Button>
        </div>
      </div>
      {children}
      {frames && frames.length > 1 && (
        <div>
          {frames.map(({ display }, idx) => (
            <Button key={idx} variant='old' onClick={() => setIndex(idx)}>
              {display}
            </Button>
          ))}
        </div>
      )}
      {status === 'LOADING' && <Loading />}
      {status === 'ERROR' && (
        <Error>
          <span>Try to Download '{frame?.display}'</span>
        </Error>
      )}
      <iframe
        className={cn(status === 'OK' ? 'block' : 'hidden', 'h-full w-full')}
        src={frame?.value}
        title='Curriculum Vitae'
        onLoad={onLoadIframe}
      />
    </div>
  );
}
