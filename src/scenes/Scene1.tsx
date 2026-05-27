import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill, Sequence } from 'remotion';
import { colorSystem } from '../design-system';
import { Particles } from '../components/Particles';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  const background = `linear-gradient(135deg, ${colorSystem.background.dark}, #1E1B4B)`;

  return (
    <AbsoluteFill style={{ background }}>
      <Particles
        count={100}
        color={colorSystem.primary[500]}
        opacity={0.3}
        size={[2, 6]}
        speed={0.5}
      />

      <Sequence from={30}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          direction: 'rtl'
        }}>
          <h1 style={{
            fontSize: '92px',
            fontWeight: 'bold',
            background: `linear-gradient(135deg, ${colorSystem.primary[500]}, ${colorSystem.accent[500]})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            opacity: interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: 'clamp' }),
            transform: `translateY(${interpolate(frame, [30, 60], [50, 0], { extrapolateLeft: 'clamp' })}px)`
          }}>
            نماذج اللغة الكبيرة
          </h1>
          <h2 style={{
            fontSize: '48px',
            color: colorSystem.text.secondary,
            marginTop: '20px',
            opacity: interpolate(frame, [50, 80], [0, 1], { extrapolateLeft: 'clamp' }),
          }}>
            كيف تفهم الآلات لغتنا؟
          </h2>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
