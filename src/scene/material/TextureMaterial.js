import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import glsl from 'babel-plugin-glsl/macro'

const TextureMaterial = shaderMaterial(
  {
    u_resolution: new THREE.Vector2()
  },
  glsl`
    varying vec2 vUv;
    void main() {
      vec3 pos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  glsl`
    varying vec2 vUv;
    uniform vec2 u_resolution;
    void main() {
      vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
      vec3 color1 = vec3(1.0,0.55,0);
      vec3 color2 = vec3(0.226,0.000,0.615);
    
      float mixValue = distance(st,vec2(0,1));
      vec3 color = mix(color1,color2,mixValue);
    
      gl_FragColor = vec4(color,mixValue);
    }
  `
)

extend({ TextureMaterial })
