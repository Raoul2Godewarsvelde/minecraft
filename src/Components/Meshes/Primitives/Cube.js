import React, { useRef, useState } from 'react'

import { useHomeStore } from '@hooks/useHomeStore'

/* import { useFrame } from '@react-three/fiber' */

const Cube = ({ position, size, ...props }) => {

    // REF

    const cube = useRef()

    // STATES

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    // HOOKS

    const [width, height, depth] = useHomeStore((state) => [
        state.width,
        state.height,
        state.depth
    ])
    
    /* useFrame((state, delta) => (ref.current.rotation.x += 0.01)) */
    
    return (
        <>
            {/* <mesh
                {...props}
                ref={ref}
                psoition={position}
                scale={clicked ? 1.5 : 1}
                onClick={(e) => click(!clicked)}
                onPointerOver={(e) => hover(true)}
                onPointerOut={(e) => hover(false)}
            >
                <boxGeometry
                    attach='geometry'
                    args={size}
                />
                <meshStandardMaterial
                    attach='material'
                    color={!hovered ? '#fff' : '#f00'}
                />
            </mesh> */}
            <mesh
                {...props}
                ref={cube}
                psoition={position}
            >
                <boxGeometry attach='geometry' args={[width, height, depth]} />
                <meshStandardMaterial attach='material' color='hotpink' />
            </mesh>
        </>
    )
}

export default Cube