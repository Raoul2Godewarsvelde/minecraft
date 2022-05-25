import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { Scene } from '@components/Home/Registration/index'

import {
    Add,
    GlobalSettings,
    /* RightPanel, */
    TopBar
} from '@components/Panels/Registration/index'

import {
    Cube
} from '@components/Panels/Add/Primitives/Registration/index'

/* import { CubeController } from '@components/Panels/Components/Controllers/Registration/index' */

const Home = () => {

    // HOOKS

    const [
        globalSettings,
        add,
        cube
    ] = useInterfaceStore((state) => [
        state.globalSettings,
        state.add,
        state.cube
    ])

    // RETURN

    return (
        <div id='home__wrapper'>
            <TopBar />

            {globalSettings.isOpen && (
                <GlobalSettings />
            )}

            {add.isOpen && (
                <Add />
            )}

            {cube.isOpen && (
                <Cube />
            )}

            {/* <RightPanel /> */}
            {/* <CubeController /> */}
            
            <Scene />
        </div>
    )
}

export default Home

// EFFECTS

// Persistence
// https://codepen.io/gbnikolov/pen/OJxmojd