import React, { useRef, useState } from 'react'

import { useCubeStore } from '@hooks/useCubeStore'

import { useFrame } from '@react-three/fiber'

const Cube = ({ position, ...props }) => {

    // REF

    const cube = useRef()

    // STATES

    const [hovered, setHover] = useState(false)
    const [clicked, setClick] = useState(false)

    // HOOKS

    const [size, rotation, opacity] = useCubeStore((state) => [
        state.size,
        state.rotation,
        state.opacity
    ])
    
    useFrame((state, delta) => {
        /* cube.current.rotation.x += rotation_x */
    })
    
    return (
        <>
            <mesh
                {...props}
                ref={cube}
                position={position}
                rotation={[rotation.x, rotation.y, rotation.z]}
                /* scale={clicked ? 1.5 : 1} */
                /* onClick={(e) => setClick(!clicked)} */
                /* onPointerOver={(e) => setHover(true)} */
                /* onPointerOut={(e) => setHover(false)} */
            >
                <boxGeometry
                    attach='geometry'
                    args={[size.x, size.y, size.z]}
                />
                <meshStandardMaterial
                    attach='material'
                    color={!hovered ? '#fff' : '#f00'}
                    transparent
                    opacity={opacity}
                />
            </mesh>
        </>
    )
}

export default Cube