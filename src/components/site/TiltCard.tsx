import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const ry = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const gx = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const gy = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={cn("relative group rounded-2xl glass border-gradient overflow-hidden card-hover", className)}
    >
      <motion.div
        style={{
          background: useTransform(
            [gx, gy] as any,
            ([gxv, gyv]: any) =>
              `radial-gradient(400px circle at ${gxv} ${gyv}, oklch(0.88 0.10 90 / 0.12), transparent 60%)`,
          ),
        }}
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
