import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill, spring, useVideoConfig } from 'remotion';
import { colorSystem } from '../design-system';
import { InfoBox } from '../components/CommonUI';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tokens = [
    { text: 'الذكاء', id: 4523, color: colorSystem.primary[500] },
    { text: 'الاصطناعي', id: 8912, color: colorSystem.secondary[500] },
    { text: 'يغير', id: 2341, color: colorSystem.accent[500] },
    { text: 'العالم', id: 7654, color: colorSystem.warning[500] }
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colorSystem.background.dark }}>
      {/* Original Sentence */}
      <div style={{
        fontSize: '64px',
        textAlign: 'center',
        marginTop: '100px',
        color: colorSystem.text.primary,
        opacity: interpolate(frame, [0, 50, 150, 200], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        direction: 'rtl'
      }}>
        الذكاء الاصطناعي يغير العالم
      </div>

      {/* Tokens */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: '20px',
        direction: 'rtl'
      }}>
        {tokens.map((token, index) => {
          const startFrame = 180 + index * 20;
          const spr = spring({
            frame: frame - startFrame,
            fps,
            config: { damping: 12 }
          });

          return (
            <div
              key={index}
              style={{
                backgroundColor: token.color,
                padding: '30px 50px',
                borderRadius: '20px',
                opacity: spr,
                transform: `scale(${spr}) translateY(${interpolate(spr, [0, 1], [100, 0])}px)`,
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ fontSize: '42px', color: 'white', fontWeight: 'bold' }}>
                {token.text}
              </div>
              <div style={{ fontSize: '24px', color: 'white', opacity: 0.8, marginTop: '10px' }}>
                ID: {token.id}
              </div>
            </div>
          );
        })}
      </div>

      <InfoBox
        title="التوكنات (Tokens)"
        description="تحويل الكلمات إلى أرقام يفهمها الحاسوب"
        icon="🔢"
        position="bottom"
        delay={350}
      />
    </AbsoluteFill>
  );
};
