import axios from 'axios'

import React, { useEffect, useState } from 'react'
import './TopUsers.css'
import UserInfo from '../UserInfo/UserInfo';

const apiTop = axios.create({
    baseURL: 'https://commiters.now.sh/rank'
})

function TopUsers(props) {

    const [ topUserData, setTopUserData ] = useState([])

    useEffect(() => {
        getUserData()
    }, [props])

    async function getUserData(){
        
        // receber dados dos top users do github
        const { data: { users: { users } } } = await apiTop.get(`/brazil`)

        const arr = []

        users.map(item => {
            if(item.rank <= 12) 
            arr.push(item.login)
        })
        setTopUserData(arr)
    }

    function topGenerator(){  
        return topUserData.map(item => <UserInfo login={item} />)
    }

    return(
        <section id="users">
            <h3>Top Users on Brazil</h3>
            <div className="user-info">
                {topGenerator()}
            </div>
        </section> 
    )
}
    
export default TopUsers