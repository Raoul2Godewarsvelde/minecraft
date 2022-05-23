import React from 'react'

import { Scene } from '@components/Home/Registration/index'

import {
    LeftPanel,
    RightPanel,
    TopBar
} from '@components/Panels/Registration/index'
import { CubeController } from '@components/Controllers/Registration/index'

const Home = () => {

    return (
        <div id='home__wrapper'>
            <TopBar />
            <LeftPanel />
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