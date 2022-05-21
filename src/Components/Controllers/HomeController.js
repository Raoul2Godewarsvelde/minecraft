import React, { useState } from 'react'

import { useHomeStore } from '@hooks/useHomeStore'

const HomeController = () => {

    // HOOKS

    const [width, handleWidth] = useHomeStore((state) => [
        state.width,
        state.handleWidth
    ])

    return (
        <div>
            <input
                id='width'
                type='range'
                name='width'
                min='0' max='100'
                value={width}
                onChange={(e) => handleWidth(e.target.value)}
            />
            <label htmlFor='volume'>Width</label>
        </div>
    )
}

export default HomeController