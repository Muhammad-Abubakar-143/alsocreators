'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSculpture() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    const x = state.pointer.x * viewport.width * 0.25;
    const y = state.pointer.y * viewport.height * 0.25;
    group.current.position.x += (x - group.current.position.x) * 0.05;
    group.current.position.y += (y - group.current.position.y) * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[0, 0, 0]} scale={1.6}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="#742DEB"
            emissive="#3a1080"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.85}
            distort={0.35}
            speed={1.8}
          />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[2.4, 1.1, -1]} scale={0.45} rotation={[0.5, 0, 0.3]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial
            color="#FDFDFD"
            emissive="#742DEB"
            emissiveIntensity={0.25}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[-2.6, -0.8, -0.5]} scale={0.6} rotation={[0.2, 0.6, 0]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#0A0A0C"
            emissive="#742DEB"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.9}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1} floatIntensity={1.4}>
        <mesh position={[1.6, -1.6, 0.8]} scale={0.35}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#742DEB"
            emissive="#742DEB"
            emissiveIntensity={0.6}
            roughness={0.3}
            metalness={0.6}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ParticleField({ count = 400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#742DEB"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.3} />
      <spotLight position={[5, 8, 5]} angle={0.3} intensity={2.5} color="#742DEB" penumbra={1} />
      <pointLight position={[-6, -4, 2]} intensity={1.5} color="#742DEB" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#FDFDFD" />
      <SuspenseOrb />
      <ParticleField count={450} />
      <Environment preset="night" />
    </Canvas>
  );
}

import { Suspense } from 'react';
function SuspenseOrb() {
  return (
    <Suspense fallback={null}>
      <FloatingSculpture />
    </Suspense>
  );
}
