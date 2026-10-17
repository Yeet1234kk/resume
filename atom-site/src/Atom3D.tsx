import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// A small wireframe atom that lives inside the hero's indigo badge.
// Spins slowly, follows scroll, and can be dragged to rotate.
export default function Atom3D() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 13);

    const atom = new THREE.Group();
    scene.add(atom);

    const nucleus = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(0.9, 1)),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 }),
    );
    atom.add(nucleus);

    const tilts: [number, number][] = [[0, 0], [Math.PI / 2.4, 0.3], [-Math.PI / 3, -0.6], [Math.PI / 5, 1.2]];
    const orbits = tilts.map(([rx, ry], i) => {
      const pivot = new THREE.Group();
      pivot.rotation.set(rx, ry, 0);
      const curve = new THREE.EllipseCurve(0, 0, 3.4, 1.35 + i * 0.1, 0, Math.PI * 2);
      const pts = curve.getPoints(140).map((p) => new THREE.Vector3(p.x, p.y, 0));
      const ring = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 }),
      );
      const electron = new THREE.Mesh(
        new THREE.SphereGeometry(0.17, 16, 16),
        new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffc857 : 0xff7aa8 }),
      );
      pivot.add(ring, electron);
      atom.add(pivot);
      return { curve, electron, phase: i * 1.7, speed: 0.4 + i * 0.08 };
    });

    const resize = () => {
      const s = el.clientWidth;
      renderer.setSize(s, s, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    // drag to spin
    let dragging = false, lastX = 0, lastY = 0, velX = 0, velY = 0, userX = 0, userY = 0;
    const down = (e: PointerEvent) => { dragging = true; lastX = e.clientX; lastY = e.clientY; el.setPointerCapture(e.pointerId); el.classList.add('grabbing'); };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      velY = (e.clientX - lastX) * 0.01; velX = (e.clientY - lastY) * 0.01;
      userY += velY; userX += velX; lastX = e.clientX; lastY = e.clientY;
    };
    const up = () => { dragging = false; el.classList.remove('grabbing'); };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);

    let raf = 0;
    const clock = new THREE.Clock();
    const frame = () => {
      const t = clock.getElapsedTime();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (!dragging) { userY += velY; userX += velX; velX *= 0.94; velY *= 0.94; }
      atom.rotation.y = userY + p * Math.PI * 2 + (reduce ? 0 : t * 0.25);
      atom.rotation.x = 0.4 + userX;
      nucleus.rotation.y = reduce ? 0 : -t * 0.4;
      orbits.forEach((o) => {
        const a = o.phase + (reduce ? 0 : t * o.speed);
        const pt = o.curve.getPoint((a / (Math.PI * 2)) % 1);
        o.electron.position.set(pt.x, pt.y, 0);
      });
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} className="atom3d" role="img" aria-label="3D atom, drag to spin" />;
}
