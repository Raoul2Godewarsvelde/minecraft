import React from 'react'

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
        <>
            {leftPanel.isOpen && (
                <div id='leftPanel__wrapper' className='panel__wrappers'>
                    <PanelTitle title={'Global Settings'} />
                    <EnvironmentController />
                    <AddPrimitiveController />
                </div>
            )}
        </>
    )
}

export default LeftPanel