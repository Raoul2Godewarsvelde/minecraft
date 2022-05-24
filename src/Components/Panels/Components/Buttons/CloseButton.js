import React from 'react'

const CloseButton = ({ icon, setState }) => {

    return (
        <div
            className='controlButtons_panel'
            onClick={setState}
        >
            {icon}
        </div>
    )
}

export default CloseButton