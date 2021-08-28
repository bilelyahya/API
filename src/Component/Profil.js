import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profil = () => {
const [profil, setProfil] = useState()
const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
       const fetchprofil=async()=>{
     try {
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
        setProfil(res.data);
        setIsLoading(false);
     } 
     catch (error) {
         console.error(error)
     }
       };
       fetchprofil();
      
    }, [match]);
    if (isloading) {
        return  <Spinner animation="border" variant="danger" />
      
      }


    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <span>{profil.name[0]}</span>
  <Card.Body>
    <Card.Title> {profil.name} </Card.Title>
   <p> {profil.username} </p>
   <p> {profil.email} </p>
   <Link to="/" >
   <Button variant="primary">Go back</Button>
   </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default Profil
