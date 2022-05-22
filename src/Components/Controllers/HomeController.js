import React from 'react'

import { useHomeStore } from '@hooks/useHomeStore'

import { Range } from '@components/Inputs/Registration/index'

const HomeController = () => {

    // HOOKS

    const [width, height, depth, rotation_x, opacity, handleWidth, handleHeight, handleDepth, handleRotationX, handleOpacity] = useHomeStore((state) => [
        state.width,
        state.height,
        state.depth,
        state.rotation_x,
        state.opcaity,
        state.handleWidth,
        state.handleHeight,
        state.handleDepth,
        state.handleRotationX,
        state.handleOpacity
    ])

    return (
        <div id='home__controller'>
            <Range name={'width'} label={'X'} value={width} min={0} max={10} step={0.1} handleChange={handleWidth} />
            <Range name={'height'} label={'Y'} value={height} min={0} max={10} step={0.1} handleChange={handleHeight} />
            <Range name={'depth'} label={'Z'} value={depth} min={0} max={10} step={0.1} handleChange={handleDepth} />
            <Range name={'rotation_x'} label={'Rotation X'} value={rotation_x} min={0} max={1} step={0.01} handleChange={handleRotationX} />
            <Range name={'opacity'} label={'Opacity'} value={opacity} min={0} max={1} step={0.01} handleChange={handleOpacity} />
        </div>
    )
}

export default HomeController