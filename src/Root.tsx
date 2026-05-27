import React from 'react';
import { Composition, delayRender, continueRender } from 'remotion';
import { LLMExplainerVideo } from './LLMExplainerVideo';
import { CreativeAIVideo } from './CreativeAIVideo';
import './index.css';
import { loadFont } from "@remotion/google-fonts/Tajawal";

const { waitUntilDone } = loadFont("normal", {
  weights: ["400", "700"],
});

export const RemotionRoot: React.FC = () => {
  const waitForFont = delayRender();
  waitUntilDone()
    .then(() => {
      continueRender(waitForFont);
    })
    .catch((err) => {
      console.error("Font loading failed", err);
      continueRender(waitForFont);
    });

  return (
    <>
      <Composition
        id="LLMExplainer"
        component={LLMExplainerVideo}
        durationInFrames={4500}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CreativeAI"
        component={CreativeAIVideo}
        durationInFrames={4500}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
