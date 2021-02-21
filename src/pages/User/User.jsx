import React from 'react'
import './User.css'

import Header from '../../components/Header/Header'

function User() {
  return (
      <div>
          <Header/>

            <div className="wrapper-user">

                <section id="users">
                    <h3>Paulo Teixeira</h3>
                    <div className="github-stats">
                        <h4>GitHub stats</h4>
                        <div className="stats-wrapper">
                            <div className="stats-container">

                            </div>
                            <div className="language-container">
                                
                            </div>
                        </div>
                    </div>

                    <div className="github-repos">
                        <h4>Repos</h4>
                        <div className="repos-wrapper">
                            <div className="repo-01">
                            </div>
                            <div className="repo-02">
                                
                            </div>
                        </div>                        
                    </div>

                </section>            
            </div>
      </div>
  )
}

export default User