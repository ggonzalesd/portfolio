import { buttonStyleGenerator } from './button';

export default function Header() {
  return (
    <header className='fixed left-0 top-0 h-16 w-full bg-gradient-to-b from-[#8af] to-transparent backdrop-blur-xl'>
      <div className='mx-auto flex h-full max-w-screen-lg justify-end'>
        <nav className='flex items-center gap-2'>
          {routers.map(({ path, display }) => (
            <a
              key={path}
              href={import.meta.env.BASE_URL + path}
              className={buttonStyleGenerator({ variant: 'text' })}
            >
              <span>{display}</span>
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
