import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { colorSystem } from "../design-system";

export const NeuralMaze: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      flex: 1,
      backgroundColor: colorSystem.background,
      color: colorSystem.text,
      fontFamily: 'Tajawal',
      padding: 100,
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ width: '50%' }}>
        <h2 style={{ fontSize: 80, color: colorSystem.secondary }}>{title}</h2>
        <p style={{ fontSize: 40, marginTop: 20 }}>{subtitle}</p>
      </div>
      <div style={{
        width: 600,
        height: 600,
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20
      }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} style={{
            width: 120,
            height: 120,
            border: `2px solid ${colorSystem.accent}`,
            borderRadius: 10,
            opacity: interpolate(frame % 60, [0, 30, 60], [0.2, 1, 0.2]),
            transform: `scale(${interpolate(frame % 90, [0, 45, 90], [0.8, 1.1, 0.8])})`
          }} />
        ))}
      </div>
    </div>
  );
};
