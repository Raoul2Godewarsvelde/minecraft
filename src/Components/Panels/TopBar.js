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
                <div id='leftNav_topBar'>
                    <p id='logo_topBar'>Logo</p>
                    <p>File</p>
                    <p>Edit</p>
                    <p>Selection</p>
                    <p>View</p>
                    <p>Go</p>
                    <p>Run</p>
                    <p>Terminal</p>
                    <p>Help</p>
                </div>

                <div id='rightNav_topBar'>
                    <p>Get started</p>
                    <p className='lastItem_rightNav_topBar'>Sign Up</p>
                </div>
            </div>
        </>
    )
}

export default TopBar