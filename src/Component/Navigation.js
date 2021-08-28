import React from 'react'
import {Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
  
    <Navbar.Brand href="#">
        <Link to="/">Home</Link>
    </Navbar.Brand>
  
</Navbar>
        </div>
    )
}

export default Navigation
