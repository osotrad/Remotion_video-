import React from "react";
import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';
import { Scene5 } from './scenes/Scene5';
import { Scene6 } from './scenes/Scene6';
import { Scene7 } from './scenes/Scene7';
import { Scene8 } from './scenes/Scene8';
import { Scene9 } from './scenes/Scene9';

export const LLMExplainerVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={450}>
        <Scene1 />
      </Sequence>
      <Sequence from={450} durationInFrames={450}>
        <Scene2 />
      </Sequence>
      <Sequence from={900} durationInFrames={600}>
        <Scene3 />
      </Sequence>
      <Sequence from={1500} durationInFrames={750}>
        <Scene4 />
      </Sequence>
      <Sequence from={2250} durationInFrames={600}>
        <Scene5 />
      </Sequence>
      <Sequence from={2850} durationInFrames={450}>
        <Scene6 />
      </Sequence>
      <Sequence from={3300} durationInFrames={450}>
        <Scene7 />
      </Sequence>
      <Sequence from={3750} durationInFrames={450}>
        <Scene8 />
      </Sequence>
      <Sequence from={4200} durationInFrames={300}>
        <Scene9 />
      </Sequence>
    </AbsoluteFill>
  );
};
