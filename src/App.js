import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@pages/Home/index'
import MySmallWorld from '@pages/MySmallWorld/index'
import Blog from '@pages/Blog/index'

import Header from '@components/Header/Header'

import './App.scss'

const App = () => {

  // STATES

  const [mySmallWorldActivated, setMySmallWorldActivated] = useState()

  return (
    <>
      <Router>
        {/* <Header setMySmallWorldActivated={setMySmallWorldActivated} /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-small-world' element={<MySmallWorld />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
