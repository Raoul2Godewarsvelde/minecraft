import React from 'react'

import Draggable from 'react-draggable'

import {
    Close,
    ExpandLess,
    ExpandMore
} from '@mui/icons-material'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { PanelTitle } from '@components/Panels/Components/Registration/index'

import '@styles/interface.scss'
import '@styles/Components/Panels/Primitives/cube.scss'

const Cube = () => {

    // HOOKS

    const [cube, setIsOpen_Cube, setIsCollapse_Cube] = useInterfaceStore((state) => [
        state.cube,
        state.setIsOpen_Cube,
        state.setIsCollapse_Cube
    ])

    // RETURN

    return (
        <Draggable
            handle='#cube_title_panel'
        >
            <div id='cube__wrapper' className='panel__wrappers'>
                <PanelTitle id={'cube_title_panel'} title={'Cube'} toggleButtonIcons={[<ExpandLess />, <ExpandMore />]} setToggleButtonState={setIsCollapse_Cube} closeButtonIcon={<Close />} setCloseButtonState={setIsOpen_Cube} />
                {!cube.isCollapse && (
                    <>
                        {/* <AddPrimitiveController /> */}
                    </>
                )}
            </div>
        </Draggable>
    )
}

export default Cube