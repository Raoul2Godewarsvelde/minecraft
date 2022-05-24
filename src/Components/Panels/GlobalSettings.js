import React from 'react'

import Draggable from 'react-draggable'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { PanelTitle } from '@components/Panels/Components/Registration/index'

import { AddPrimitiveController, EnvironmentController } from '@components/Panels/Components/Controllers/Registration/index'

import '@styles/interface.scss'
import '@styles/Components/Panels/left_panel.scss'

const GlobalSettings = () => {

    // HOOKS

    const [globalSettings] = useInterfaceStore((state) => [
        state.globalSettings
    ])

    // RETURN

    return (
        <Draggable
            handle='#globalSettings_title_panel'
        >
            <div id='leftPanel__wrapper' className='panel__wrappers'>
                <PanelTitle id={'globalSettings_title_panel'} title={'Global Settings'} />
                {!globalSettings.isCollapse && (
                    <>
                        <EnvironmentController />
                        <AddPrimitiveController />
                    </>
                )}
            </div>
        </Draggable>
    )
}

export default GlobalSettings