import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import Usercard from "./Usercard"

const Userlist = () => {
const [users, setUsers] = useState([])  
const [loading, setLoading] = useState(true)  
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json => console.log(json))
   .then((data)=>{
    setUsers(data);
    setLoading(false);
   }
   )
   .catch(
       (err=>console.error(err))
   )
}, []);
if (loading) {
  return  <Spinner animation="border" variant="danger" />

}
    return (
        <div
        style={{ display="flex", flexWrap="wrap", justifyContent="center"}}
        >
            {
                users.map((user)=><Usercard user={user} />

                )
            }
        </div>
    )
}

export default Userlist
