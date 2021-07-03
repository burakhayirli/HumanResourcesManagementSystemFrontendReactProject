import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import './App.css';
import Navi from './layouts/Navi';
import { BrowserRouter  as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UserPage';
import HomePage from './layouts/HomePage';
import CandidateList from './pages/CandidateList';
import EmployeeList from './pages/EmployeeList';
import EmployerList from './pages/EmployerList';
import AdvertisementListByJobName from './pages/AdvertisementListByJobName';
import AdvertisementList from './pages/AdvertisementList';

function App() {

  const isLoggedIn = false;
  return (
    <Container className="main">
      <div className="App">
        <Router>
          <Navi />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {!isLoggedIn && <Route path="/login" component={Login} />}
            <Route path="/register" component={Register} />
            <Route path="/user/:email" component={UserPage} />
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/employees" component={EmployeeList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route path="/advertisements/:jobname" component={AdvertisementListByJobName} />
            <Redirect to="/" />
          </Switch>
        </Router>
        </div>
    </Container>
    // <div className="App">
    //   <Navi />
    //   <Container className="main">
    //     <Dashboard />
    //   </Container>
    // </div>


  );
}

export default App;
