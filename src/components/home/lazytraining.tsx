import { AiOutlineFile } from 'react-icons/ai';

export default function LazyTraining() {
  return (
    <div className='flex justify-center px-4'>
      <div className='flex flex-wrap justify-start gap-4'>
        {[...new Uint8Array(12)].map((_, index) => (
          <div key={index}>
            <picture className='group flex flex-col items-center border-4 border-transparent p-2 hover:cursor-pointer hover:border-white active:bg-sky-400/50'>
              <AiOutlineFile size={96} className='text-white' />
              <span className='select-none'>File</span>
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}
