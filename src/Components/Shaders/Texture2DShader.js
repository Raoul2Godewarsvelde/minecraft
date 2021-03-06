import React, { useMemo } from 'react'

import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

/* import ListImages from '@json/ListImages' */

import raoul from '@assets/Textures/raoul_profil_1.png'

import texture2DMaterial from '@scene/material/Texture2DMaterial'

const Texture2DShader = () => {
    
  /* const images = useLoader(
      THREE.TextureLoader,
      ListImages.map(({ image }) => image)
  )
  useMemo(() => images.forEach((texture) => (texture.minFilter = THREE.LinearFilter)), [images])
  console.log('images', images) */
    
  const image = useLoader(
      THREE.TextureLoader,
      raoul
  )
  console.log('image', image)

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
        <texture2DMaterial
            attach='material'
            side={THREE.DoubleSide}
            /* uTexture={images[0]} */
            uTexture={image}
            transparent
        />
    </mesh>
  )
}

export default Texture2DShader