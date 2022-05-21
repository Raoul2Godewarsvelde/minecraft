import React, { createRef } from 'react'

import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

/* import { PerspectiveCamera } from '@components/Cameras/Registration/index' */
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { Cube } from '@components/Meshes/Primitives/Registration/index'

const Home = () => {

    const camera = createRef()

    return (
        <Canvas id={'home_scene'}>
            {/* <color attach='background' args={'#000'} /> */}
            <ambientLight />
            <PerspectiveCamera position={[20, 20, 20]} makeDefault />
            <OrbitControls />
            {/* <PerspectiveCamera
                ref={camera}
                canvasID={'home_scene'}
                position={[10, 10, 10]}
            /> */}
            <Cube
                position={[0, 0, 0]}
                size={[1, 1, 1]}
            />
        </Canvas>
    )
}

export default Home