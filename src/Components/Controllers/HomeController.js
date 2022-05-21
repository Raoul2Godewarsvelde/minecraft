import React, { useState } from 'react'

import { useHomeStore } from '@hooks/useHomeStore'

const HomeController = () => {

    // HOOKS

    const [width, height, depth, handleWidth, handleHeight, handleDepth] = useHomeStore((state) => [
        state.width,
        state.height,
        state.depth,
        state.handleWidth,
        state.handleHeight,
        state.handleDepth
    ])

    return (
        <div>
            <input
                id='width'
                type='range'
                name='width'
                min='0'
                max='10'
                value={width}
                onChange={(e) => handleWidth(e.target.value)}
            />
            <label htmlFor='volume'>Width</label>
            <input
                id='height'
                type='range'
                name='height'
                min='0'
                max='10'
                value={height}
                onChange={(e) => handleHeight(e.target.value)}
            />
            <label htmlFor='volume'>Height</label>
            <input
                id='depth'
                type='range'
                name='depth'
                min='0'
                max='10'
                value={depth}
                onChange={(e) => handleDepth(e.target.value)}
            />
            <label htmlFor='volume'>Depth</label>
        </div>
    )
}

export default HomeController