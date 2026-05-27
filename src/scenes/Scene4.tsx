import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion';
import { colorSystem } from '../design-system';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  const layers = [
    { name: 'طبقة الإدخال', color: colorSystem.primary[500], nodes: 6 },
    { name: '96 طبقة مخفية', color: colorSystem.secondary[500], nodes: 12 },
    { name: 'طبقة الإخراج', color: colorSystem.accent[500], nodes: 6 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: colorSystem.background.dark, direction: 'rtl' }}>
      <div style={{ padding: '60px' }}>
        <h1 style={{ fontSize: '56px', color: colorSystem.text.primary, textAlign: 'center' }}>
          الشبكة العصبية العميقة
        </h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flex: 1, padding: '0 100px' }}>
        {layers.map((layer, lIdx) => (
          <div key={lIdx} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {Array.from({ length: layer.nodes }).map((_, nIdx) => (
                <div
                  key={nIdx}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: layer.color,
                    boxShadow: `0 0 15px ${layer.color}`,
                    opacity: interpolate(frame, [50 + lIdx * 30, 80 + lIdx * 30], [0, 1], { extrapolateLeft: 'clamp' })
                  }}
                />
              ))}
            </div>
            <div style={{
              marginTop: '30px',
              fontSize: '28px',
              color: layer.color,
              opacity: interpolate(frame, [70 + lIdx * 30, 100 + lIdx * 30], [0, 1], { extrapolateLeft: 'clamp' })
            }}>
              {layer.name}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        position: 'absolute',
        bottom: '80px',
        right: '80px',
        backgroundColor: 'rgba(30, 41, 59, 0.7)',
        padding: '30px',
        borderRadius: '20px',
        border: `1px solid ${colorSystem.secondary[500]}`,
        width: '350px'
      }}>
        {[
          { label: 'عدد الطبقات', value: '96' },
          { label: 'المعاملات', value: '175B' },
          { label: 'الاتصالات', value: 'تريليونات' }
        ].map((stat, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '24px' }}>
            <span style={{ color: colorSystem.text.secondary }}>{stat.label}:</span>
            <span style={{ color: colorSystem.accent[500], fontWeight: 'bold' }}>{stat.value}</span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
