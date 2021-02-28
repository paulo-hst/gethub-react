import React from 'react'
import './Home.css'
import SearchInput from '../../components/SearchInput/SearchInput';
import octocat from '../../assets/octocat.png'
import TopUsers from '../../components/TopUsers/TopUsers';

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
            <TopUsers/>      
        </div>
        
      </div>
  )
}

export default Home