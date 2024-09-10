import cn from 'classnames';

import Window from '../window';

import { buttonStyleGenerator } from '../button';
import { IconType } from 'react-icons';

interface Props {
  src: string;
  title: string;
  name: string;
  texts: string[];
  tags: { src: string; display: string }[];
  releases: { src: string; Icon: IconType; display: string }[];
}

export default function ProjectCard(props: Props) {
  return (
    <article className='flex h-full w-full flex-col'>
      <Window title={props.title} hideCloseButton>
        <div className='flex'>
          <picture
            className={cn(
              'max-w-[50%] overflow-hidden bg-gradient-to-tl',
              'from-zinc-200 to-zinc-300',
              'dark:from-primarydark dark:to-secondarydark',
            )}
          >
            <img
              src={props.src}
              alt={`${props.name} thumbnail`}
              className='duration-400 aspect-square h-full w-auto object-contain object-center transition-all hover:scale-110 hover:cursor-pointer'
            />
          </picture>
          <div className='w-full bg-zinc-300 p-2 dark:bg-primarydark/50'>
            <h4 className='text-center text-xl font-bold'>{props.name}</h4>

            <div className='flex flex-col gap-1'>
              {props.texts.map((text) => (
                <p key={text} className='text-sm leading-4'>
                  {text}
                </p>
              ))}
            </div>

            <div className='flex flex-wrap gap-2 py-4'>
              {props.tags.map((tag) => (
                <picture
                  key={tag.src}
                  className='flex gap-1 rounded-md bg-zinc-200 pr-1 text-xs dark:bg-primarydark'
                >
                  <img
                    width={16}
                    className='aspect-square rounded-l-md'
                    src={tag.src}
                    alt={tag.display}
                  />
                  <span>{tag.display}</span>
                </picture>
              ))}
            </div>
            <div className='h-[2px] w-full rounded-xl bg-zinc-400 dark:bg-secondary' />
            <div className='flex py-2'>
              {props.releases.map((release) => (
                <a
                  key={release.src}
                  href={release.src}
                  target='_blank'
                  className={buttonStyleGenerator({
                    variant: 'old',
                    className:
                      'flex items-center gap-2 p-2 text-xs dark:rounded-xl',
                  })}
                >
                  <release.Icon />
                  {release.display}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Window>
    </article>
  );
}
