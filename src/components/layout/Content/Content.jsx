import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../../pages/Home/Home'
import User from '../../../pages/User/User'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

function Content() {

  const [ user, setUser ] = useState('')

  function getdata(u){
    setUser(u)
  }

  return (
    <main className="content">
      <Header getdata={getdata} />

      <Switch>

        <Route path="/user">
          <User user={user}/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
      
      <Footer />
    </main>
  )
}

export default Content