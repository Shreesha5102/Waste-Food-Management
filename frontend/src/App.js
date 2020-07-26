import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Login from './components/Login';
import Bar from './components/Navbar';
import Jumbo from './components/Jubmo';
import Carouseal from './components/Carouseal';
import Content from './components/Content';

import Contact from './components/Contact';
import Donate from  './components/Donator';
import Reciever from './components/Reciever';
import Order from './components/orders';


function App() {  
  return (
    <Router>
      <Container fluid>
        
        <Bar />
        <Jumbo />
        <Carouseal />
        <Switch>
          <Route path="/" exact component= { Content } />
          <Route path="/donate" exact component= { Donate } />
          <Route path="/recieve" exact component= { Reciever } />
          <Route path="/admin" exact component= { Login } />
          <Route path="/admin/orders" exact component= { Order } />
        </Switch>
        <Contact />
      </Container>
    </Router>
  );
}

export default App;
