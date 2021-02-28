import './Home.css'

import SearchInput from '../../components/SearchInput/SearchInput';
import octocat from '../../assets/octocat.png'
// import TopUsers from '../../components/TopUsers/TopUsers';


// https://commiters.now.sh/rank/brazil

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
                    {/* <TopUsers/> */}
                </div>
            </section>            
        </div>
        
      </div>
  )
}

export default Home