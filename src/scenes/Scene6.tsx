import React from "react";
import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion';
import { colorSystem } from '../design-system';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: colorSystem.background.dark, direction: 'rtl' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        {/* Left Panel: Graph */}
        <div style={{ flex: 1, padding: '60px', borderLeft: `1px solid ${colorSystem.background.light}` }}>
          <h2 style={{ fontSize: '40px', color: colorSystem.text.primary, marginBottom: '40px' }}>انخفاض الخطأ مع التدريب</h2>
          <div style={{
            height: '400px',
            borderBottom: `2px solid ${colorSystem.text.secondary}`,
            borderRight: `2px solid ${colorSystem.text.secondary}`,
            position: 'relative',
            padding: '20px'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 0 10 L 20 30 L 40 50 L 60 70 L 80 85 L 100 95"
                fill="none"
                stroke={colorSystem.accent[500]}
                strokeWidth="2"
                strokeDasharray="200"
                strokeDashoffset={interpolate(frame, [50, 300], [200, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })}
              />
            </svg>
          </div>
        </div>

        {/* Right Panel: Stats */}
        <div style={{ flex: 1, padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px' }}>
          {[
            { label: 'استهلاك الطاقة', value: '1,287 MWh', icon: '⚡', color: colorSystem.warning[500] },
            { label: 'مدة التدريب', value: '34 يوم', icon: '⏱️', color: colorSystem.primary[500] },
            { label: 'التكلفة التقريبية', value: '$4.6M', icon: '💰', color: colorSystem.accent[500] },
            { label: 'وحدات GPU', value: '1,024', icon: '🖥️', color: colorSystem.secondary[500] },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                opacity: interpolate(frame, [100 + i * 30, 130 + i * 30], [0, 1], { extrapolateLeft: 'clamp' }),
                transform: `translateX(${interpolate(frame, [100 + i * 30, 130 + i * 30], [50, 0], { extrapolateLeft: 'clamp' })}px)`
              }}
            >
              <span style={{ fontSize: '50px' }}>{stat.icon}</span>
              <div>
                <div style={{ fontSize: '24px', color: colorSystem.text.secondary }}>{stat.label}</div>
                <div style={{ fontSize: '36px', color: stat.color, fontWeight: 'bold' }}>{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '10px',
        backgroundColor: colorSystem.background.light
      }}>
        <div style={{
          height: '100%',
          background: `linear-gradient(90deg, ${colorSystem.primary[500]}, ${colorSystem.accent[500]})`,
          width: `${interpolate(frame, [0, 450], [0, 100])}%`
        }} />
      </div>
    </AbsoluteFill>
  );
};
