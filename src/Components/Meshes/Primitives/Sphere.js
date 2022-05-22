import React, { useRef } from 'react'

import { useSphereStore } from '@hooks/useSphereStore'

const Sphere = ({ controlled, position, rotation, scale, radius, segments, wireframe, opacity }) => {

    // REF

    const plane = useRef()

    // HOOKS

    const [controlled_position, controlled_radius, controlled_segments, controlled_scale, controlled_rotation, controlled_opacity, controlled_wireframe] = useSphereStore((state) => [
        state.controlled_position,
        state.controlled_radius,
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
            scale={controlled ? [controlled_scale.x, controlled_scale.y, controlled_scale.z] : scale ? [scale.x, scale.y, scale.z] : [1, 1, 1]}
        >
            <sphereBufferGeometry
                attach='geometry'
                args={controlled ? [controlled_radius.x, controlled_segments.lat, controlled_segments.long] : (radius && segments) ? [radius, segments.lat, segments.long] : (radius && !segments) ? [radius, 12, 12] : (!radius && segments) ? [1, segments.lat, segments.long] : [1, 12, 12]}
            />
            <meshStandardMaterial
                attach='material'
                wireframe={controlled ? controlled_wireframe : wireframe ? wireframe : false}
                transparent
                color={'#fff'}
                opacity={controlled ? controlled_opacity : opacity ? opacity : 1}
            />
        </mesh>
    )
}

export default Sphere