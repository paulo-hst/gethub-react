import React from 'react'
import './Header.css'
import SearchInput from '../SearchInput/SearchInput'

function Header() {
  return (      
    <header id="header">
        <h1 className="logo"><span>get</span>Hub</h1>
        <SearchInput />
    </header>
  );
}

export default Header