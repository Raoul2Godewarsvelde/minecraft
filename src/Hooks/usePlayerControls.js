import { useEffect, useRef, useState } from 'react'

const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', Space: 'jump' }

const moveFieldByKey = (key) => keys[key]

const usePlayerControls = () => {
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false
    })
        
    useEffect(() => {
        const handleKeyDown = (e) => {
            setMovement((movement) => ({
                ...movement,
                [moveFieldByKey(e.code)]: true 
            }))
        }
        const handleKeyUp = (e) => {
            setMovement((movement) => ({
                ...movement,
                [moveFieldByKey(e.code)]: false
            }))
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])
    return movement
}

export default usePlayerControls