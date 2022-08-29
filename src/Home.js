import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <Button color="link"><Link to="/groups">Manage Travel</Link></Button>
      </Container>
      <div class="bg-light mb-4 py-3 py-sm-5"></div>
    </div>    
  );
}

export default Home;