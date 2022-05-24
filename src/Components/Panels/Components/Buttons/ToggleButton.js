import React, { useState } from 'react'

const ToggleButton = ({ icon, setState }) => {

    // STATES

    const [iconId, setIconId] = useState(0)

    return (
        <div
            className='controlButtons_panel'
            onClick={() => {
                setState()
                if(iconId === 0) {
                    setIconId(1)
                } else {
                    setIconId(0)
                }
            }}
        >
            {icon[iconId]}
        </div>
    )
}

export default ToggleButton