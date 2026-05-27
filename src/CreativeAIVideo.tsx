import React from "react";
import { Sequence } from "remotion";
import { CREATIVE_SCRIPT } from "./creative-script";
import { CreativeIntro } from "./creative-scenes/CreativeIntro";
import { DataOcean } from "./creative-scenes/DataOcean";
import { NeuralMaze } from "./creative-scenes/NeuralMaze";
import { VectorSpace } from "./creative-scenes/VectorSpace";
import { AttentionSymphony } from "./creative-scenes/AttentionSymphony";
import { CreativeInteraction } from "./creative-scenes/CreativeInteraction";
import { CreativeOutro } from "./creative-scenes/CreativeOutro";
import { Particles } from "./components/Particles";

export const CreativeAIVideo: React.FC = () => {
  let currentFrame = 0;

  const renderScene = (scene: typeof CREATIVE_SCRIPT[0]) => {
    switch (scene.id) {
      case 'intro': return <CreativeIntro title={scene.title} subtitle={scene.subtitle} />;
      case 'data': return <DataOcean title={scene.title} subtitle={scene.subtitle} />;
      case 'architecture': return <NeuralMaze title={scene.title} subtitle={scene.subtitle} />;
      case 'vectors': return <VectorSpace title={scene.title} subtitle={scene.subtitle} />;
      case 'attention': return <AttentionSymphony title={scene.title} subtitle={scene.subtitle} />;
      case 'interaction': return <CreativeInteraction title={scene.title} subtitle={scene.subtitle} />;
      case 'outro': return <CreativeOutro title={scene.title} subtitle={scene.subtitle} />;
      default: return null;
    }
  };

  return (
    <div style={{ flex: 1, backgroundColor: '#000' }}>
      <Particles count={30} />
      {CREATIVE_SCRIPT.map((scene) => {
        const startFrame = currentFrame;
        currentFrame += scene.duration;
        return (
          <Sequence key={scene.id} from={startFrame} durationInFrames={scene.duration}>
            {renderScene(scene)}
          </Sequence>
        );
      })}
    </div>
  );
};
