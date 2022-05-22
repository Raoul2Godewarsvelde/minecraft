import React, { useRef, useState } from 'react'

import { useCubeStore } from '@hooks/useCubeStore'

import { useFrame } from '@react-three/fiber'

const Cube = () => {

    // REF

    const cube = useRef()

    // STATES

    const [hovered, setHover] = useState(false)
    const [clicked, setClick] = useState(false)

    // HOOKS

    const [position, size, segments, scale, rotation, opacity, wireframe] = useCubeStore((state) => [
        state.position,
        state.size,
        state.segments,
        state.scale,
        state.rotation,
        state.opacity,
        state.wireframe
    ])
    
    useFrame((state, delta) => {
        /* cube.current.rotation.x += rotation_x */
    })
    
    return (
        <>
            <mesh
                ref={cube}
                position={[position.x, position.y, position.z]}
                rotation={[rotation.x, rotation.y, rotation.z]}
                scale={[scale.x, scale.y, scale.z]}
                /* scale={clicked ? 1.5 : 1} */
                /* onClick={(e) => setClick(!clicked)} */
                /* onPointerOver={(e) => setHover(true)} */
                /* onPointerOut={(e) => setHover(false)} */
            >
                <boxGeometry
                    attach='geometry'
                    args={[size.x, size.y, size.z, segments.x, segments.y, segments.z]}
                />
                <meshStandardMaterial
                    attach='material'
                    color={!hovered ? '#fff' : '#f00'}
                    transparent
                    wireframe={wireframe}
                    opacity={opacity}
                />
            </mesh>
        </>
    )
}

export default Cube