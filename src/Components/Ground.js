import React from 'react'

import { TextureLoader, RepeatWrapping } from 'three'
import { usePlane } from '@react-three/cannon'

import { useStore } from '../Hooks/useStore'

import grass from '../Assets/Textures/grass.jpeg'

const Ground = (props) => {

    const [addCube, activeTexture] = useStore((state) => [
        state.addCube,
        state.texture
    ])
    
    const [ref] = usePlane(() => ({ position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0], ...props }))

    const texture = new TextureLoader().load(grass)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(100, 100)
    
    return (
        <mesh
            ref={ref}
            onClick={(e) => {
                e.stopPropagation()
                const [x, y, z] = Object.values(e.point).map((coord) => 
                    Math.ceil(coord)
                )
                addCube(x, y, z, activeTexture)
            }}
            receiveShadow
        >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' map={texture} />
        </mesh>
    )
}

export default Ground
