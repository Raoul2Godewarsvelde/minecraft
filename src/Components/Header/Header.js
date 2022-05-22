import React from 'react'

import { Link } from 'react-router-dom'

import '@styles/Components/header.scss'

const Header = ({ setMySmallWorldActivated }) => {

    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link
                onClick={() => console.log('callback after route change')}
                to='/'>Home</Link>
            </li>
            <li>
              <Link
                onClick={() => console.log('callback after route change')}
                target='_blank'
                to='/my-small-world'>MySmall World</Link>
            </li>
            <li>
              <Link
                onClick={() => console.log('callback after route change')}
                to='/blog'>Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header