import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base';

function Nopage(){
    const history = useHistory();
    return (
        <Base
        title={"404 page not found!"}
        description = {"Page not found. please click below button"}
        >
            <Button variant='secondary' onClick={()=>history.push("/")} className=''>click here</Button>
        </Base>
    )
}
export default Nopage