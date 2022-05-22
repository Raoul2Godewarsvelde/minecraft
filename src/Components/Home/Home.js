import React from 'react'

import { Scene } from '@components/Home/Registration/index'

import { HomeController } from '@components/Controllers/Registration/index'

const Home = () => {

    return (
        <div id='home__wrapper'>
            <HomeController />
            <Scene />
        </div>
    )
}

export default Home

// EFFECTS

// Persistence
// https://codepen.io/gbnikolov/pen/OJxmojd