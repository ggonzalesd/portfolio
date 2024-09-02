interface Props {
  children?: React.ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
