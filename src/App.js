import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HeaderComponent from './components/Header.component';
import FooterComponent from './components/Footer.component';
import Studentlistcomponent from './components/Student-list.component';
import CreateStudentComponent from './components/Create-Student.component';
import EditStudentComponent from './components/Edit-Student.component';
import StudentInfoComponent from './components/Student-info.component';
function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderComponent />
        <nav className="navbar navbar-expand ">

          <ul className="navbar-nav">

            <li className='nav nav-item'><Link className="nav-link" to={"/Create-Student"}>Create Student</Link></li>
            <li className='nav nav-item'><Link className="nav-link" to={"/Student-list"}>Student List</Link></li>
          </ul>


        </nav>
        <Switch>
          <Route exact path="/" component={CreateStudentComponent} />
          <Route path="/Create-Student" component={CreateStudentComponent} />
          <Route path="/Edit-Student/:id" component={EditStudentComponent} />
          <Route path="/Student-list" component={Studentlistcomponent} />
          <Route path="/Student-info/:id" component={StudentInfoComponent} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;