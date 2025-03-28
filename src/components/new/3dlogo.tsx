import { OrbitControls, Environment, Center } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";
/* @ts-expect-error Just ignore it */
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  EffectComposer,
  Bloom,
  BrightnessContrast,
  SMAA,
  ToneMapping,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export const Logo3dScene: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);
  const gltf = useLoader(GLTFLoader, "/models/logo-26.glb");

  return (
    <Suspense>
      <Canvas
        shadows
        camera={{ position: [0, 0, 150], fov: 50 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          outputColorSpace: "srgb",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0, // adjusted exposure
          preserveDrawingBuffer: true,
          alpha: true,
          logarithmicDepthBuffer: true,
        }}
      >
        <Environment preset="city" background={false} />
        <Environment preset="warehouse" background={false} />
        <Center>
          <primitive
            ref={modelRef}
            object={gltf.scene}
            position={[0, 0, -20]}
            rotation={[-10, (Math.PI / 25) * -1, 0]}
          />
        </Center>
        <EffectComposer multisampling={8}>
          <SMAA />
          <Bloom
            intensity={0.7} // adjusted intensity
            luminanceThreshold={0.4}
            luminanceSmoothing={0.95}
            mipmapBlur={true}
            radius={0.9} // adjusted radius
          />
          <BrightnessContrast
            brightness={0.06} // adjusted brightness
            contrast={0.01}
            blendFunction={BlendFunction.NORMAL}
          />
          <ToneMapping
            adaptive
            resolution={256}
            middleGrey={0.6}
            maxLuminance={16.0}
            averageLuminance={1.0}
            adaptationRate={1.0}
          />
        </EffectComposer>
        <OrbitControls
          minDistance={50}
          maxDistance={400}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          target={[0, 0, 0]}
        />
      </Canvas>
    </Suspense>
  );
};
