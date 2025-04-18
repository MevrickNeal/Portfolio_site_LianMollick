
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  
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
        <meshPhongMaterial 
          color="#2233ff"
          emissive="#000000"
          specular="#555555"
          shininess={5}
        />

        {/* Continents */}
        <mesh>
          <sphereGeometry args={[2.01, 64, 64]} />
          <meshPhongMaterial 
            color="#15b74e"
            emissive="#000000"
            transparent={true}
            opacity={0.8}
            depthWrite={false}
          />
        </mesh>

        {/* Clouds layer */}
        <mesh ref={cloudsRef} scale={1.01}>
          <sphereGeometry args={[2, 64, 64]} />
          <meshPhongMaterial 
            color="#ffffff"
            transparent={true}
            opacity={0.4}
            depthWrite={false}
          />
        </mesh>
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
