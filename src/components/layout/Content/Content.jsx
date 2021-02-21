import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../../pages/Home/Home'
import User from '../../../pages/User/User'

function Content() {
  return (
    <main className="content">
      <Switch>

        <Route path="/user">
          <User />
        </Route>

        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </main>
  )
}

export default Content