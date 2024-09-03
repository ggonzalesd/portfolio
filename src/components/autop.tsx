import { useEffect, useMemo, useState } from 'react';

interface Props {
  text: string;
  speed: number;
}

export default function Autop({ text, speed }: Props) {
  const [index, setIndex] = useState(0);
  const length = useMemo(() => text.length, [text]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (index < length - 1) {
          setIndex((value) => value + 1);
        }
      },
      Math.round(speed / length),
    );

    return () => clearInterval(interval);
  }, [speed, length]);

  return <>{text.slice(0, index)}</>;
}
