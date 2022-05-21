import React, { forwardRef, useEffect } from 'react'

import { useThree } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

const Camera = forwardRef(({ canvasID, position, ...props }, ref) => {

    const set = useThree(state => state.set)

    useEffect(() => {
      void set({ camera: ref.current })
    })

    const canvas = document.getElementById(canvasID)
    let canvasWidth = canvas.offsetWidth
    let canvasHeight = canvas.offsetHeight

    window.addEventListener('resize', () => {
        canvasWidth = canvas.offsetWidth
        canvasHeight = canvas.offsetHeight
        ref.current.aspect = canvasWidth / canvasHeight
        ref.current.fov = 2 * Math.atan((canvasHeight / 2) / position.z) * (180 / Math.PI)
    })

    return (
        <>
            <PerspectiveCamera
                {...props}
                makeDefault
                ref={ref}
                position={position}
                aspect={canvasWidth / canvasHeight}
                fov={2 * Math.atan((canvasHeight / 2) / position.z) * (180 / Math.PI)}
                onUpdate={self => self.updateProjectionMatrix()}
            />
            <OrbitControls
                target={[0, 0, 0]}
            />
        </>
    )
})

export default Camera