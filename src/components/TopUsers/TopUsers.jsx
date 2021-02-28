// // import axios from 'axios'

// // import React, { useEffect, useState } from 'react'
// import './TopUsers.css'
// import UserInfo from '../UserInfo/UserInfo';

// // const apiTop = axios.create({
// //     baseURL: 'https://commiters.now.sh/rank'
// // })


// function TopUsers(props) {

//     // const [ topUserData, setTopUserData ] = useState({ })

//     // useEffect(() => {
//     //     getUserData()
//     // }, [props])

//     // async function getUserData(){
        
//     //     const { data: { users: { users } } } = await apiTop.get(`/brazil`)

//     //     console.log(users)
//     //     // const newArr = []

//     //     // users.map(item => {
//     //     //     if(item.rank <= 12) newArr.push(item)
//     //     // })

//         // setTopUserData(newArr)
//     // }

//     // // console.log(topUserData[0])

//     return(
//         <section id="users">
//             <h3>Top users</h3>
//             <div className="user-info">
//                 <TopUsers/>
//                 <UserInfo 
//                     name="sadsdf" 
//                     login="asd" 
//                     description="Lorem, ipsum dolor sit amet consectetur adipisicing elit." 
//                 />
//             </div>
//         </section> 
//   )
// }

// export default TopUsers