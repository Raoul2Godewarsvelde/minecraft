import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

import Player from './Components/Player'
import Box from './Components/Box'
import Cube from './Components/Cube'
import Ground from './Components/Ground'

import './App.scss'

const App = () => {
  return (
    <>
      <Canvas shadowMap shadows sRBG>
        <Sky castShadow sunPosition={[100, 20, 100]} />
        <OrbitControls />
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
          <Cube position={[0, 0.5, 0]} type='wood' />
          <Cube position={[1, 0.5, 0]} type='log' />
          <Cube position={[2, 0.5, 0]} type='glass' />
          <Cube position={[3, 0.5, 0]} type='dirt' />
          <Cube position={[4, 0.5, 0]} type='grass' />

          <Cube position={[0, 5, 0]} type='grass' />
          <Cube position={[4, 5, 0]} type='grass' />
          <Ground position={[0, 0.5, 0]} />
        </Physics>
      </Canvas>
    </>
  )
}

export default App
