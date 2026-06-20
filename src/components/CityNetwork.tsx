import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function CityNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 55;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const NODE_COUNT = 90;
    const MAX_EDGE_DIST = 22;

    const nodePositions: THREE.Vector3[] = [];
    const rawPositions: number[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 90;
      const y = (Math.random() - 0.5) * 70;
      const z = (Math.random() - 0.5) * 35;
      nodePositions.push(new THREE.Vector3(x, y, z));
      rawPositions.push(x, y, z);
    }

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute('position', new THREE.Float32BufferAttribute(rawPositions, 3));
    const pointMat = new THREE.PointsMaterial({
      color: 0x8b1a1a,
      size: 0.7,
      transparent: false,
      opacity: 0.95
      ,
    });
    const points = new THREE.Points(pointGeo, pointMat);

    const edgePositions: number[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < MAX_EDGE_DIST) {
          const a = nodePositions[i];
          const b = nodePositions[j];
          edgePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }

    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3));
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x3a0d0d,
      transparent: false,
      opacity: 0.8,
    });
    const edges = new THREE.LineSegments(edgeGeo, edgeMat);

    const group = new THREE.Group();
    group.add(edges);
    group.add(points);
    scene.add(group);

    // Mouse follow
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // smooth follow mouse
      targetRotation.x = mouse.y * 0.15;
      targetRotation.y = mouse.x * 0.15;
      group.rotation.x += (targetRotation.x - group.rotation.x) * 0.03;
      group.rotation.y += (targetRotation.y + 0.0008 - group.rotation.y) * 0.03;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pointGeo.dispose();
      edgeGeo.dispose();
      pointMat.dispose();
      edgeMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
