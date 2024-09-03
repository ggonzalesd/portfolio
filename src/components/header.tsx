import { useCallback, useMemo, useState } from 'react';
import cn from 'classnames';

import Button, { buttonStyleGenerator } from './button';

import { IoMdArrowRoundForward } from 'react-icons/io';
import { RiPlanetFill } from 'react-icons/ri';

import { GoDotFill } from 'react-icons/go';

const base = import.meta.env.BASE_URL;

export default function Header() {
  const pathname = useMemo(() => window.location.pathname, []);
  const lang = useMemo(
    () => new URLSearchParams(window.location.search).get('lang') ?? 'en',
    [],
  );
  const isPathActive = useCallback(
    (path: string) => pathname === path || pathname + '/' === path,
    [pathname],
  );

  const [open, setOpen] = useState(false);

  return (
    <header className='fixed left-0 top-0 h-12 w-full'>
      <div className='mx-auto flex h-full max-w-screen-lg items-center justify-between border-4 bg-gradient-to-r from-[#8af] to-[#f8d]'>
        <Button
          variant='old'
          className='relative h-full sm:hidden'
          onClick={() => setOpen((value) => !value)}
        >
          <RiPlanetFill size={24} />
          <div
            className={cn(
              'absolute -left-2 top-[calc(100%+4px)] flex flex-col',
              {
                ['hidden']: !open,
              },
            )}
          >
            {routers.map(({ path, display }) => (
              <a
                key={path}
                href={base + path + `?lang=${lang}`}
                className={buttonStyleGenerator({
                  variant: 'old',
                  className: 'text-nowrap py-4',
                })}
              >
                {display}
              </a>
            ))}
          </div>
        </Button>
        <span className='hidden px-2 text-white sm:inline-block'>
          FullStack
        </span>
        <nav className='hidden h-full items-center sm:flex'>
          {routers.map(({ path, display }) => (
            <a
              key={path}
              href={base + path + `?lang=${lang}`}
              className={buttonStyleGenerator({
                variant: 'old',
                className: 'flex h-full items-center gap-2',
              })}
            >
              {isPathActive(base + path) ? (
                <IoMdArrowRoundForward />
              ) : (
                <GoDotFill />
              )}
              <span className='text-black'>{display}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

const routers: { path: string; display: string }[] = [
  {
    path: '/',
    display: 'Main',
  },
  {
    path: '/about/',
    display: 'About me',
  },
  {
    path: '/projects/',
    display: 'Projects',
  },
];
