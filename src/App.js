import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from '@pages/Home/index'
import MySmallWorld from '@pages/MySmallWorld/index'
import Blog from '@pages/Blog/index'

import Header from './Components/Header/Header'

import './App.scss'

const App = () => {

  return (
    <>
      <Router>
        <Header />

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
