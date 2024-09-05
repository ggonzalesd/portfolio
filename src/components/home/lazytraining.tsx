import FileTraining from './filetraining';

export default function LazyTraining() {
  return (
    <div className='flex justify-center px-4'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
        {[...new Uint8Array(1)].map((_, index) => (
          <div key={index}>
            <FileTraining />
          </div>
        ))}
      </div>
    </div>
  );
}
