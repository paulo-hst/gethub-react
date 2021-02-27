import React, { useState } from 'react'
import './SearchInput.css'
import Search from "@material-ui/icons/Search";

function SearchInput(props) {

  const [ user, setUser ] = useState('')

  function searchUser(){
    if(user){
      props.sendUser(user)
    }
  }

  return (      
    <div className="search">
        <input 
          className="input-default" 
          type="text" 
          placeholder="Pesquisar"
          onChange={event => { setUser(event.target.value) }}
        />
        <button className="button-default" onClick={ searchUser }>
          <Search className="button-icon"/>
        </button>
    </div>
  )
}

export default SearchInput