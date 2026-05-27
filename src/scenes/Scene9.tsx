import React from "react";
import React from 'react';
import { useCurrentFrame, AbsoluteFill, interpolate, Easing } from 'remotion';
import { colorSystem } from '../design-system';

export const Scene9: React.FC = () => {
  const frame = useCurrentFrame();

  const logoScale = interpolate(frame, [0, 50], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.7)),
  });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(135deg, ${colorSystem.background.dark}, #1E1B4B, #312E81)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      direction: 'rtl'
    }}>
      <div style={{
        fontSize: '150px',
        transform: `scale(${logoScale}) rotate(${interpolate(frame, [0, 50], [180, 0])}deg)`,
        marginBottom: '50px'
      }}>
        🤖
      </div>

      <h1 style={{
        fontSize: '72px',
        color: colorSystem.text.primary,
        opacity: interpolate(frame, [40, 70], [0, 1]),
        marginBottom: '40px'
      }}>
        شكراً للمتابعة!
      </h1>

      <div style={{
        display: 'flex',
        gap: '40px',
        opacity: interpolate(frame, [80, 110], [0, 1])
      }}>
        {[
          { icon: '👍', label: 'أعجبني' },
          { icon: '🔔', label: 'اشترك' },
          { icon: '💬', label: 'علق' }
        ].map((item, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '60px', marginBottom: '10px' }}>{item.icon}</div>
            <div style={{ fontSize: '24px', color: colorSystem.text.secondary }}>{item.label}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '100px',
        fontSize: '28px',
        color: colorSystem.primary[100],
        opacity: interpolate(frame, [120, 150], [0, 0.7])
      }}>
        تابعنا لمزيد من شروحات الذكاء الاصطناعي
      </div>
    </AbsoluteFill>
  );
};
