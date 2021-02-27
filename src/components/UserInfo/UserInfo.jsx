import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserInfo.css'
import api from '../../services/api'

function UserInfo(props) {
    
    const [ userData, setUserData ] = useState({  })

    useEffect(() => {
        getUserData(props.login)
    }, [props.login])

    async function getUserData(u){
        const { data: { avatar_url, bio, login, name } } = await api.get(`/users/${u}`)

        let userData = {
            user: login,
            name: name, 
            description: bio, 
            avatar_url: avatar_url
        }
        setUserData(userData)
    }

    return(
        <div className="top-users">            
            <Link to={`/${userData.user}/` } style={{ textDecoration: 'none', color: '#6C80EA' }}>
                <img className="image-top-user" src={userData.avatar_url} alt="" />
                    <div className="description">
                        <span>
                            <p className="name">{userData.name}</p>
                            <p className="account">@{userData.user}</p>
                        </span>
                        <p className="text">{userData.description}</p>
                    </div>
            </Link>
        </div>        
    )
}

export default UserInfo