import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import { nanoid } from 'nanoid'

import { useStore } from './Hooks/useStore'
import { useInterval } from './Hooks/useInterval'

import Player from './Components/Player'
import Box from './Components/Box'
import Cube from './Components/Cube'
import Ground from './Components/Ground'

import './App.scss'

const App = () => {

  const [cubes, saveWorld] = useStore((state) => [
    state.cubes,
    state.saveWorld
  ])

  useInterval(() => {
    saveWorld(cubes)
    console.log('saved')
  }, 10000)

  return (
    <>
      <Canvas shadowMap shadows sRBG gl={{ alpha: false }}>
        <Sky castShadow sunPosition={[100, 20, 100]} />
        <directionalLight
          position={[5, 7, 0]}
          intensity={1.5}
          castShadow
          shadowBias={-0.00001}
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
          <Player position={[0, 3, 10]} />
          <Box />
          {cubes.map((cube) => (
            <Cube key={nanoid()} position={cube.pos} texture={cube.texture} />
          ))}
          <Ground position={[0, 0.5, 0]} />
        </Physics>
      </Canvas>
    </>
  )
}

export default App
