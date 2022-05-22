import React, { useRef } from 'react'

import * as THREE from 'three'

import { usePlaneStore } from '@hooks/usePlaneStore'

const Plane = ({ controlled, position, rotation, scale, size, segments, wireframe, opacity }) => {

    // REF

    const plane = useRef()

    // HOOKS

    const [controlled_position, controlled_size, controlled_segments, controlled_scale, controlled_rotation, controlled_opacity, controlled_wireframe] = usePlaneStore((state) => [
        state.controlled_position,
        state.controlled_size,
        state.controlled_segments,
        state.controlled_scale,
        state.controlled_rotation,
        state.controlled_opacity,
        state.controlled_wireframe
    ])

    return (
        <mesh
            ref={plane}
            position={controlled ? [controlled_position.x, controlled_position.y, controlled_position.z] : position ? [position.x, position.y, position.z] : [0, 0, 0]}
            rotation={controlled ? [controlled_rotation.x, controlled_rotation.y, controlled_rotation.z] : rotation ? [rotation.x, rotation.y, rotation.z] : [0, 0, 0]}
            scale={controlled ? [controlled_scale.x, controlled_scale.y] : scale ? [scale.x, scale.y] : [1, 1]}
        >
            <planeBufferGeometry
                attach='geometry'
                args={controlled ? [controlled_size.x, controlled_size.y, controlled_segments.x, controlled_segments.y] : (size && segments) ? [size.x, size.y, segments.x, segments.y] : (size && !segments) ? [size.x, size.y, 1, 1] : (!size && segments) ? [1, 1, segments.x, segments.y] : [1, 1, 1, 1]}
            />
            <meshStandardMaterial
                attach='material'
                wireframe={controlled ? controlled_wireframe : wireframe ? wireframe : false}
                transparent
                side={THREE.DoubleSide}
                color={'#fff'}
                opacity={controlled ? controlled_opacity : opacity ? opacity : 1}
            />
        </mesh>
    )
}

export default Plane