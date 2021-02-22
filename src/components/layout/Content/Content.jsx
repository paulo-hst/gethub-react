import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../../pages/Home/Home'
import User from '../../../pages/User/User'
import Header from '../../../components/Header/Header'

// Passos:
// Trabalhar no recebimento de entrada de dados pelo input
// realizar pesquisa do usuario atraves da api do github
// trabalhar na página de resultado de pesquisa do usuário
// criar footer
// trabalhar na resposividade (página users toda cagada)
// adicionar links no campo github stats na página users
// separar github stats e github repos em dois componentes ?
// atualizar octocat ?

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