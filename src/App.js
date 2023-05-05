import logo from './logo.svg';
import Students from './Components/Students.js';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
import Nopage from './Components/Nopage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import data from './Data/data';
import { useState } from 'react';
import DashBoard from './Components/Dashboard';



function App() {
  const [students, setStudents] = useState(data);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <DashBoard/>
        </Route>

        <Route path="/users">
        <Students 
          students = {students}
          setStudents = {setStudents}
          />
        </Route>

        <Route path="/create-user">
          <AddStudents
          students = {students}
          setStudents={setStudents}
          />
        </Route>

        <Route path="/edit-user/:id">
          <UpdateStudents 
          students = {students}
          setStudents={setStudents}
          />
        </Route>

        <Route path="**">
          <Nopage/>
        </Route>
        
      </Switch>

    </div>
  );
}

export default App;
