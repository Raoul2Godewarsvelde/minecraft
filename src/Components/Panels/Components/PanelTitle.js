import React from 'react'

import { ControlButtonsTitle } from '@components/Panels/Components/Registration/index'

const PanelTitle = ({ id, title }) => {

    return (
        <div id={id} className='title_panel'>
            <h1>{title}</h1>
            <ControlButtonsTitle />
        </div>
    )
}

export default PanelTitle