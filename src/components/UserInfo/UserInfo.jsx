import React, { useState } from 'react'
import './UserInfo.css'
import api from '../../services/api'

function UserInfo(props) {
    
    const [ name, setName ] = useState('Paulo')
    const [ user, setUser ] = useState('paulo-hst')
    const [ bio, setBio ] = useState('lorem Asd fuisndj fiusdf isud gf')

    // async function getRepoData(u){
    //     const {data} = await api.get(`/users/${u}/`)
    //     console.log(data)
    // }

    // getRepoData(user)

    return(
        <div className="top-users">
        <img className="image-top-user" src="http://placehold.it/120x120" alt="" />
            <div className="description">
                <span>
                    <p className="name">{name}</p>
                    <p className="account">@{user}</p>
                </span>
                <p className="text">{bio}</p>
            </div>
        </div>
    )
}

export default UserInfo