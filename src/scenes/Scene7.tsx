import React from "react";
import React from 'react';
import { useCurrentFrame, AbsoluteFill, interpolate } from 'remotion';
import { colorSystem } from '../design-system';
import { ChatInterface, Message, TypeWriter } from '../components/Chat';

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: colorSystem.background.dark, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ChatInterface width={1000}>
        <Message type="user" avatar="👤" startFrame={30}>
          <TypeWriter text="ما هي عاصمة فرنسا؟" speed={3} startFrame={50} />
        </Message>

        <Message type="ai" avatar="🤖" startFrame={180}>
          <TypeWriter text="عاصمة فرنسا هي باريس 🗼" speed={2} startFrame={200} />
        </Message>
      </ChatInterface>

      <div style={{
        position: 'absolute',
        right: '50px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        direction: 'rtl'
      }}>
        {[
          { label: 'الوقت', value: '0.8s', icon: '⚡' },
          { label: 'التوكنات', value: '12', icon: '🔢' },
          { label: 'الثقة', value: '99.2%', icon: '✅' }
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              backgroundColor: colorSystem.background.medium,
              padding: '20px',
              borderRadius: '15px',
              border: `1px solid ${colorSystem.primary[500]}`,
              width: '200px',
              opacity: interpolate(frame, [250 + i * 20, 280 + i * 20], [0, 1], { extrapolateLeft: 'clamp' })
            }}
          >
            <div style={{ fontSize: '20px', color: colorSystem.text.secondary }}>{stat.icon} {stat.label}</div>
            <div style={{ fontSize: '30px', color: colorSystem.text.primary, fontWeight: 'bold' }}>{stat.value}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
