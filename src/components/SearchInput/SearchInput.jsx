import React, { useState } from 'react'
import './SearchInput.css'
import Search from "@material-ui/icons/Search";
import { Link } from 'react-router-dom'

function SearchInput(props) {

  // const inputElement = document.querySelector('.input-default')

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
            <Link to={ '/user' }>
                <Search className="button-icon"/>
            </Link>
          </button>

    </div>
  )
}

export default SearchInput