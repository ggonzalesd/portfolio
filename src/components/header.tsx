import { useCallback, useMemo } from 'react';
import cn from 'classnames';

import { buttonStyleGenerator } from './button';

import { IoMdArrowRoundForward } from 'react-icons/io';

const base = import.meta.env.BASE_URL;

export default function Header() {
  const pathname = useMemo(() => window.location.pathname, []);
  const lang = useMemo(
    () => new URLSearchParams(window.location.search).get('lang'),
    [],
  );
  const isPathActive = useCallback(
    (path: string) => pathname === path || pathname + '/' === path,
    [pathname],
  );

  return (
    <header className='fixed left-0 top-0 h-16 w-full bg-gradient-to-b from-[#8af] to-transparent backdrop-blur-xl'>
      <div className='mx-auto flex h-full max-w-screen-lg justify-end'>
        <nav className='flex items-center gap-10'>
          {routers.map(({ path, display }) => (
            <a
              key={path}
              href={base + path + `?lang=${lang}`}
              className={buttonStyleGenerator({
                variant: 'text',
                className: 'flex items-center gap-2',
              })}
            >
              <IoMdArrowRoundForward
                className={cn('text-black', {
                  ['hidden']: !isPathActive(base + path),
                })}
              />
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
