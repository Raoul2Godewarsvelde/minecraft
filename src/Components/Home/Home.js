import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { Scene } from '@components/Home/Registration/index'

import {
    Add,
    GlobalSettings,
    RightPanel,
    TopBar
} from '@components/Panels/Registration/index'

/* import { CubeController } from '@components/Panels/Components/Controllers/Registration/index' */

const Home = () => {

    // HOOKS

    const [globalSettings, add] = useInterfaceStore((state) => [
        state.globalSettings,
        state.add
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

            <RightPanel />
            {/* <CubeController /> */}
            <Scene />
        </div>
    )
}

export default Home

// EFFECTS

// Persistence
// https://codepen.io/gbnikolov/pen/OJxmojd