import React from 'react'

import Draggable from 'react-draggable'

import {
    Close,
    ExpandLess,
    ExpandMore
} from '@mui/icons-material'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { PanelTitle } from '@components/Panels/Components/Registration/index'

import { EnvironmentController } from '@components/Panels/Components/Controllers/Registration/index'

import '@styles/interface.scss'
import '@styles/Components/Panels/global_settings.scss'

const GlobalSettings = () => {

    // HOOKS

    // HOOKS

    const [globalSettings, setIsOpen_GlobalSettings, setIsCollapse_GlobalSettings] = useInterfaceStore((state) => [
        state.globalSettings,
        state.setIsOpen_GlobalSettings,
        state.setIsCollapse_GlobalSettings
    ])

    // RETURN

    return (
        <Draggable
            handle='#globalSettings_title_panel'
        >
            <div id='globalSettings__wrapper' className='panel__wrappers'>
                <PanelTitle id={'globalSettings_title_panel'} title={'Global Settings'} toggleButtonIcons={[<ExpandLess />, <ExpandMore />]} setToggleButtonState={setIsCollapse_GlobalSettings} closeButtonIcon={<Close />} setCloseButtonState={setIsOpen_GlobalSettings} />
                {!globalSettings.isCollapse && (
                    <>
                        <EnvironmentController />
                    </>
                )}
            </div>
        </Draggable>
    )
}

export default GlobalSettings