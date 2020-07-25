import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Bar from './components/Navbar';
import Jumbo from './components/Jubmo';
import Carouseal from './components/Carouseal';
import Content from './components/Content';

import Contact from './components/Contact';
import Donate from  './components/Donator';


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
          <Contact />

        </Switch>
      </Container>
    </Router>
  );
}

export default App;
