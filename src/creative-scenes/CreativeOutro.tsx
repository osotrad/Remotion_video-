import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { colorSystem } from "../design-system";

export const CreativeOutro: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      flex: 1,
      backgroundColor: colorSystem.background,
      color: colorSystem.text,
      fontFamily: 'Tajawal',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{
        fontSize: 100,
        opacity: interpolate(frame, [0, 60], [0, 1]),
        transform: `translateY(${interpolate(frame, [0, 60], [50, 0])}px)`
      }}>
        {title}
      </h2>
      <p style={{
        fontSize: 40,
        marginTop: 30,
        opacity: interpolate(frame, [40, 90], [0, 1])
      }}>
        {subtitle}
      </p>

      <div style={{
        marginTop: 100,
        width: 300,
        height: 4,
        backgroundColor: colorSystem.primary,
        transform: `scaleX(${interpolate(frame, [0, 150], [0, 1])})`
      }} />
    </div>
  );
};
