// components/ThreeDScene.jsx

import  { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

function ThreeDScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    // --- 1. Scene Setup ---
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Create a Scene
    const scene = new THREE.Scene();

    // Create a Camera
    const camera = new THREE.PerspectiveCamera(
      75, // Field of View
      window.innerWidth / window.innerHeight, // Aspect Ratio
      0.1, // Near Clipping Plane
      1000 // Far Clipping Plane
    );
    camera.position.z = 5;

    // Create a Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: currentMount,
      alpha: true, // Allow for a transparent background
      antialias: true // Smoothen the edges
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // --- 2. Create 3D Objects ---

    // Object 1: Dodecahedron (the main shape)
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(1, 0);
    const dodecahedronMaterial = new THREE.MeshStandardMaterial({
      color: 0x6a0dad, // A purple color
      roughness: 0.4,
      metalness: 0.7
    });
    const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    dodecahedronMesh.position.set(2, 0, 0); // Position it to the right of the screen
    scene.add(dodecahedronMesh);

    // Object 2: Torus (the ring shape)
    const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x00aaff, // A blue color
      roughness: 0.4,
      metalness: 0.7
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(-2, 0, 0); // Position it to the left
    scene.add(torusMesh);

    // --- 3. Add Lights ---

    // Ambient light illuminates all objects equally
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light from a specific direction
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // --- 4. Animate with GSAP ---
    gsap.to(dodecahedronMesh.rotation, {
      duration: 15,
      x: Math.PI * 2,
      y: Math.PI * 2,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(torusMesh.position, {
      duration: 8,
      y: 0.5,
      yoyo: true, // Go back and forth
      repeat: -1,
      ease: 'power1.inOut',
    });
    
    gsap.to(torusMesh.rotation, {
      duration: 12,
      x: Math.PI * 2,
      y: Math.PI * 2,
      repeat: -1,
      ease: 'power1.inOut',
    });


    // --- 5. Animation Loop ---
    const animate = () => {
      // Rotate the objects continuously
      dodecahedronMesh.rotation.x += 0.005;
      torusMesh.rotation.x += 0.005;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // --- 6. Handle Window Resize ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- 7. Cleanup on Component Unmount ---
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      // Dispose of geometries and materials to prevent memory leaks
      dodecahedronGeometry.dispose();
      dodecahedronMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      // Kill GSAP animations
      gsap.killTweensOf([dodecahedronMesh.rotation, torusMesh.position, torusMesh.rotation]);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // --- Render the canvas element ---
  return (
    <canvas
      ref={mountRef}
      className="absolute top-0 left-[510px] w-[400px] h-fit z-0 pointer-events-none"
    />
  );
}

export default ThreeDScene;