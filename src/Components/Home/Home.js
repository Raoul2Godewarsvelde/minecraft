import React from 'react'

import { useInterfaceStore } from '@hooks/useInterfaceStore'
import { useSceneStore } from '@hooks/useSceneStore'

import { Scene } from '@components/Home/Registration/index'

import {
    Add,
    GlobalSettings,
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
        cubePanel
    ] = useInterfaceStore((state) => [
        state.globalSettings,
        state.add,
        state.cubePanel
    ])

    const [
        cubes
    ] = useSceneStore((state) => [
        state.cubes
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

            {cubePanel.isOpen && (
                <Cube cube={cubes[cubes.length - 1]} />
            )}

            <Scene />
        </div>
    )
}

export default Home

// EFFECTS

// Persistence
// https://codepen.io/gbnikolov/pen/OJxmojd