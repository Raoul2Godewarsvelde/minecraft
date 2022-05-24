import React, { useState } from 'react'

const ToggleButton = ({ toggleButtonIcons, setToggleButtonState }) => {

    // STATES

    const [iconId, setIconId] = useState(0)

    return (
        <div
            className='controlButton'
            onClick={() => {
                setToggleButtonState()
                if(iconId === 0) {
                    setIconId(1)
                } else {
                    setIconId(0)
                }
            }}
        >
            {toggleButtonIcons[iconId]}
        </div>
    )
}

export default ToggleButton