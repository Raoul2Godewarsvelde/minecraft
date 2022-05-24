import React from 'react'

import { ControlPanelButtons } from '@components/Panels/Components/Registration/index'

const PanelTitle = ({ id, title, toggleButtonIcons, setToggleButtonState, closeButtonIcon, setCloseButtonState }) => {

    return (
        <div id={id} className='title_panel'>
            <h1>{title}</h1>
            <ControlPanelButtons toggleButtonIcons={toggleButtonIcons} setToggleButtonState={setToggleButtonState} closeButtonIcon={closeButtonIcon} setCloseButtonState={setCloseButtonState} />
        </div>
    )
}

export default PanelTitle