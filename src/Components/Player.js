import { useEffect, useRef } from 'react'

import * as THREE from 'three'
import { useSphere } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'

import { FPVControls } from './FPVControls'

import usePlayerControls from '../Hooks/usePlayerControls'

const SPEED = 5

const Player = (props) => {

    const { forward, backward, left, right, jump } = usePlayerControls()

    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        ...props
    }))

    const { camera } = useThree()

    const velocity = useRef([0, 0, 0])
    
    useEffect(() => {
        api.velocity.subscribe((v) => (velocity.current = v))
    }, [api.velocity])

    useFrame((state) => {
        ref.current.getWorldPosition(camera.position)
        
        const direction = new THREE.Vector3()

        const frontVector = new THREE.Vector3(
            0,
            0,
            (backward ? 1 : 0) - (forward ? 1 : 0)
        )
        const sideVector = new THREE.Vector3(
            (left ? 1 : 0) - (right ? 1 : 0),
            0,
            0
        )

        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
            
        api.velocity.set(direction.x, velocity.current[1], direction.z)

        if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
            api.velocity.set(velocity.current[0], 8, velocity.current[2])
        }
    })
    return (
        <>
            <FPVControls />
            <mesh ref={ref} />
        </>
    )
}

export default Player
