
import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import getStarfield from '@/utils/getStarfield';
import { getFresnelMat } from '@/utils/getFresnelMat';

function Earth() {
  const earthGroupRef = useRef<THREE.Group>(null!);
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const lightsRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  const starsRef = useRef<THREE.Points>(null!);
  
  // Create Earth with all layers
  useEffect(() => {
    if (!earthGroupRef.current) return;

    // Set Earth's axial tilt
    earthGroupRef.current.rotation.z = -23.4 * Math.PI / 180;
    
    // Detail level for the sphere
    const detail = 12;
    
    // Create geometry for all Earth layers
    const geometry = new THREE.IcosahedronGeometry(1, detail);
    
    // Create Earth base texture
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/lovable-uploads/9a914ea0-5529-4735-9342-09653ad6a266.png'),
      specularMap: new THREE.TextureLoader().load('/lovable-uploads/3fd5014b-ed84-4a7e-adcb-866221e445ea.png'),
      bumpMap: new THREE.TextureLoader().load('/lovable-uploads/b37f2a9e-07a2-45c9-a24e-2a06d5ec4b49.png'),
      bumpScale: 0.04,
    });
    
    // Create Earth night lights
    const lightsMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('/lovable-uploads/a6600e8f-4931-4498-b154-da2b00443b56.png'),
      blending: THREE.AdditiveBlending,
    });
    
    // Create clouds layer
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('/lovable-uploads/8b8f76dd-92fd-4456-8b42-b37a8d176255.png'),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      alphaMap: new THREE.TextureLoader().load('/lovable-uploads/47fc0152-e98c-4a47-86b9-3cb191b2ee18.png'),
    });
    
    // Create atmosphere glow
    const fresnelMat = getFresnelMat();
    
    // Create meshes if they don't exist
    if (!earthRef.current) {
      earthRef.current = new THREE.Mesh(geometry, earthMaterial);
      earthGroupRef.current.add(earthRef.current);
    }
    
    if (!lightsRef.current) {
      lightsRef.current = new THREE.Mesh(geometry, lightsMaterial);
      earthGroupRef.current.add(lightsRef.current);
    }
    
    if (!cloudsRef.current) {
      cloudsRef.current = new THREE.Mesh(geometry, cloudsMaterial);
      cloudsRef.current.scale.setScalar(1.003);
      earthGroupRef.current.add(cloudsRef.current);
    }
    
    if (!glowRef.current) {
      glowRef.current = new THREE.Mesh(geometry, fresnelMat);
      glowRef.current.scale.setScalar(1.01);
      earthGroupRef.current.add(glowRef.current);
    }
    
    // Create starfield
    if (!starsRef.current) {
      starsRef.current = getStarfield({ numStars: 2000 });
      // We'll add it to the scene in the JSX
    }
    
  }, []);
  
  // Earth rotation
  useEffect(() => {
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      if (earthRef.current) {
        earthRef.current.rotation.y += 0.002;
      }
      
      if (lightsRef.current) {
        lightsRef.current.rotation.y += 0.002;
      }
      
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += 0.0023;
      }
      
      if (glowRef.current) {
        glowRef.current.rotation.y += 0.002;
      }
      
      if (starsRef.current) {
        starsRef.current.rotation.y -= 0.0002;
      }
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    };
    
    const animationId = animate();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Stars background */}
      {starsRef.current && <primitive object={starsRef.current} />}
      
      {/* Sun light */}
      <directionalLight 
        position={[-2, 0.5, 1.5]} 
        intensity={2} 
        color="#ffffff" 
      />
      
      {/* Ambient light for overall scene illumination */}
      <ambientLight intensity={0.2} />
      
      {/* Earth group with all layers */}
      <group ref={earthGroupRef} />
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
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
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
