import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../../pages/Home/Home'
import User from '../../../pages/User/User'
import Header from '../../../components/Header/Header'

function Content() {

  const user = 'paulo-hst'
  const repo = 'pokedex'
  const name = 'Paulo Teixeira'

  return (
    <main className="content">
      <Header/>
      <Switch>

        <Route path="/user">
          <User name={name} user={user} repo={repo} />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </main>
  )
}

export default Content