import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from '@pages/Home/index'
import MySmallWorld from '@pages/MySmallWorld/index'

import './App.scss'

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my_small_world' element={<MySmallWorld />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
