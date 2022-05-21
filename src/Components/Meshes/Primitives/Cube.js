import React, { useRef, useState } from 'react'

import { useFrame } from '@react-three/fiber'

const Cube = ({ position, size, ...props }) => {

    // REF

    const ref = useRef()

    // STATES

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    
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
                ref={ref}
                psoition={position}
            >
                <boxGeometry attach='geometry' args={size} />
                <meshStandardMaterial attach='material' color='hotpink' />
            </mesh>
        </>
    )
}

export default Cube