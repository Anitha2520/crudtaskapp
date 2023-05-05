import  React, { useState } from 'react';
import Base from '../Base/Base';
import data from '../Data/data';
import AddStudents from './AddStudents';
import UpdateStudents from './UpdateStudents';
import Nopage from './Nopage';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Students({students,setStudents}){
    
    const history = useHistory();
    const deleteStudent = (studId) => {
        //console.log(studId)
        const remainingStudents = 
        students.filter((stud,idx)=> idx !== studId)
        setStudents(remainingStudents);

    }
    //console.log(students);
    return(
        <Base title={"List Users"}
        description={"This page contains all users data"}        
        >        

            <Container>
                <Row>
                    <Col>                    
                      <Breadcrumb>
                      <Breadcrumb.Item href="#" onClick={()=>history.push(`/`)}>DashBoard</Breadcrumb.Item>
                        
                        <Breadcrumb.Item href="#" active >Users</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" onClick={()=>history.push(`/create-user`)}>
                          Create User
                        </Breadcrumb.Item>
                        
                        
                    </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                {students.map((stud,idx)=>(
                    <Col>
                <Card  style={{ width: '15rem', backgroundColor:"lightgrey" }} key={idx}>
                
                <ListGroup >
                <ListGroup.Item style={{backgroundColor:"lightcyan"}}>{stud.name}</ListGroup.Item>
                <ListGroup.Item>{stud.batch}</ListGroup.Item>
                <ListGroup.Item>{stud.gender}</ListGroup.Item>
                <ListGroup.Item>{stud.qualification}</ListGroup.Item>
                <ListGroup.Item>
                <Button variant="secondary" style={{margin:"5px"}} onClick={()=>history.push(`/edit-user/${idx}`)}>Edit</Button>
                <Button variant="secondary" style={{margin:"5px"}} onClick={()=>deleteStudent(idx)}>Delete</Button>
                </ListGroup.Item>
                </ListGroup>
                </Card>
                </Col>
                ))}
          
            
            </Row>
            </Container>       
        </Base>
    )
}   
export default Students