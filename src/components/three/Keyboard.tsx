import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { type Material, Group } from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader } from "../Loader/Loader";
type GLTFResult = GLTF & {
  nodes: {
    Cube044: THREE.Mesh;
    Cube044_1: THREE.Mesh;
    Cube044_2: THREE.Mesh;
    Cube044_3: THREE.Mesh;
    "!": THREE.Mesh;
    1: THREE.Mesh;
    2: THREE.Mesh;
    3: THREE.Mesh;
    4: THREE.Mesh;
    5: THREE.Mesh;
    6: THREE.Mesh;
    h: THREE.Mesh;
    e: THREE.Mesh;
    l: THREE.Mesh;
    l001: THREE.Mesh;
    l002: THREE.Mesh;
    o: THREE.Mesh;
    o001: THREE.Mesh;
    w: THREE.Mesh;
    r: THREE.Mesh;
    d: THREE.Mesh;
    win: THREE.Mesh;
    CTRL: THREE.Mesh;
    alt: THREE.Mesh;
  };

  materials: {
    markDark: Material;
    keycapDark: Material;
    caseBase: Material;
    caseInner: Material;
    keycapBase: Material;
  };
};

export function Keyboard() {
  const { nodes, materials } = useGLTF("/keyboard.glb") as GLTFResult;
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.005;
    }
  });
  return (
    <group dispose={null} ref={ref}>
      <group
        position={[0.89, 1.35, -0.412]}
        rotation={[-Math.PI / 2, 1.191, -Math.PI]}
        scale={[0.266, 0.174, 0.815]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials.keycapDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_1.geometry}
          material={materials.caseBase}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_2.geometry}
          material={materials.caseInner}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_3.geometry}
          material={materials.keycapBase}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["!"].geometry}
        material={materials.markDark}
        position={[1.642, 2.583, -0.248]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.749}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1"].geometry}
        material={materials.markDark}
        position={[-1.306, 2.409, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2"].geometry}
        material={materials.markDark}
        position={[-0.784, 2.619, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3"].geometry}
        material={materials.markDark}
        position={[-0.288, 2.816, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4"].geometry}
        material={materials.markDark}
        position={[0.235, 3.026, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["5"].geometry}
        material={materials.markDark}
        position={[0.726, 3.219, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["6"].geometry}
        material={materials.markDark}
        position={[1.265, 3.436, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.d.geometry}
        material={materials.markDark}
        position={[1.23, 2.086, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.275}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.e.geometry}
        material={materials.markDark}
        position={[-0.567, 2.03, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.h.geometry}
        material={materials.markDark}
        position={[-1.09, 1.821, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.l.geometry}
        material={materials.markDark}
        position={[0.693, 1.872, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.275}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.l001.geometry}
        material={materials.markDark}
        position={[-0.029, 2.245, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.l002.geometry}
        material={materials.markDark}
        position={[0.497, 2.456, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.311}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o.geometry}
        material={materials.markDark}
        position={[-0.332, 1.462, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.275}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.o001.geometry}
        material={materials.markDark}
        position={[0.979, 2.633, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.r.geometry}
        material={materials.markDark}
        position={[0.216, 1.681, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.275}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.w.geometry}
        material={materials.markDark}
        position={[-0.846, 1.255, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.275}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.win.geometry}
        material={materials.markDark}
        position={[-0.147, 0.936, -0.228]}
        rotation={[Math.PI / 2, 0.357, 0]}
        scale={0.099}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.alt.geometry}
        material={materials.markDark}
        position={[1.929, 1.772, -0.224]}
        rotation={[Math.PI / 2, 0.371, 0]}
        scale={0.115}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CTRL.geometry}
        material={materials.markDark}
        position={[-0.649, 0.749, -0.231]}
        rotation={[1.487, 0.363, 0.022]}
        scale={0.121}
      />
    </group>
  );
}

const KeyboardModel = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return <Loader size="md" />;
  return (
    <Canvas
      camera={{
        position: [0, -1, 10],
        fov: 23.2,
      }}
      shadows
    >
      <ambientLight intensity={0.92} color={"#fff"} position={[0, 0, 10]} />
      <ambientLight intensity={0.92} color={"#fff"} position={[0, 20, 5]} />
      <directionalLight
        color="white"
        castShadow
        intensity={2.5}
        position={[5, 0, 5]}
      />

      <Center>
        {" "}
        <Keyboard />
      </Center>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

useGLTF.preload("/keyboard.glb");
export default KeyboardModel;
