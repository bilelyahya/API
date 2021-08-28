import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Usercard from './Usercard'

const UserListAxios = () => {
    const [users, setUsers] = useState([])  
const [isloading, setIsLoading] = useState(true)
    useEffect(() => {
    //    axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>res.data)
    //     .then((el)=>{setUsers(el);
    //         setIsLoading(false);}
    //     )
const fetchUsers=async ()=>{
    try {
        const res=await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data);
        setIsLoading(false);
    
    } 
    catch (error) {
        console.error(error)
    }
};
fetchUsers();
    }, []);
    if (isloading) {
        return  <Spinner animation="border" variant="danger" />
      
      }
    return (
        <div>
             <div
        style={{ display="flex", flexWrap="wrap", justifyContent="center"}}
        >
            {
                users.map((user)=><Usercard user={user} />

                )
            }
        </div>
        </div>
    )
}

export default UserListAxios
