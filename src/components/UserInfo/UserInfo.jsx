import React from 'react'
import './UserInfo.css'

function UserInfo(props) {
    return(
        <div className="top-users">
        <img src="http://placehold.it/120x120" alt="" />
            <div className="description">
                <span>
                    <p className="name">{props.name}</p>
                    <p className="account">@{props.login}</p>
                </span>
                <p className="text">{props.description}</p>
            </div>
        </div>
    )
}

export default UserInfo