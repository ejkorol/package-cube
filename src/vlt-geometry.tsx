import { useMemo, useState } from "react";
import * as THREE from "three";
import { useRef } from "react";
import { Float, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";

type BlockColor = 0x000000 | 0x757575;
// hexadecimal color value, black or grey

export const CubeModel = (props: any) => {
  const groupRef = useRef<THREE.Group | null>(null);

  // this is for changing color based on theme
  const [color, _setColor] = useState<BlockColor>(0x000000);

  const { nodes } = useGLTF("/models/vlt-packages.glb") as any;

  // rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  // center cube material
  const FrostedMaterial = () => (
    <MeshTransmissionMaterial
      ior={1.3}
      chromaticAberration={0.03}
      roughness={0.02}
      emissive={0xffffff}
      emissiveIntensity={1}
      metalness={0.0}
      opacity={0.9}
      transmission={1}
      attenuationColor="white"
      attenuationDistance={1}
      thickness={2}
      transparent
    />
  );

  // box material, memoizes for performance on rerenders
  const aluminumMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color, // this is where the color gets set
        metalness: 1,
        roughness: 0.418,
      }),
    [color],
  );

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
      <e.group {...props} ref={groupRef} scale={0.5} theatreKey="group">
        {/* group 23, 27, 28, 29 */}
        <e.group theatreKey="23, 27, 28, 29">
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube023.geometry}
            position={[-1.5, -4.12, -1.497]}
            rotation={[3.137, 0, 0]}
            material={aluminumMaterial}
            scale={0.5}
          ></mesh>
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube027.geometry}
            position={[-1.5, -4.115, -0.497]}
            rotation={[3.137, 0, 0]}
            scale={0.5}
            material={aluminumMaterial}
          ></mesh>
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube028.geometry}
            position={[-0.5, -4.12, -1.497]}
            rotation={[3.137, 0, 0]}
            scale={0.5}
            material={aluminumMaterial}
          ></mesh>
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube029.geometry}
            position={[-0.5, -4.115, -0.497]}
            rotation={[3.137, 0, 0]}
            scale={0.5}
            material={aluminumMaterial}
          ></mesh>
        </e.group>

        {/* group 16, 17, 18 ,19 */}
        <e.group theatreKey="16, 17, 18, 19">
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube016.geometry}
            position={[-1.5, 3.891, 1.5]}
            scale={0.5}
            material={aluminumMaterial}
          ></mesh>
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube017.geometry}
            position={[-1.5, 3.891, 0.5]}
            scale={0.5}
            material={aluminumMaterial}
          ></mesh>
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube018.geometry}
            position={[-0.5, 3.891, 1.5]}
            scale={0.5}
            material={aluminumMaterial}
          ></mesh>
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube019.geometry}
            position={[-0.5, 3.891, 0.5]}
            scale={0.5}
            material={aluminumMaterial}
          ></mesh>
        </e.group>

        {/* group 8, 9 */}
        <e.group theatreKey="8, 9">
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube008.geometry}
            position={[-4.523, 4.184, -1.5]}
            material={aluminumMaterial}
            scale={0.5}
          ></mesh>
          <mesh
            castShadow={false}
            receiveShadow={false}
            geometry={nodes.Cube009.geometry}
            material={aluminumMaterial}
            position={[-4.523, 3.184, -1.5]}
            scale={0.5}
          ></mesh>
        </e.group>

        {/* Center Cube */}
        <e.mesh
          theatreKey="cube"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube.geometry}
        >
          <FrostedMaterial />
        </e.mesh>

        <e.mesh
          theatreKey="cube 1"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube001.geometry}
          position={[4.61, 0.5, 0.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 2"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube002.geometry}
          position={[4.61, 0.5, -0.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 3"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube003.geometry}
          position={[4.61, -0.5, -0.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 4"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube004.geometry}
          position={[4.61, -0.5, 0.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 5"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube005.geometry}
          position={[-3.523, 0.5, -1.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 6"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube006.geometry}
          position={[2.988, 0.5, -1.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 7"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube007.geometry}
          position={[-4.523, 0.5, -0.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 10"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube010.geometry}
          position={[-4.523, -0.5, -0.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 11"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube011.geometry}
          position={[-4.523, -3.069, 0.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 12"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube012.geometry}
          position={[-4.523, -0.5, 1.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 13"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube013.geometry}
          position={[-2.523, 0.5, 1.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 14"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube014.geometry}
          position={[2.988, 0.5, 1.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 15"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube015.geometry}
          position={[2.988, -0.5, 1.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 20"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube020.geometry}
          position={[2.221, 2.466, 1.5]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 21"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube021.geometry}
          position={[-0.5, 2.466, -0.5]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 22"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube022.geometry}
          position={[-0.5, 2.466, -1.5]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 24"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube024.geometry}
          position={[1.5, 5.184, -2.432]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 25"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube025.geometry}
          position={[0.5, 3.816, -1.432]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 26"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube026.geometry}
          position={[2.221, 2.466, -0.5]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 30"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube030.geometry}
          position={[1.5, -2.901, -1.497]}
          rotation={[-1.576, 0, 0]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 31"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube031.geometry}
          position={[-0.5, -2.891, 0.503]}
          rotation={[3.137, 0, -Math.PI / 2]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 32"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube032.geometry}
          position={[-0.5, -2.886, 1.503]}
          rotation={[3.137, 0, -Math.PI / 2]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 33"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube033.geometry}
          position={[1.5, -6.15, 1.503]}
          rotation={[3.137, 0, 0]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 34"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube034.geometry}
          position={[0.5, -2.891, 2.309]}
          rotation={[3.137, 0, 0]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
        <e.mesh
          theatreKey="cube 35"
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Cube035.geometry}
          position={[1.5, -1.677, 0.503]}
          rotation={[3.137, 0, 0]}
          scale={0.5}
          material={aluminumMaterial}
        ></e.mesh>
      </e.group>
    </Float>
  );
};

useGLTF.preload("/vlt-packages.glb");
