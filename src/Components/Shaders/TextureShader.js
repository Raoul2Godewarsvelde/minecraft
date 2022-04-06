import React, { useMemo } from 'react'

import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

import ListImages from '../../Json/ListImages'

import textureMaterial from '../../scene/material/TextureMaterial'

const TextureShader = () => {
    
    const images = useLoader(
        THREE.TextureLoader,
        ListImages.map(({ image }) => image)
    )
    useMemo(() => images.forEach((texture) => (texture.minFilter = THREE.LinearFilter)), [images])
    console.log(images)

  return (
    <mesh
        position-x={5}
        position-y={5}
        position-z={5}
        scale-x={1}
        scale-y={1}
    >
        <planeBufferGeometry
            attach='geometry'
            args={[10, 10, 1, 1]}
        />
        <textureMaterial
            attach='material'
            side={THREE.DoubleSide}
            /* uTexture={images[0]} */
            transparent
        />
    </mesh>
  )
}

export default TextureShader