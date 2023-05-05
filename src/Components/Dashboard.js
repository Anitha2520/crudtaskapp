import React  from "react";
import Base from '../Base/Base';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from "react-router-dom";

const DashBoard = ()=>{
    

const history = useHistory();
    return (
        <Base
        title={"DashBoard"}
        description={"Welcome ro Dashbaord "}
        >
            <Container>
                <Row>
                    <Col>                    
                      <Breadcrumb>
                        <Breadcrumb.Item active>Dashbaord</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" onClick={()=>history.push(`/users`)}>List Users</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" onClick={()=>history.push(`/create-user`)}>
                          Create User
                        </Breadcrumb.Item>
                        
                    </Breadcrumb>
                    </Col>
                    <Row>
                        <Col>
                        <p>Welcome to Dashbaord</p>
                        </Col>
                    </Row>
                </Row>
                </Container>

        </Base>
        
    )
}

export default DashBoard