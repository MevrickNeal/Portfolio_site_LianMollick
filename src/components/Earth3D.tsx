
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Satellite({ position = [0, 0, 0] }) {
  const satelliteRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);
  
  // Satellite orbit position
  useFrame(({ clock }) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
    if (satelliteRef.current) {
      satelliteRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh 
        ref={satelliteRef} 
        position={[3, 0, 0]}
        scale={0.15}
      >
        <boxGeometry args={[1, 0.3, 0.3]} />
        <meshStandardMaterial color="#888888" />
        {/* Solar panels */}
        <mesh position={[0, 0, 1]}>
          <boxGeometry args={[0.2, 1.5, 0.05]} />
          <meshStandardMaterial color="#4477ff" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, -1]}>
          <boxGeometry args={[0.2, 1.5, 0.05]} />
          <meshStandardMaterial color="#4477ff" metalness={0.8} />
        </mesh>
        {/* Antenna */}
        <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 1]} />
          <meshStandardMaterial color="#aaaaaa" metalness={0.8} />
        </mesh>
      </mesh>
    </group>
  );
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  
  // Create basic materials with colors instead of relying on textures
  const earthMaterial = new THREE.MeshPhongMaterial({ 
    color: '#2233aa', // Ocean blue
    shininess: 5,
    emissive: '#001133',
    emissiveIntensity: 0.2
  });

  const cloudsMaterial = new THREE.MeshPhongMaterial({
    color: '#ffffff',
    transparent: true,
    opacity: 0.4,
    depthWrite: false
  });

  // Earth rotation
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.055;
    }
  });

  return (
    <>
      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

      {/* Sun light */}
      <directionalLight 
        position={[5, 3, 5]} 
        intensity={3} 
        color="#ffffff" 
      />

      {/* Ambient light for overall scene illumination */}
      <ambientLight intensity={0.2} />

      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <primitive object={earthMaterial} attach="material" />

        {/* Clouds layer */}
        <mesh ref={cloudsRef} scale={1.01}>
          <sphereGeometry args={[2, 64, 64]} />
          <primitive object={cloudsMaterial} attach="material" />
        </mesh>

        {/* Add some continents as green patches */}
        <group>
          {/* Africa/Europe */}
          <mesh position={[0, 0.1, 2]} rotation={[0, 0, 0]}>
            <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 0.4, Math.PI * 0.3, Math.PI * 0.4]} />
            <meshStandardMaterial color="#22aa44" transparent opacity={0.8} />
          </mesh>
          
          {/* Americas */}
          <mesh position={[0, 0, -1.8]} rotation={[0, Math.PI, 0]}>
            <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 0.3, Math.PI * 0.3, Math.PI * 0.5]} />
            <meshStandardMaterial color="#117733" transparent opacity={0.8} />
          </mesh>
          
          {/* Asia/Australia */}
          <mesh position={[-1.9, 0, -0.5]} rotation={[0, Math.PI / 1.5, 0]}>
            <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 0.5, Math.PI * 0.3, Math.PI * 0.4]} />
            <meshStandardMaterial color="#22aa44" transparent opacity={0.8} />
          </mesh>
        </group>

        {/* Satellite */}
        <Satellite position={[0, 0, 0]} />
      </mesh>
    </>
  );
}

export default function Earth3D() {
  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900 pointer-events-none z-10"></div>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Space Exploration</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Developing advanced systems for aerospace applications</p>
        </div>

        <div className="relative h-[500px] w-full">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Earth />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.3}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
