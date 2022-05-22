import React from 'react'

import { CubeController } from '@components/Controllers/Registration/index'

import '@styles/Components/Panels/right_panel.scss'

const RightPanel = () => {

    return (
        <div id='rightPanel__wrapper'>
            <h1>Object controller</h1>
            <CubeController />
        </div>
    )
}

export default RightPanel