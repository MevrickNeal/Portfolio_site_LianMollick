
import * as THREE from 'three';

export function getFresnelMat() {
  const fresnelMat = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0x0077ff) },
      viewVector: { value: new THREE.Vector3(0, 0, 1) },
    },
    vertexShader: `
      uniform vec3 viewVector;
      varying float intensity;
      void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormel = normalize(normalMatrix * viewVector);
        intensity = pow(1.0 - dot(vNormal, vNormel), 2.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying float intensity;
      void main() {
        gl_FragColor = vec4(color, 1.0) * intensity;
      }
    `,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });
  
  return fresnelMat;
}
