import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

type Props = {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  format?: (n: number) => string;
  className?: string;
};

export function CountUp({
  to,
  from = 0,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  format,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, from, duration]);

  const display = format
    ? format(value)
    : value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

// Helper: parse "120M+", "8+", "98%" into {num, suffix}
export function SmartCount({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^([\d.]+)([KMB]?)(.*)$/);
  if (!match) return <span className={className}>{value}</span>;
  const [, numStr, scale, rest] = match;
  const num = parseFloat(numStr);
  const suffix = `${scale}${rest}`;
  return <CountUp to={num} suffix={suffix} duration={2.2} className={className} />;
}
