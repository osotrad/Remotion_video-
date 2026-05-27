import React from "react";
import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion';
import { colorSystem } from '../design-system';
import { Counter } from '../components/CommonUI';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: colorSystem.background.dark }}>
      <div style={{ padding: '80px', direction: 'rtl' }}>
        <h1 style={{ fontSize: '64px', color: colorSystem.primary[500], marginBottom: '40px' }}>
          التدريب على البيانات
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {['• كتب ومقالات', '• مواقع إنترنت', '• محادثات ونصوص'].map((text, i) => (
            <div
              key={i}
              style={{
                fontSize: '40px',
                color: colorSystem.text.primary,
                opacity: interpolate(frame, [20 + i * 30, 50 + i * 30], [0, 1], { extrapolateLeft: 'clamp' }),
                transform: `translateX(${interpolate(frame, [20 + i * 30, 50 + i * 30], [50, 0], { extrapolateLeft: 'clamp' })}px)`
              }}
            >
              {text}
            </div>
          ))}
        </div>

        <Counter
          from={0}
          to={175}
          suffix=" مليار كلمة"
          duration={300}
          style={{
            fontSize: '72px',
            color: colorSystem.accent[500],
            position: 'absolute',
            bottom: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontWeight: 'bold',
            opacity: interpolate(frame, [100, 130], [0, 1], { extrapolateLeft: 'clamp' })
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
