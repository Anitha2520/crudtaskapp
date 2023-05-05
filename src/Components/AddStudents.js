import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Base from '../Base/Base';
import Students from './Students';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function AddStudents({students,setStudents}){
    const [name,setName] = useState("")
    const [batch,setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory();

    const createStudent = () =>{
        const newStudents = {
            name,batch,gender,qualification
        }
        console.log(newStudents)
        setStudents([...students, newStudents])
        history.push("/users")
    }

    return(
        <Base
        title={"Create User"}
        description={"Create new user"}
        >
            <Container>
                <Row>
                    <Col>                    
                      <Breadcrumb>
                        <Breadcrumb.Item href="#" onClick={()=>history.push(`/`)}>DashBoard</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" onClick={()=>history.push(`/users`)}>
                          List Users
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Create User</Breadcrumb.Item>
                    </Breadcrumb>
                    </Col>
                </Row>
      <Row>
        <Col>
            <Form>
            <Form.Group className="mb-3" controlId="formname">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name}  onChange={(e)=>setName(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formbatch">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" value={batch}  onChange={(e)=>setBatch(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formgender">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Enter Gender" value={gender}  onChange={(e)=>setGender(e.target.value)} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formquali">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="email" placeholder="Enter Qualification" value={qualification}  onChange={(e)=>setQualification(e.target.value)}/>
        
      </Form.Group>


      <Button variant="secondary" onClick={createStudent}>
        Create User
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
        {/* <div>
            
        <input placeholder="Enter name" type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
         <input placeholder="Enter batch" type="text" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
        <input placeholder="Enter gender" type="text" value={gender} onChange={(e)=>setGender(e.target.value)}/>
        <input placeholder="Enter qualification" type="text" value={qualification} onChange={(e)=>setQualification(e.target.value)}/>
        <button onClick={createStudent}>Add Students</button>
        </div> */}
        </Base>
    )
}
export default AddStudents

