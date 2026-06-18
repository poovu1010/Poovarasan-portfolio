import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function Globe() {
  const globeRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state) => {
    if (globeRef.current) globeRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    if (ringRef.current) ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <group>
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.28, 42, 42]} />
        <meshStandardMaterial color="#0f172a" emissive="#0c4a6e" emissiveIntensity={0.35} metalness={0.25} roughness={0.28} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.31, 0.012, 16, 110]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.9} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.31, 0.012, 16, 110]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.75} />
      </mesh>
      <mesh ref={ringRef} rotation={[0.9, 0.3, 0.4]}>
        <torusGeometry args={[1.82, 0.018, 16, 140]} />
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.8} />
      </mesh>

      <mesh position={[1.92, 0.1, 0]}>
        <sphereGeometry args={[0.08, 18, 18]} />
        <meshStandardMaterial color="#f8fafc" emissive="#38bdf8" emissiveIntensity={1.3} />
      </mesh>
      <mesh position={[-1.6, -0.65, 0.3]}>
        <sphereGeometry args={[0.065, 18, 18]} />
        <meshStandardMaterial color="#f8fafc" emissive="#d946ef" emissiveIntensity={1.1} />
      </mesh>
    </group>
  );
}

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 3]} intensity={1.8} />
      <pointLight position={[-3, 2, 3]} intensity={2} color="#38bdf8" />
      <Stars radius={42} depth={24} count={600} factor={3} fade speed={0.6} />
      <Globe />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.75} />
    </>
  );
}

export default function GlobeCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 44 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <GlobeScene />
      </Suspense>
    </Canvas>
  );
}
