import React from 'react'

import Draggable from 'react-draggable'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { PanelTitle } from '@components/Panels/Components/Registration/index'

import { AddPrimitiveController, EnvironmentController } from '@components/Controllers/Registration/index'

import '@styles/interface.scss'
import '@styles/Components/Panels/left_panel.scss'

const LeftPanel = () => {

    // HOOKS

    const [leftPanel] = useInterfaceStore((state) => [
        state.leftPanel
    ])

    // RETURN

    return (
        <Draggable
            handle='#globalSettings_title_panel'
        >
            {leftPanel.isOpen && (
                <div id='leftPanel__wrapper' className='panel__wrappers'>
                    <PanelTitle id={'globalSettings_title_panel'} title={'Global Settings'} />
                    <EnvironmentController />
                    <AddPrimitiveController />
                </div>
            )}
        </Draggable>
    )
}

export default LeftPanel