import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import '@styles/interface.scss'
import '@styles/Components/Panels/top_bar.scss'

const TopBar = () => {

    // HOOKS

    const [topBar] = useInterfaceStore((state) => [
        state.topBar
    ])

    // RETURN

    return (
        <>
            <div id='topBar__wrapper' className='panel__wrappers'>
                
            </div>
        </>
    )
}

export default TopBar