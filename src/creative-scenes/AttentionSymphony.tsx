import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { colorSystem } from "../design-system";

export const AttentionSymphony: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      flex: 1,
      backgroundColor: colorSystem.background,
      color: colorSystem.text,
      fontFamily: 'Tajawal',
      padding: 100,
    }}>
      <h2 style={{ fontSize: 70, color: colorSystem.secondary, textAlign: 'right' }}>{title}</h2>
      <p style={{ fontSize: 35, textAlign: 'right' }}>{subtitle}</p>

      <div style={{ marginTop: 100, display: 'flex', justifyContent: 'space-around', position: 'relative' }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{
            width: 100,
            height: 100,
            backgroundColor: colorSystem.accent,
            borderRadius: '50%',
            zIndex: 2
          }} />
        ))}

        <svg style={{ position: 'absolute', width: '100%', height: 300, top: 0, left: 0, zIndex: 1 }}>
          {[1, 2, 3, 4, 5].map(i => (
            [1, 2, 3, 4, 5].map(j => (
              <line
                key={`${i}-${j}`}
                x1={`${i * 20}%`}
                y1="50"
                x2={`${j * 20}%`}
                y2="50"
                stroke={colorSystem.primary}
                strokeWidth={interpolate(frame % 30, [0, 15, 30], [0, 3, 0])}
                opacity={0.3}
              />
            ))
          ))}
        </svg>
      </div>
    </div>
  );
};
