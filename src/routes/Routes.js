import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import Articles from '../components/pages/Articles';
import Projects from '../components/pages/Projects';
import Admin from '../components/pages/Admin';
import LoginAdmin from '../components/pages/loginAdmin'
const Routes = () => {
    return (
        <Router>
            <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/Articles' component={Articles}/>
                <Route exact path='/Projects' component={Projects}/>
            </Switch>
            </div>
        </Router>
    )
}

export default Routes;