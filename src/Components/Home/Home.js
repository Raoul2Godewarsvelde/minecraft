import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'

import { Scene } from '@components/Home/Registration/index'

import {
    GlobalSettings,
    RightPanel,
    TopBar
} from '@components/Panels/Registration/index'

import { CubeController } from '@components/Controllers/Registration/index'

const Home = () => {

    // HOOKS

    const [globalSettings] = useInterfaceStore((state) => [
        state.globalSettings
    ])

    // RETURN

    return (
        <div id='home__wrapper'>
            <TopBar />
            {globalSettings.isOpen && (
                <GlobalSettings />
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