import React, { useState } from 'react'

import { useBox } from '@react-three/cannon'

import { useStore } from '../Hooks/useStore'

import * as textures from '../textures'

const Cube = ({ position, texture, ...props }) => {

    const [addCube, removeCube, activeTexture] = useStore((state) => [
        state.addCube,
        state.removeCube,    
        state.texture    
    ])

    const [hover, setHover] = useState(null)

    const [ref] = useBox(() => ({
        type: 'Static',
        position,
        ...props
    }))

    return (
        <mesh
            ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation()
                setHover(Math.floor(e.faceIndex / 2))
            }}
            onPointerOut={(e) => {
                setHover(null)
            }}
            onClick={(e) => {
                e.stopPropagation()
                const clickedFace = Math.floor(e.faceIndex / 2)
                const { x, y, z } = ref.current.position
                if(clickedFace === 0) {
                    console.log(e.altKey)
                    e.altKey ? removeCube(x, y, z) : addCube(x + 1, y, z, activeTexture)
                    return
                }
                if(clickedFace === 1) {
                    console.log(e.altKey)
                    e.altKey ? removeCube(x, y, z) : addCube(x - 1, y, z, activeTexture)
                    return
                }
                if(clickedFace === 2) {
                    console.log(e.altKey)
                    e.altKey ? removeCube(x, y, z) : addCube(x, y + 1, z, activeTexture)
                    return
                }
                if(clickedFace === 3) {
                    console.log(e.altKey)
                    e.altKey ? removeCube(x, y, z) : addCube(x, y - 1, z, activeTexture)
                    return
                }
                if(clickedFace === 4) {
                    console.log(e.altKey)
                    e.altKey ? removeCube(x, y, z) : addCube(x, y, z + 1, activeTexture)
                    return
                }
                if(clickedFace === 5) {
                    console.log(e.altKey)
                    e.altKey ? removeCube(x, y, z) : addCube(x, y, z - 1, activeTexture)
                    return
                }
            }}
            castShadow
        >
            {[ ...Array(6)].map((_, index) => (
                <meshStandardMaterial
                    key={index}
                    attachArray='material'
                    map={textures[texture]}
                    transparent={true}
                    color={hover === index ? 'red' : 'white'}
                    opacity={texture === 'glass' ? 0.7 : 1}
                />
            ))}
            <boxBufferGeometry attach='geometry' />
        </mesh>
    )
}

export default Cube
