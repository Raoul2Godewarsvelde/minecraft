import React from 'react'

import { TextureLoader, RepeatWrapping } from 'three'
import { usePlane } from '@react-three/cannon'

import grass from '../Assets/Textures/grass.jpeg'

const Ground = () => {
    const [ref] = usePlane(() => ({ position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0] }))
    const texture = new TextureLoader().load(grass)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(100, 100)
    
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' map={texture} />
        </mesh>
    )
}

export default Ground
