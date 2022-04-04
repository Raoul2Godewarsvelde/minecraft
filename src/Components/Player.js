import React, { useEffect, useRef } from 'react'

import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'
import { Vector3 } from 'three'

import { useKeyboardControls } from '../Hooks/useKeyboardControls'

const SPEED = 6

const Player = (props) => {
    const { camera } = useThree()
    const {
        moveForward,
        moveBackward,
        moveLeft,
        moveRight,
        jump
    } = useKeyboardControls()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        ...props,
    }))

    const velocity = useRef([0, 0, 0])
    useEffect(() => {
            api.velocity.subscribe((v) => (velocity.current = v))
    }, [api.velocity])

    useFrame(() => {
        camera.position.copy(ref.current.position)
        const direction = new Vector3()

        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )
        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
        )

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, velocity.current[1], direction.z)
    })
    return (
        <>
            <mesh ref={ref} />
        </>
    )
}

export default Player