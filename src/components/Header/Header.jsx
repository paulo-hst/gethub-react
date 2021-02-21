import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchInput from '../SearchInput/SearchInput'

function Header() {
  return (      
    <header id="header">
        <Link to="/user"><h1 className="logo">
          <span>get</span>Hub</h1>
        </Link>
        <SearchInput />
    </header>
  );
}

export default Header