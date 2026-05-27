import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { colorSystem } from "../design-system";

export const VectorSpace: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();

  const words = ["ذكاء", "رياضيات", "لغة", "تعلم", "بيانات", "مستقبل"];

  return (
    <div style={{
      flex: 1,
      backgroundColor: colorSystem.background,
      color: colorSystem.text,
      fontFamily: 'Tajawal',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ position: 'absolute', top: 50, right: 50, textAlign: 'right' }}>
        <h2 style={{ fontSize: 60, color: colorSystem.primary }}>{title}</h2>
        <p style={{ fontSize: 30 }}>{subtitle}</p>
      </div>
      <div style={{ position: 'relative', width: 800, height: 800 }}>
        {words.map((word, i) => {
          const angle = (i / words.length) * Math.PI * 2 + (frame * 0.01);
          const radius = 200 + Math.sin(frame * 0.05 + i) * 50;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div key={word} style={{
              position: 'absolute',
              left: 400 + x,
              top: 400 + y,
              fontSize: 40,
              color: colorSystem.accent,
              transform: `translate(-50%, -50%)`,
              opacity: interpolate(frame, [0, 30], [0, 1])
            }}>
              {word}
            </div>
          );
        })}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 2,
          height: 600,
          backgroundColor: 'white',
          opacity: 0.1,
          transform: 'translate(-50%, -50%)'
        }} />
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 600,
          height: 2,
          backgroundColor: 'white',
          opacity: 0.1,
          transform: 'translate(-50%, -50%)'
        }} />
      </div>
    </div>
  );
};
