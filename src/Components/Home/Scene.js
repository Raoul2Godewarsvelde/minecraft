import React, { createRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import { nanoid } from 'nanoid'

import { useEnvironmentStore } from '@hooks/useEnvironmentStore'
import { useSceneStore } from '@hooks/useSceneStore'

import { Grid } from '@components/Helpers/Registration/index'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'

import { Cube, Plane, Sphere } from '@components/Meshes/Primitives/Registration/index'

const Scene = () => {

    // REF

    const camera = createRef()

    // HOOKS

    const [controlled_color] = useEnvironmentStore((state) => [
        state.controlled_color
    ])

    const [cubes] = useSceneStore((state) => [
      state.cubes,
    ])

    return (
        <Canvas id={'home__canvas'} style={{background: controlled_color}}>
            <Suspense fallback={null}>
                {/* <Grid /> */}

                <ambientLight />

                <PerspectiveCamera
                    ref={camera}
                    canvasID={'home__canvas'}
                    position={[2, 2, -3]}
                    positionZ={10}
                />

                {cubes.map((cube) => (
                    <Cube key={nanoid()} position={cube.position} color={cube.color} />
                ))}
                
                <Cube key={nanoid()} controlled={true} />
                <Cube key={nanoid()} position={{x: 1, y: 1, z: 1}} rotation={{x: 0, y: 3, z: 0}} scale={{x: 1, y: 1, z: 1}} size={{x: 1, y: 1, z: 1}} segments={{x: 1, y: 1, z: 1}} wireframe={false} opacity={1} />
                <Cube key={nanoid()} position={{x: 1, y: 3, z: 1}} />

                {/* <Plane position={{x: 0, y: 2, z: 0}} rotation={{x: 0, y: 0, z: 0}} scale={{x:1, y:1}} size={{x: 10, y: 10}} segments={{x: 10, y: 10}} wireframe={false} opacity={1} /> */}
                <Plane />
                <Sphere position={{x: 3, y: 3, z: 3}} wireframe />
            </Suspense>
        </Canvas>
    )
}

export default Scene