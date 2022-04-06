import React from 'react'

import * as THREE from 'three'

import testMaterial from '../../scene/material/TestMaterial'

const TestShader = () => {

  return (
    <mesh
        position-x={25}
        position-y={5}
        position-z={5}
        scale-x={1}
        scale-y={1}
    >
        <planeBufferGeometry
            attach='geometry'
            args={[10, 10, 1, 1]}
        />
        <testMaterial
            attach='material'
            side={THREE.DoubleSide}
            transparent
        />
    </mesh>
  )
}

export default TestShader