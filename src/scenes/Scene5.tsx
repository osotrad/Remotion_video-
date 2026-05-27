import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion';
import { colorSystem } from '../design-system';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const words = ['القطة', 'جلست', 'على', 'السجادة', 'الدافئة'];

  return (
    <AbsoluteFill style={{ backgroundColor: colorSystem.background.dark, direction: 'rtl' }}>
      <h1 style={{ fontSize: '56px', color: colorSystem.text.primary, textAlign: 'center', marginTop: '80px' }}>
        آلية الانتباه (Attention)
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '100px' }}>
        {words.map((word, i) => {
          const isFocused = i === 0; // Focus on "القطة"
          const glow = isFocused ? interpolate(Math.sin(frame / 10), [-1, 1], [0.5, 1]) : 0.3;

          return (
            <div
              key={i}
              style={{
                fontSize: '48px',
                color: isFocused ? colorSystem.accent[500] : colorSystem.text.primary,
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: isFocused ? 'rgba(236, 72, 153, 0.1)' : 'transparent',
                boxShadow: isFocused ? `0 0 20px rgba(236, 72, 153, ${glow})` : 'none',
              }}
            >
              {word}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '100px', padding: '0 100px' }}>
        <div style={{ fontSize: '32px', color: colorSystem.text.secondary, marginBottom: '20px' }}>
          توقع الكلمة التالية:
        </div>
        {[
          { word: 'السجادة', prob: 0.45, color: colorSystem.primary[500] },
          { word: 'الكرسي', prob: 0.25, color: colorSystem.secondary[500] },
          { word: 'الأرض', prob: 0.15, color: colorSystem.accent[500] },
        ].map((p, i) => (
          <div key={i} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: colorSystem.text.primary, fontSize: '24px', marginBottom: '5px' }}>
              <span>{p.word}</span>
              <span>{Math.round(p.prob * 100)}%</span>
            </div>
            <div style={{ height: '20px', backgroundColor: colorSystem.background.light, borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                backgroundColor: p.color,
                width: `${interpolate(frame, [150, 250], [0, p.prob * 100], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}%`
              }} />
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
