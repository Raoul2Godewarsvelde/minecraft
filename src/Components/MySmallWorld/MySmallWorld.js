import React from 'react'

import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import { nanoid } from 'nanoid'

import { useStore } from '@hooks/useStore'
import { useInterval } from '@hooks/useInterval'

import Player from '@components/Player'
import Box from '@components/Box'
import Cube from '@components/Cube'
import Ground from '@components/Ground'

import Texture2DShader from '@components/Shaders/Texture2DShader'
import TextureShader from '@components/Shaders/TextureShader'

const MySmallWorld = () => {

    const [cubes, saveWorld] = useStore((state) => [
      state.cubes,
      state.saveWorld
    ])
  
    useInterval(() => {
      saveWorld(cubes)
      console.log('saved')
    }, 10000)

    return (
        <Canvas shadowMap shadows sRBG gl={{ alpha: false }}>
          <Sky castShadow sunPosition={[100, 20, 100]} />
          <directionalLight
            position={[5, 7, 0]}
            intensity={1.5}
            castShadow
            shadow-bias={-0.00001}
            shadow-camera-near={0.1}
            shadow-mapSize-width={4096}
            shadow-mapSize-height={4096}
            shadow-camera-far={20}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <ambientLight intensity={0.5} />
          <Physics gravity={[0, -30, 0]}>
  
            {/* MINECRAFT */}
            <Player position={[0, 3, 10]} />
            <Box />
            {cubes.map((cube) => (
              <Cube key={nanoid()} position={cube.pos} texture={cube.texture} />
            ))}
            <Ground position={[0, 0.5, 0]} />
  
            {/* CREATING EARTH + ADDING CITIES TO A PLANET */}
            <Texture2DShader />
            <TextureShader />
          </Physics>
        </Canvas>
    )
}

export default MySmallWorld