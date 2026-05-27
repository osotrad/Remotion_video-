import React from 'react';
import { useCurrentFrame, AbsoluteFill, interpolate } from 'remotion';
import { colorSystem } from '../design-system';

export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();

  const stages = [
    { icon: '📚', label: 'البيانات', color: colorSystem.primary[500] },
    { icon: '🔢', label: 'التوكنات', color: colorSystem.secondary[500] },
    { icon: '🧠', label: 'الشبكة العصبية', color: colorSystem.accent[500] },
    { icon: '💬', label: 'النص المولّد', color: colorSystem.warning[500] },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colorSystem.background.dark, direction: 'rtl' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
        gap: '40px',
        padding: '0 50px'
      }}>
        {stages.map((stage, i) => (
          <React.Fragment key={i}>
            <div style={{
              textAlign: 'center',
              opacity: interpolate(frame, [50 + i * 40, 80 + i * 40], [0, 1], { extrapolateLeft: 'clamp' }),
              transform: `scale(${interpolate(frame, [50 + i * 40, 80 + i * 40], [0.5, 1], { extrapolateLeft: 'clamp' })})`
            }}>
              <div style={{
                fontSize: '80px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                width: '150px',
                height: '150px',
                lineHeight: '150px',
                borderRadius: '50%',
                border: `2px solid ${stage.color}`,
                marginBottom: '20px'
              }}>
                {stage.icon}
              </div>
              <div style={{ fontSize: '32px', color: stage.color, fontWeight: 'bold' }}>{stage.label}</div>
            </div>
            {i < stages.length - 1 && (
              <div style={{
                fontSize: '50px',
                color: colorSystem.text.muted,
                opacity: interpolate(frame, [100 + i * 40, 130 + i * 40], [0, 1], { extrapolateLeft: 'clamp' })
              }}>
                ←
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div style={{ padding: '0 100px' }}>
        <h2 style={{ fontSize: '64px', color: colorSystem.text.primary, textAlign: 'center', marginBottom: '50px' }}>
          هكذا تفهم الآلات لغتنا
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {[
            { icon: '📊', text: 'تدريب على مليارات الكلمات', color: colorSystem.primary[500] },
            { icon: '🔢', text: 'تحويل اللغة إلى أرقام', color: colorSystem.secondary[500] },
            { icon: '🧠', text: 'معالجة عبر طبقات عميقة', color: colorSystem.accent[500] },
            { icon: '🎯', text: 'فهم السياق والتنبؤ الدقيق', color: colorSystem.warning[500] },
          ].map((point, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                fontSize: '32px',
                color: colorSystem.text.secondary,
                opacity: interpolate(frame, [250 + i * 30, 280 + i * 30], [0, 1], { extrapolateLeft: 'clamp' })
              }}
            >
              <span style={{ color: point.color }}>{point.icon}</span>
              {point.text}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
