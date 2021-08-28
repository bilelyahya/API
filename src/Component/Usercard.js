import React from 'react'
import { Card , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Usercard = ({user}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <span>{user.name[0]}</span>
  <Card.Body>
    <Card.Title> {user.name} </Card.Title>
   <p> {user.username} </p>
   <p> {user.email} </p>
   <Link to={`/Profil/${user.id}`} >
   <Button variant="primary">Go somewhere</Button>
   </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default Usercard
