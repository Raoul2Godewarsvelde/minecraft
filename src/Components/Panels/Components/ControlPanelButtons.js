import React from 'react'

import {
    Close,
    ExpandLess,
    ExpandMore
} from '@mui/icons-material'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { ToggleButton, CloseButton } from '@components/Panels/Components/Registration/index'

const ControlButtonsTitle = () => {

    // HOOKS

    const [setIsOpen_GlobalSettings, setIsCollapse_GlobalSettings] = useInterfaceStore((state) => [
        state.setIsOpen_GlobalSettings,
        state.setIsCollapse_GlobalSettings
    ])

    return (
        <div className='controlButtons__wrapper'>
            <ToggleButton icon={[<ExpandLess />, <ExpandMore />]} setState={setIsCollapse_GlobalSettings} />
            <CloseButton icon={<Close />} setState={setIsOpen_GlobalSettings} />
        </div>
    )
}

export default ControlButtonsTitle