import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colorSystem } from "../design-system";

export const CreativeIntro: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const scale = spring({ frame, fps, config: { damping: 10 } });

  return (
    <div style={{
      flex: 1,
      backgroundColor: colorSystem.background,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: colorSystem.text,
      fontFamily: 'Tajawal'
    }}>
      <div style={{
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colorSystem.secondary} 0%, transparent 70%)`,
        opacity: interpolate(frame, [0, 60], [0, 0.8]),
        transform: `scale(${interpolate(frame, [0, 150], [1, 5])})`,
        position: 'absolute'
      }} />
      <h1 style={{
        fontSize: 120,
        fontWeight: 'bold',
        opacity,
        transform: `scale(${scale})`,
        textAlign: 'center',
        zIndex: 1
      }}>
        {title}
      </h1>
      <p style={{
        fontSize: 40,
        opacity: interpolate(frame, [40, 70], [0, 1]),
        marginTop: 20,
        zIndex: 1
      }}>
        {subtitle}
      </p>
    </div>
  );
};
