import { useState, useEffect } from "react";

// three
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stage } from "@react-three/drei";
import {
  Bloom,
  Noise,
  Vignette,
  EffectComposer,
} from "@react-three/postprocessing";

// geometry
import { CubeModel } from "./vlt-geometry";

// theatre js
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import demoProjectScene from "../public/scene/demo.theatre-project-state.json";

// studio (development only, remove in prod)
{
  /*
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
studio.initialize();
studio.extend(extension);
 */
}

// the theatrejs animation
const demoSheet = getProject("Demo Project", { state: demoProjectScene }).sheet(
  "Demo Sheet",
);

type CanvasColor = "black" | "white";

export const ThreeCanvasCubes = () => {
  const [playReverse, setPlayReverse] = useState<boolean>(false);

  // this is for changing color based on theme
  const [color, _setColor] = useState<CanvasColor>("black");

  {
    /* handles the sequencing of the animation */
  }
  useEffect(() => {
    const playSequence = () => {
      demoSheet.sequence
        .play({
          iterationCount: 1,
          range: [0, 4],
          direction: playReverse ? "reverse" : "normal",
        })
        .then((played: boolean) => {
          if (played) {
            setPlayReverse((prev) => !prev);
          } else {
            console.warn("Sequence interrupted or failed.");
          }
        })
        .catch((error) => {
          console.error("Error occured: ", error);
        });
    };

    demoSheet.project.ready.then(() => {
      setTimeout(() => playSequence(), 3000); // delays the start of the animation loop
    });
  }, [playReverse]);

  return (
    <Canvas
      style={{ background: color }}
      gl={{
        powerPreference: "high-performance",
        antialias: false,
        stencil: false,
        depth: true,
      }}
    >
      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.025}
          mipmapBlur={false}
        />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.2} darkness={1.1} />
      </EffectComposer>
      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera
          zoom={1}
          position={[-2.2, 1, 2.66]}
          fov={90}
          makeDefault
        />

        <directionalLight position={[-8, 0.5, 1]} intensity={5} />
        <directionalLight position={[5.5, -2.3, 4.5]} intensity={5} />
        <directionalLight position={[-9.75, 1, 11.52]} intensity={5} />
        <Stage preset="soft" intensity={10} environment="studio">
          <pointLight position={[0, 0, 0]} intensity={10} />
          <pointLight position={[0, 2, 0]} intensity={10} />
          <CubeModel />
          <OrbitControls
            target={[0, 0, 0]}
            position={[5, 5, -5]}
            enableDamping
            dampingFactor={0.1}
          />
        </Stage>
      </SheetProvider>
    </Canvas>
  );
};
