import React from "react";
import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { colorSystem } from '../design-system';

export const Counter: React.FC<{
  from: number;
  to: number;
  suffix: string;
  duration: number;
  style?: React.CSSProperties;
}> = ({ from, to, suffix, duration, style }) => {
  const frame = useCurrentFrame();
  const value = interpolate(frame, [0, duration], [from, to], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={style}>
      {Math.floor(value)}
      {suffix}
    </div>
  );
};

export const InfoBox: React.FC<{
  title: string;
  description: string;
  icon: string;
  position: 'bottom-right' | 'bottom-left' | 'bottom';
  delay: number;
}> = ({ title, description, icon, position, delay }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const posStyle: React.CSSProperties =
    position === 'bottom-right'
      ? { bottom: 50, right: 50 }
      : position === 'bottom-left'
      ? { bottom: 50, left: 50 }
      : { bottom: 50, left: '50%', transform: 'translateX(-50%)' };

  return (
    <div
      style={{
        position: 'absolute',
        ...posStyle,
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        padding: '20px',
        borderRadius: '15px',
        border: `1px solid ${colorSystem.primary[500]}`,
        width: '400px',
        opacity,
        direction: 'rtl',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: colorSystem.text.primary, marginBottom: '10px' }}>
        {icon} {title}
      </div>
      <div style={{ fontSize: '18px', color: colorSystem.text.secondary }}>
        {description}
      </div>
    </div>
  );
};
