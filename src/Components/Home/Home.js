import React, { createRef } from 'react'

import { Canvas } from '@react-three/fiber'

import { GUI } from 'dat.gui'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'

import { Cube } from '@components/Meshes/Primitives/Registration/index'

const Home = () => {

    const camera = createRef()

    return (
        <Canvas id={'home_scene'}>
            <color attach='background' args={'#000'} />
            <ambientLight />
            <PerspectiveCamera
                ref={camera}
                canvasID={'home_scene'}
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

export default Home

// EFFECTS

// Persistence
// https://codepen.io/gbnikolov/pen/OJxmojd