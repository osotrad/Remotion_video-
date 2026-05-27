import React, { useMemo } from 'react';
import { useCurrentFrame, random } from 'remotion';

export const Particles: React.FC<{
  count: number;
  color?: string;
  opacity?: number;
  size?: [number, number];
  speed?: number;
}> = ({
  count,
  color = "#ffffff",
  opacity = 0.2,
  size = [2, 10],
  speed = 1,
}) => {
  const frame = useCurrentFrame();

  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      x: random(`x-${i}`) * 100,
      y: random(`y-${i}`) * 100,
      s: size[0] + random(`s-${i}`) * (size[1] - size[0]),
      phase: random(`p-${i}`) * Math.PI * 2,
    }));
  }, [count, size]);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {particles.map((p, i) => {
        const yOffset = (frame * speed + p.phase * 100) % 110;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${(p.y + yOffset) % 110 - 5}%`,
              width: p.s,
              height: p.s,
              backgroundColor: color,
              borderRadius: '50%',
              opacity: opacity,
            }}
          />
        );
      })}
    </div>
  );
};
