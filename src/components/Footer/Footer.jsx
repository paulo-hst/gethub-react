import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer(props) {
  
  return (      
    <footer id="footer">
        <Link to="/" style={{ textDecoration: 'none', color: '#6C80EA' }}>
          <h1 className="logo">
            <span>get</span>Hub
          </h1>
        </Link>
        <p>Paulo Teixeira | 2021</p>
    </footer>
  );
}

export default Footer