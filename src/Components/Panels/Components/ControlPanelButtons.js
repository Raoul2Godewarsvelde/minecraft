import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { ToggleButton, CloseButton } from '@components/Panels/Components//Buttons/Registration/index'

const ControlButtonsTitle = ({toggleButtonIcons, setToggleButtonState, closeButtonIcon, setCloseButtonState}) => {

    return (
        <div className='controlButtons__wrapper'>
            <ToggleButton toggleButtonIcons={toggleButtonIcons} setToggleButtonState={setToggleButtonState} />
            <CloseButton closeButtonIcon={closeButtonIcon} setCloseButtonState={setCloseButtonState} />
        </div>
    )
}

export default ControlButtonsTitle