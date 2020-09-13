import React from 'react';
import { BrowserRouter as Router, HashRouter,Switch,Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import Articles from '../components/pages/Articles';
import Projects from '../components/pages/Projects';
import PCBQA from '../components/pages/PCBQA';
import Admin from '../components/pages/Admin';
import LoginAdmin from '../components/pages/loginAdmin'
const Routes = () => {
    return (
        <HashRouter basename='/'>
            <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/Articles' component={Articles}/>
                <Route exact path='/Projects' component={Projects}/>
                <Route exact path='/PCBQA' component={PCBQA}/>
            </Switch>
            </div>
        </HashRouter>
    )
}

export default Routes;