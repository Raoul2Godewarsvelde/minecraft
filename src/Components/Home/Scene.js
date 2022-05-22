import React, { createRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import { Grid } from '@components/Helpers/Registration/index'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'

import { Cube, Plane, Sphere } from '@components/Meshes/Primitives/Registration/index'

const Scene = () => {

    // REF

    const camera = createRef()

    return (
        <Canvas id={'home__canvas'}>
            <Suspense fallback={null}>
                {/* <Grid /> */}
                <color attach='background' args={'#000'} />

                <ambientLight />
                <PerspectiveCamera
                    ref={camera}
                    canvasID={'home__canvas'}
                    position={[2, 2, -3]}
                    positionZ={10}
                />
                <Cube controlled={true} />
                <Cube position={{x: 1, y: 1, z: 1}} rotation={{x: 0, y: 3, z: 0}} scale={{x: 1, y: 1, z: 1}} size={{x: 1, y: 1, z: 1}} segments={{x: 1, y: 1, z: 1}} wireframe={false} opacity={1} />
                <Cube position={{x: 1, y: 3, z: 1}} />

                {/* <Plane position={{x: 0, y: 2, z: 0}} rotation={{x: 0, y: 0, z: 0}} scale={{x:1, y:1}} size={{x: 10, y: 10}} segments={{x: 10, y: 10}} wireframe={false} opacity={1} /> */}
                <Plane />
                <Sphere position={{x: 3, y: 3, z: 3}} wireframe />
            </Suspense>
        </Canvas>
    )
}

export default Scene