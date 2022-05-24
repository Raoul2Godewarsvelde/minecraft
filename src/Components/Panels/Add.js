import React from 'react'

import Draggable from 'react-draggable'

import {
    Close,
    ExpandLess,
    ExpandMore
} from '@mui/icons-material'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { PanelTitle } from '@components/Panels/Components/Registration/index'

import { AddPrimitiveController } from '@components/Panels/Components/Controllers/Registration/index'

import '@styles/interface.scss'
import '@styles/Components/Panels/add.scss'

const Add = () => {

    // HOOKS

    const [add, setIsOpen_Add, setIsCollapse_Add] = useInterfaceStore((state) => [
        state.add,
        state.setIsOpen_Add,
        state.setIsCollapse_Add
    ])

    // RETURN

    return (
        <Draggable
            handle='#add_title_panel'
        >
            <div id='add__wrapper' className='panel__wrappers'>
                <PanelTitle id={'add_title_panel'} title={'Add'} toggleButtonIcons={[<ExpandLess />, <ExpandMore />]} setToggleButtonState={setIsCollapse_Add} closeButtonIcon={<Close />} setCloseButtonState={setIsOpen_Add} />
                {!add.isCollapse && (
                    <>
                        <AddPrimitiveController />
                    </>
                )}
            </div>
        </Draggable>
    )
}

export default Add