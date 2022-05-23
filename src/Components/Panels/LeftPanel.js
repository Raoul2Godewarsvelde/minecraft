import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { AddPrimitiveController, EnvironmentController } from '@components/Controllers/Registration/index'

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
                <div id='leftPanel__wrapper'>
                    <EnvironmentController />
                    <AddPrimitiveController />
                </div>
            )}
        </>
    )
}

export default LeftPanel