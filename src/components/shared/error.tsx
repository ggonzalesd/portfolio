import { BiSolidError } from 'react-icons/bi';

export default function Error() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='from-secondary to-primary relative flex w-9/12 items-center gap-2 border-4 bg-gradient-to-r px-2'>
        <div />
        <BiSolidError />
        Errror
      </div>
    </div>
  );
}
