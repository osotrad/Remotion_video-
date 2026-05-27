import React from "react";
import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { colorSystem } from '../design-system';

export const ChatInterface: React.FC<{
  children: React.ReactNode;
  width: number;
}> = ({ children, width }) => {
  return (
    <div
      style={{
        width,
        backgroundColor: colorSystem.background.medium,
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        border: `1px solid ${colorSystem.background.light}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export const Message: React.FC<{
  type: 'user' | 'ai';
  avatar: string;
  startFrame: number;
  children: React.ReactNode;
}> = ({ type, avatar, startFrame, children }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const xOffset = interpolate(frame, [startFrame, startFrame + 15], [type === 'user' ? 50 : -50, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: type === 'user' ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        gap: '15px',
        opacity,
        transform: `translateX(${xOffset}px)`,
        direction: 'rtl'
      }}
    >
      <div style={{ fontSize: '30px', backgroundColor: colorSystem.background.light, padding: '10px', borderRadius: '50%' }}>
        {avatar}
      </div>
      <div
        style={{
          backgroundColor: type === 'user' ? colorSystem.primary[600] : colorSystem.background.dark,
          padding: '15px 25px',
          borderRadius: '15px',
          fontSize: '24px',
          color: colorSystem.text.primary,
          maxWidth: '80%'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const TypeWriter: React.FC<{
  text: string;
  speed: number;
  startFrame: number;
}> = ({ text, speed, startFrame }) => {
  const frame = useCurrentFrame();
  const charsShown = Math.floor(Math.max(0, frame - startFrame) / speed);
  return <span>{text.substring(0, charsShown)}</span>;
};
