import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Production from './components/pages/Production';
import Membership from './components/pages/Membership';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './components/dashboard/Dashboard';
import Payment from './components/dashboard/Payment';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/production' component={Production} />
        <Route path='/membership' component={Membership} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/payment' component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;
