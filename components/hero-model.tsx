"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Environment, ContactShadows } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FloatingPaper() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (meshRef.current) {
      // Gentle up/down float + slow natural rotation
      meshRef.current.position.y = Math.sin(t * 1.2) * 0.35 + Math.sin(t * 0.7) * 0.08
      
      // Slight rocking like paper in air
      meshRef.current.rotation.x = Math.sin(t * 0.6) * 0.08
      meshRef.current.rotation.y += 0.0045           // slow spin
      meshRef.current.rotation.z = Math.cos(t * 0.5) * 0.06
    }
  })

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/* Thin plane for paper – slightly larger than A4 ratio (≈1:1.414) */}
      <planeGeometry args={[2.1, 2.97]} />  
      
      {/* Simple paper material: off-white, matte, subtle roughness */}
      <meshStandardMaterial 
        color="#fdfcf7"          // warm near-white paper tone
        roughness={0.9}          // very matte, not shiny
        metalness={0.0}
        side={THREE.DoubleSide}  // visible from both sides
      />
    </mesh>
  )
}

export function HeroModel() {
  return (
    <div style={{ width: "100%", height: "520px" }}> {/* adjust height to fit your layout */}
      <Canvas
        camera={{ position: [0, 1.5, 5.5], fov: 50 }}
        shadows
        gl={{ antialias: true }}
      >

        <ambientLight intensity={0.8} />
        
        {/* Key light from top-right for nice soft shadows */}
        <directionalLight 
          position={[4, 8, 5]} 
          intensity={1.3} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* Fill light from left to avoid pure black shadows */}
        <directionalLight 
          position={[-3, 4, -2]} 
          intensity={0.5} 
          color="#e2e8f0"
        />

        {/* Use Float from drei for even smoother motion (optional override with useFrame) */}
        <Float 
          speed={1.4}             // how fast it bobs
          rotationIntensity={0.4} // how much it tilts
          floatIntensity={0.9}    // vertical range
        >
          <FloatingPaper />
        </Float>

        {/* Soft contact shadow on "floor" level */}
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.5} 
          width={8} 
          height={8} 
          blur={2.2} 
          far={4}
          resolution={512}
        />

        {/* Adds subtle environment reflections (even on matte paper it helps) */}
        <Environment preset="studio" background={false} />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI * 0.4}
          maxPolarAngle={Math.PI * 0.75}
          autoRotate
          autoRotateSpeed={0.9}
        />
      </Canvas>
    </div>
  )
}