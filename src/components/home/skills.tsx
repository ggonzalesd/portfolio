import skills from '@/assets/skills';

import styles from './Skills.module.css';

export default function Skills() {
  return (
    <div className='relative overflow-x-hidden whitespace-nowrap bg-zinc-300 py-4'>
      {[0, 1].map((i) => (
        <div key={i} className={styles.Home_SkillLogoSlide}>
          {Object.values(skills).map(({ src, display }, index) => (
            <picture
              key={index}
              className='mx-4 inline-block rounded-md bg-white/0 p-1'
            >
              <img
                src={src}
                alt={`${display} logo`}
                className='mx-auto aspect-square h-[60px]'
              />
              <div className='flex w-full justify-center'>
                <span>{display}</span>
              </div>
            </picture>
          ))}
        </div>
      ))}
    </div>
  );
}
