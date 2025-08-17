import { useEffect, useRef, useState } from "react";

export default function Counter({ end, duration = 1500, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string; }) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number>();

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [end, duration]);

  return <span>{prefix}{value.toLocaleString()}{suffix}</span>;
}
