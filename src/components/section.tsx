interface Props {
  children?: React.ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <section className='w-full'>
      <div className='mx-auto w-full max-w-screen-lg'>{children}</div>
    </section>
  );
}
