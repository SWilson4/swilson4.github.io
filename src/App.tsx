import React from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


function App() {
  return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="">Home</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="">Shampoo</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Conditioner</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Gel</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export default App;
