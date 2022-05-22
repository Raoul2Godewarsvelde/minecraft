import React from 'react'

import { AddPrimitiveController, EnvironmentController } from '@components/Controllers/Registration/index'

import '@styles/Components/Panels/left_panel.scss'

const LeftPanel = () => {

    return (
        <div id='leftPanel__wrapper'>
            <EnvironmentController />
            <AddPrimitiveController />
        </div>
    )
}

export default LeftPanel