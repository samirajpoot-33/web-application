import React, { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// 1. The 3D Sculpted Metallic Gold Text
const GoldText = ({ text, fontPath }) => {
  const groupRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  // Metallic gold material configuration
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#E2BA69",        // Rich golden base
    metalness: 0.95,         // High metallic reflection
    roughness: 0.18,         // Glossy surface finish
    emissive: "#2A1805",     // Warm golden undertone in shadows
  }), []);

  // Track mouse coordinates for interactive tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      targetRotation.current = {
        x: -y * 0.15,
        y: x * 0.25,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth floating and cursor parallax tilt
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotation.current.x + Math.sin(state.clock.elapsedTime * 0.8) * 0.03,
        4,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotation.current.y + Math.cos(state.clock.elapsedTime * 0.6) * 0.03,
        4,
        delta
      );
      // Subtle hovering breathing motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Text3D
          font={fontPath}
          size={1.25}
          height={0.38}
          curveSegments={20}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.03}
          bevelOffset={0}
          bevelSegments={6}
          material={material}
          letterSpacing={0.12}
          castShadow
          receiveShadow
        >
          {text}
        </Text3D>
      </Center>
    </group>
  );
};

// Fallback loader inside Canvas
const LoaderFallback = () => {
  return (
    <mesh>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  );
};

// The 3D Canvas Component to be embedded in KhaaniCollectionSection
const KhaaniCollection3D = () => {
  const fontUrl = '/fonts/serif_font.json';

  return (
    <div className="w-full h-full min-h-[260px] md:min-h-[320px] relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 40 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        shadows
      >
        {/* Lighting Rig tailored for 3D metallic gold reflections */}
        <ambientLight intensity={0.7} />
        
        {/* Key Warm Sunlight */}
        <directionalLight 
          position={[6, 7, 5]} 
          intensity={2.8} 
          color="#FFF4D6" 
          castShadow 
        />

        {/* Secondary Golden Fill */}
        <directionalLight 
          position={[-6, 4, 3]} 
          intensity={1.6} 
          color="#D4AF37" 
        />

        {/* Rim light from behind for edge separation */}
        <pointLight 
          position={[0, -4, 4]} 
          intensity={1.2} 
          color="#FFFFFF" 
        />
        <pointLight 
          position={[0, 6, -5]} 
          intensity={2.0} 
          color="#FFE4B5" 
        />

        {/* Studio HDR Reflections for metallic sheen */}
        <Environment preset="studio" />

        {/* Suspended Golden Embers / Dust Particles */}
        <Sparkles 
          count={40} 
          scale={[10, 5, 5]} 
          size={3.0} 
          speed={0.4} 
          color="#F4D37A" 
          opacity={0.7} 
        />

        {/* 3D Animated Gold Typography */}
        <Suspense fallback={<LoaderFallback />}>
          <GoldText 
            text="KHAANI" 
            fontPath={fontUrl} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default KhaaniCollection3D;
