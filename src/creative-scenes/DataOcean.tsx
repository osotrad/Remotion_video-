import React from "react";
import { useCurrentFrame, interpolate, useVideoConfig } from "remotion";
import { colorSystem } from "../design-system";

export const DataOcean: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const particles = Array.from({ length: 50 }).map((_, i) => ({
    x: (Math.sin(i * 123.45) + 1) / 2 * width,
    y: (Math.cos(i * 543.21) + 1) / 2 * height,
    size: (Math.sin(i) + 2) * 5,
    speed: (Math.sin(i * 10) + 2) * 2
  }));

  return (
    <div style={{
      flex: 1,
      backgroundColor: colorSystem.background,
      color: colorSystem.text,
      fontFamily: 'Tajawal',
      padding: 100,
      overflow: 'hidden',
      position: 'relative'
    }}>
      {particles.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: p.x,
          top: (p.y + frame * p.speed) % height,
          width: p.size,
          height: p.size,
          backgroundColor: colorSystem.accent,
          borderRadius: '50%',
          opacity: 0.3
        }} />
      ))}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 80, color: colorSystem.primary }}>{title}</h2>
        <p style={{ fontSize: 40, marginTop: 20 }}>{subtitle}</p>
      </div>
    </div>
  );
};
