import cn from 'classnames';

import { LangKey } from '@/locale/en';
import { useTypedTranslation } from '@/hooks';

const border =
  'border-b-2 border-l-2 border-r-2 border-t-2 border-b-zinc-100 border-l-zinc-700 border-r-zinc-100 border-t-zinc-700';

interface Props {
  src: string;
  positions: string[];
  name: string;
  start: {
    month: LangKey;
    year: number;
  };
  end?: {
    month: LangKey;
    year: number;
  };
  time: number;
  technologies: string[];
  descriptions: string[];
}

export default function JobCard(props: Props) {
  const t = useTypedTranslation();

  return (
    <div
      className={cn(
        'flex flex-col border-[1px] p-2',
        'border-black/25',
        'dark:border-cyan/40 dark:bg-primarydark/30 dark:rounded-md',
      )}
    >
      <div className='flex gap-2'>
        <picture className='hidden sm:flex'>
          <img
            src={props.src}
            className={cn(
              'aspect-square h-24 w-24 border-t-2 object-contain',
              border,
              'dark:border-cyan/70 dark:rounded-md',
            )}
          />
        </picture>
        <div className='flex flex-col justify-between py-1'>
          <div className='flex flex-wrap gap-2'>
            {props.positions.map((text) => (
              <span
                key={text}
                className={cn(
                  'bg-gradient-to-r from-secondary to-primary px-1 text-sm text-black/75',
                  border,
                  'dark:to-secondarydark dark:from-secondarydark dark:text-cyan dark:border-cyan/40 dark:rounded-md',
                )}
              >
                {text}
              </span>
            ))}
          </div>

          <span className='text-lg underline'>{props.name}</span>

          <div className='flex gap-2'>
            <span>
              {t.text(props.start.month)} {props.start.year}
            </span>
            <div className='dark:bg-cyan my-1 w-[2px] bg-zinc-600' />
            <span>
              {props.end !== undefined
                ? `${t.text(props.end.month)} ${props.end.year}`
                : 'Current'}
            </span>
            <div className='dark:bg-cyan my-1 hidden w-[2px] bg-zinc-600 sm:visible' />
            <span
              className={cn(
                border,
                'px-1 text-sm italic text-black/75',
                'dark:to-secondarydark dark:from-secondarydark dark:text-cyan dark:border-cyan/40 dark:rounded-md',
              )}
            >
              {props.time} {t.text('app.month.name')}
            </span>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'my-2 flex flex-wrap items-center gap-2 p-2',
          border,
          'dark:to-secondarydark dark:from-secondarydark dark:text-cyan dark:border-cyan/40 dark:rounded-md',
        )}
      >
        <span>Technologies</span>
        {props.technologies.map((src, index) => (
          <picture key={index}>
            <img src={src} className='h-8 w-8' />
          </picture>
        ))}
      </div>
      <div>
        <ul className='flex flex-col'>
          {props.descriptions.map((desc, index) => (
            <li key={index}>
              <span>• {desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
