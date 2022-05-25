import React from 'react'

import Draggable from 'react-draggable'

import {
    Close,
    ExpandLess,
    ExpandMore
} from '@mui/icons-material'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { PanelTitle } from '@components/Panels/Components/Registration/index'

import { CubeController } from '@components/Panels/Components/Controllers/Registration/index'

import '@styles/interface.scss'
import '@styles/Components/Panels/Primitives/cube.scss'

const Cube = () => {

    // HOOKS

    const [cubePanel, setIsOpen_CubePanel, setIsCollapse_CubePanel] = useInterfaceStore((state) => [
        state.cubePanel, state.setIsOpen_CubePanel, state.setIsCollapse_CubePanel
    ])

    // RETURN

    return (
        <Draggable
            handle='#cube_title_panel'
        >
            <div id='cube__wrapper' className='panel__wrappers'>
                <PanelTitle id={'cube_title_panel'} title={'Cube'} toggleButtonIcons={[<ExpandLess />, <ExpandMore />]} setToggleButtonState={setIsCollapse_CubePanel} closeButtonIcon={<Close />} setCloseButtonState={setIsOpen_CubePanel} />
                {!cubePanel.isCollapse && (
                    <>
                        <CubeController />
                    </>
                )}
            </div>
        </Draggable>
    )
}

export default Cube