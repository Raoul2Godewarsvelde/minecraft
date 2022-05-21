import React, { useRef, useState } from 'react'

import { useHomeStore } from '@hooks/useHomeStore'

import { useFrame } from '@react-three/fiber'

const Cube = ({ position, size, ...props }) => {

    // REF

    const cube = useRef()

    // STATES

    const [hovered, setHover] = useState(false)
    const [clicked, setClick] = useState(false)

    // HOOKS

    const [width, height, depth, rotation_x, opacity] = useHomeStore((state) => [
        state.width,
        state.height,
        state.depth,
        state.rotation_x,
        state.opacity
    ])
    
    useFrame((state, delta) => {
        cube.current.rotation.x += rotation_x
    })
    
    return (
        <>
            <mesh
                {...props}
                ref={cube}
                psoition={position}
                scale={clicked ? 1.5 : 1}
                onClick={(e) => setClick(!clicked)}
                onPointerOver={(e) => setHover(true)}
                onPointerOut={(e) => setHover(false)}
            >
                <boxGeometry
                    attach='geometry'
                    args={[width, height, depth]}
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