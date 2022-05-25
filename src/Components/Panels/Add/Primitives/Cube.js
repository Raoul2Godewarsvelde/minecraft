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

    const [add, setIsOpen_Add, setIsCollapse_Add] = useInterfaceStore((state) => [
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
                <PanelTitle id={'cube_title_panel'} title={'Cube'} toggleButtonIcons={[<ExpandLess />, <ExpandMore />]} setToggleButtonState={setIsCollapse_Add} closeButtonIcon={<Close />} setCloseButtonState={setIsOpen_Add} />
                {!add.isCollapse && (
                    <>
                        {/* <AddPrimitiveController /> */}
                    </>
                )}
            </div>
        </Draggable>
    )
}

export default Cube