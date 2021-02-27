import React, { useEffect, useState } from 'react'
import './User.css'
import api from '../../services/api'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

function User(props) {

    const githubStatsAPI = 'https://github-readme-stats.vercel.app'
    const githubRepoAPI = 'https://github.com'

    const ghStats = username => {
        return `${githubStatsAPI}/api?username=${username}&count_private=true&theme=dark&show_icons=true`
    }
    const ghLangs = username => {
        return `${githubStatsAPI}/api/top-langs/?username=${username}&theme=dark`
    }

    const [ repoData, setRepoData ] = useState([])


    useEffect(() => {
        getRepoData(props.user)
    }, [props.user])

    async function getRepoData(u){
        const { data: repository } = await api.get(`/users/${u}/repos`)
        const repoArr = []
        repository.map(item => repoArr.push(item.name))
        setRepoData(repoArr)
    }

    function returnRepoData(){        
        return (
            repoData.map(
                item =>
                <a href={`${githubRepoAPI}/${props.user}/${item}`} key={item} target="_blank" rel="noreferrer">
                <img 
                    src={`${githubStatsAPI}/api/pin/?username=${props.user}&repo=${item}&theme=dark&show_icons=true`} 
                    alt={item}
                    className="repos-images"
                /></a>
            )
        )
    }

  return (
        <div>
            <div className="wrapper-user">
                <section id="users">
                    <h3>ALTERAR!!!</h3>                   

                    <div className="github-stats">
                        <h4><ArrowDropDownCircleIcon className="arrow-icon"/> GitHub stats</h4>
                        <div className="stats-wrapper">
                            <img className="stats-stats" src={ghStats(props.user)} alt='Stats' />
                            <img className="stats-langs" src={ghLangs(props.user)} alt='Langs' />
                        </div>
                    </div>

                    <div className="github-repos">
                        <h4><ArrowDropDownCircleIcon className="arrow-icon"/> Repos</h4>
                        <h5>{repoData.length} Repositories</h5>
                        <div className="repos-wrapper">
                            {returnRepoData()}
                        </div>                      
                    </div>

                </section>            
            </div>
      </div>
  )
}

export default User