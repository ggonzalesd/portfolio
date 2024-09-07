import { useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import { LangKey } from '@/locale/en';
import { useTypedTranslation } from '@/hooks';
import { AiOutlineGlobal } from 'react-icons/ai';

import Button, { buttonStyleGenerator } from './button';

import { IoMdArrowRoundForward } from 'react-icons/io';
import { RiPlanetFill } from 'react-icons/ri';
import { GoDotFill } from 'react-icons/go';

import styles from './header.module.css';

const base = import.meta.env.BASE_URL;

export default function Header() {
  const pathname = useMemo(() => window.location.pathname, []);
  const lang = new URLSearchParams(window.location.search).get('lang') ?? 'en';
  const isPathActive = useCallback(
    (path: string) => pathname === path || pathname + '/' === path,
    [pathname],
  );

  const [open, setOpen] = useState(false);
  const t = useTypedTranslation();

  const currentLang = useMemo(
    () => (t.lang === 'es' ? 'Spanish' : 'English'),
    [t.lang],
  );

  const changeLang = () => {
    const newLang = t.lang === 'en' ? 'es' : 'en';
    t.change(newLang);
    const queries = new URLSearchParams(window.location.search);
    queries.set('lang', newLang);
    history.pushState({}, '', window.location.pathname + '?' + queries);
  };

  return (
    <header className='fixed left-0 top-0 z-10 h-12 w-full'>
      <div className='mx-auto flex h-full max-w-screen-lg items-center justify-between border-4 bg-gradient-to-r from-[#8af] to-[#f8d]'>
        <Button
          variant='old'
          className='relative h-full sm:hidden'
          onClick={() => setOpen((value) => !value)}
        >
          <RiPlanetFill size={24} />
          <nav
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
                {t.text(display)}
              </a>
            ))}
          </nav>
        </Button>
        <span className='hidden px-2 text-white sm:inline-block'>
          FullStack
        </span>
        <div className='flex h-full'>
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
                <span className='text-black'>{t.text(display)}</span>
              </a>
            ))}
          </nav>
          <Button
            variant='gold'
            className={cn(styles.Header_LangButton, 'flex items-center')}
            onClick={changeLang}
          >
            <span>{currentLang}</span>
            <AiOutlineGlobal />
          </Button>
        </div>
      </div>
    </header>
  );
}

const routers: { path: string; display: LangKey }[] = [
  {
    path: '/',
    display: 'app.header.route-01.display',
  },
  //   {
  //     path: '/about/',
  //     display: 'app.header.route-02.display',
  //   },
  {
    path: '/projects/',
    display: 'app.header.route-03.display',
  },
];
