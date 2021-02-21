import React from 'react'
import './SearchInput.css'

import Search from "@material-ui/icons/Search";

function SearchInput() {
  return (      
    <div className="search">
        <input className="input-default" type="text" placeholder="Pesquisar"></input>
        <button className="button-default" ><Search className="button-icon"/></button>
    </div>
  )
}

export default SearchInput