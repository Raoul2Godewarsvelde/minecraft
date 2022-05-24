import React from 'react'

import { ToggleButton, CloseButton } from '@components/Panels/Components//Buttons/Registration/index'

import '@styles/Components/Panels/Components/control_panel_buttons.scss'

const ControlPanelButtons = ({toggleButtonIcons, setToggleButtonState, closeButtonIcon, setCloseButtonState}) => {

    return (
        <div className='controlPanelButtons__wrapper'>
            <ToggleButton toggleButtonIcons={toggleButtonIcons} setToggleButtonState={setToggleButtonState} />
            <CloseButton closeButtonIcon={closeButtonIcon} setCloseButtonState={setCloseButtonState} />
        </div>
    )
}

export default ControlPanelButtons