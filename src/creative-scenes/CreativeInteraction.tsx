import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colorSystem } from "../design-system";
import { ChatInterface } from "../components/Chat";

export const CreativeInteraction: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const chatSpring = spring({
    frame: frame - 15,
    fps,
    config: { stiffness: 100 }
  });

  return (
    <div style={{
      flex: 1,
      backgroundColor: colorSystem.background,
      color: colorSystem.text,
      fontFamily: 'Tajawal',
      padding: 50,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <h2 style={{ fontSize: 60, color: colorSystem.accent }}>{title}</h2>
        <p style={{ fontSize: 30 }}>{subtitle}</p>
      </div>

      <div style={{
        transform: `scale(${chatSpring})`,
        opacity: chatSpring,
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ width: '80%' }}>
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};
