import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchInput from '../SearchInput/SearchInput'
function Header(props) {

  function sendUser(u){
    props.getdata(u)
  }
  
  return (      
    <header id="header">
        <Link to="/user" style={{ textDecoration: 'none', color: '#6C80EA' }}>
          <h1 className="logo">
            <span>get</span>Hub
          </h1>
        </Link>
        <SearchInput sendUser={sendUser} />
    </header>
  );
}

export default Header