import React from 'react'

import { ControlPanelButtons } from '@components/Panels/Components/Registration/index'

const PanelTitle = ({ id, title }) => {

    return (
        <div id={id} className='title_panel'>
            <h1>{title}</h1>
            <ControlPanelButtons />
        </div>
    )
}

export default PanelTitle