import React from 'react'

const CloseButton = ({ closeButtonIcon, setCloseButtonState }) => {

    return (
        <div
            className='controlButton'
            onClick={setCloseButtonState}
        >
            {closeButtonIcon}
        </div>
    )
}

export default CloseButton