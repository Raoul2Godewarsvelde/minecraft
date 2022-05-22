import React, { useRef, useState } from 'react'

import { useFrame } from '@react-three/fiber'

import { useCubeStore } from '@hooks/useCubeStore'

const Cube = ({ key, controlled, position, rotation, scale, size, segments, wireframe, color, opacity }) => {

    // REF

    const cube = useRef()

    // STATES

    const [hovered, setHover] = useState(false)
    const [clicked, setClick] = useState(false)

    // HOOKS

    const [
        controlled_position,
        controlled_scale,
        controlled_rotation,
        controlled_size,
        controlled_segments,
        controlled_wireframe,
        controlled_color,
        controlled_opacity
    ] = useCubeStore((state) => [
        state.controlled_position,
        state.controlled_scale,
        state.controlled_rotation,
        state.controlled_size,
        state.controlled_segments,
        state.controlled_wireframe,
        state.controlled_color,
        state.controlled_opacity
    ])

    // USE FRAME
    
    useFrame((state, delta) => {
        /* cube.current.rotation.x += rotation_x */
    })
    
    return (
        <mesh
            id={key}
            key={key}
            ref={cube}
            position={controlled ? [controlled_position.x, controlled_position.y, controlled_position.z] : position ? [position.x, position.y, position.z] : [0, 0, 0]}
            rotation={controlled ? [controlled_rotation.x, controlled_rotation.y, controlled_rotation.z] : rotation ? [rotation.x, rotation.y, rotation.z] : [0, 0, 0]}
            scale={controlled ? [controlled_scale.x, controlled_scale.y, controlled_scale.z] : scale ? [scale.x, scale.y, scale.z] : [1, 1, 1]}
            /* scale={clicked ? 1.5 : 1} */
            /* onClick={(e) => setClick(!clicked)} */
            /* onPointerOver={(e) => setHover(true)} */
            /* onPointerOut={(e) => setHover(false)} */
        >
            <boxBufferGeometry
                attach='geometry'
                args={controlled ? [controlled_size.x, controlled_size.y, controlled_size.z, controlled_segments.x, controlled_segments.y, controlled_segments.z] : (size && segments) ? [size.x, size.y, size.z, segments.x, segments.y, segments.z] : (size && !segments) ? [size.x, size.y, size.z, 1, 1, 1] : (!size && segments) ? [1, 1, 1, segments.x, segments.y, segments.z] : [1, 1, 1, 1, 1, 1]}
            />
            <meshStandardMaterial
                attach='material'
                wireframe={controlled ? controlled_wireframe : wireframe ? wireframe : false}
                transparent
                color={controlled ? controlled_color : color ? color : '#ffffff'}
                opacity={controlled ? controlled_opacity : opacity ? opacity : 1}
            />
        </mesh>
    )
}

export default Cube