import React from 'react'
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Base = ({title,description, children}) => {
    const history = useHistory()
    return(
      <div className=" text-white" style={{height:"100%",backgroundColor:"lightblue",padding:"20px"}}>

      
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>User Details</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={()=>history.push("/")}>Dashboard</Nav.Link>
            <Nav.Link href="#"  onClick={()=>history.push("/users")}>List Users</Nav.Link>
            <Nav.Link href="#" onClick={()=>history.push("/create-user")}>Create User</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <header>
                <h1  className='heading'>{title}</h1>
            </header>
            <main className='main-segment'>
                <h2>{description}</h2>
                <div>
                    {children}  
                </div>
            </main>

        </div>
    )
}
export default Base