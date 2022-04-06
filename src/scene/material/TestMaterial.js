import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import glsl from 'babel-plugin-glsl/macro'

const TestShader = shaderMaterial(
  {
    uResolution: new THREE.Vector2()
  },
  glsl`
    void main() {
      vec3 pos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  glsl`
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    }
  `
)

extend({ TestShader })
