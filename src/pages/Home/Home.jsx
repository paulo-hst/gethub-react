import React from 'react'
import './Home.css'

import SearchInput from '../../components/SearchInput/SearchInput';
import octocat from '../../assets/octocat.png'
import UserInfo from '../../components/UserInfo/UserInfo';

function Home(props) {
  return(
      <div>
        <div className="wrapper-welcome">
            <section id="welcome">
                <div className="text">
                    <h2>Stalk people on GitHub!</h2>
                    <SearchInput/>
                </div>
                <div className="image">
                    <img src={octocat} alt="Octocat"/>
                </div>
            </section>
        </div>

        <div className="wrapper-user">
            <section id="users">
                <h3>Top users</h3>
                <div className="user-info">
                    <UserInfo name="Paulo Teixeira" login="paulo-hst" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                    <UserInfo name="Jake Kiszka" login="jake-kiszka" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                    <UserInfo name="Josh Kiszka" login="josh-kiszka" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                    <UserInfo name="Jake Kiszka" login="jake-kiszka" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                    <UserInfo name="Josh Kiszka" login="josh-kiszka" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                    <UserInfo name="Jake Kiszka" login="jake-kiszka" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                </div>
            </section>            
        </div>
        
      </div>
  )
}

export default Home