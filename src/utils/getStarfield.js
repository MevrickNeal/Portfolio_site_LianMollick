
import * as THREE from 'three';

export default function getStarfield({ numStars = 1000 } = {}) {
  function randomSpherePoint() {
    const radius = Math.random() * 25 + 25;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    let x = radius * Math.sin(phi) * Math.cos(theta);
    let y = radius * Math.sin(phi) * Math.sin(theta);
    let z = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  const vertices = [];
  for (let i = 0; i < numStars; i++) {
    const starPosition = randomSpherePoint();
    vertices.push(starPosition.x, starPosition.y, starPosition.z);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.7,
    transparent: true
  });

  const stars = new THREE.Points(geometry, material);
  return stars;
}
