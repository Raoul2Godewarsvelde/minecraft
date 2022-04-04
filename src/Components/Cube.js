import React from 'react'

import { useBox } from '@react-three/cannon'

import * as textures from '../textures'

const Cube = ({ position, type, ...props }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
        ...props
    }))

    return (
        <mesh ref={ref} castShadow>
            <meshStandardMaterial attach='material' map={textures[type]} transparent={true} />
            <boxBufferGeometry attach='geometry' />
        </mesh>
    )
}

export default Cube
