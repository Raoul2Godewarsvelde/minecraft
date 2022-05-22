import React from 'react'

import { EnvironmentController } from '@components/Controllers/Registration/index'

import '@styles/Components/Panels/left_panel.scss'

const LeftPanel = () => {

    return (
        <div id='leftPanel__wrapper'>
            <EnvironmentController />
        </div>
    )
}

export default LeftPanel