"use client"

import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import Box from './box';
import FiberScene from './fiber-scene';


const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//         const scene = new THREE.Scene();

//         // camera, viewpoint
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             window.innerWidth / window.innerHeight
//         );
//         camera.position.z = 10;

//         // renderer, draws scene on html canvas
//         const renderer = new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         containerRef.current?.appendChild(renderer.domElement);


//         // Geometries, defines shape of 3d object. Collection of faces and vertices.
//         const geometry = new THREE.BoxGeometry(6,1,1)

//         // Material, determines how an object will look
//         const material = new THREE.MeshStandardMaterial({color: 0xff0000})


//         // adding basic object to scene
//         const cube = new THREE.Mesh(geometry, material)
//         scene.add(cube)


//         const renderScene = () => {
//             cube.rotation.x += 0.01;
//             cube.rotation.y += 0.01;
//             renderer.render(scene, camera);
//             requestAnimationFrame(renderScene);
//           };

//         renderer.render(scene, camera)
//         renderScene()

//         const handleResize = () => {
//             const width = window.innerWidth;
//             const height = window.innerHeight;

//             camera.aspect = width / height;
//             camera.updateProjectionMatrix();

//             renderer.setSize(width, height);
//           };

//           window.addEventListener('resize', handleResize);

//           // Clean up the event listener when the component is unmounted
//           return () => {
//             window.removeEventListener('resize', handleResize);
//             containerRef.current?.removeChild(renderer.domElement);
//             renderer.dispose();
//           };
//         }
//       }, []);

  return (
    <FiberScene/>
  );
};

export default ThreeScene;