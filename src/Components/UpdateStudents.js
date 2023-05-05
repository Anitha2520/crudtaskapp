import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Base from '../Base/Base';
import { useHistory } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function UpdateStudents({students,setStudents,editIdx}){
     
    const {id} = useParams();  
    const editStudent = students[id]   
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory()

     useEffect(()=>{        
            setName(editStudent.name)
            setBatch(editStudent.batch)
            setGender(editStudent.gender)
            setQualification(editStudent.qualification)
    
      }, [editStudent])


    function updateStudent(){          
          const updatedObject = {
              name : name,
              batch : batch,
              qualification : qualification,
              gender : gender
         }
         console.log(updatedObject)
         students[id] = updatedObject
         setStudents([...students]) 
         history.push("/users"); 
    }
    
    return(
        <Base
        title={"Edit User"}
    
        >
            <Container>
                <Row>
                    <Col>                    
                      <Breadcrumb>
                      <Breadcrumb.Item href="#" onClick={()=>history.push(`/`)}>DashBoard</Breadcrumb.Item>
                        
                        <Breadcrumb.Item href="#" onClick={()=>history.push(`/users`)}>List Users</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" onClick={()=>history.push(`/create-user`)}>
                          Create User
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Edit User</Breadcrumb.Item>
                        
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


                <Button variant="secondary" onClick={updateStudent}>
                Edit USer
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
        <button onClick={updateStudent}>Update Students</button>
        </div> */}
        </Base>
    )
}
export default UpdateStudents