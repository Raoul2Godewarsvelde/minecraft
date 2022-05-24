import React from 'react'

const CloseButton = ({ closeButtonIcon, setCloseButtonState }) => {

    return (
        <div
            className='controlButtons_panel'
            onClick={setCloseButtonState}
        >
            {closeButtonIcon}
        </div>
    )
}

export default CloseButton