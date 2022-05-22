import React, { createRef } from 'react'

import { Canvas } from '@react-three/fiber'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'

import { Cube } from '@components/Meshes/Primitives/Registration/index'

const Scene = () => {

    // REF

    const camera = createRef()

    return (
        <Canvas id={'home__canvas'}>
            <color attach='background' args={'#000'} />
            <ambientLight />
            <PerspectiveCamera
                ref={camera}
                canvasID={'home__canvas'}
                position={[0, 0, -3]}
                positionZ={10}
            />
            <Cube
                position={[0, 0, 0]}
                size={[1, 1, 1]}
            />
        </Canvas>
    )
}

export default Scene