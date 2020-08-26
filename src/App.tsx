import React from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import InstagramEmbed from 'react-instagram-embed'

function App() {
  return (
  <>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="">Naked Curls</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="">Home</Nav.Link>
      <Nav.Link href="">Blog</Nav.Link>
      <Nav.Link href="">Wiki</Nav.Link>
      <Nav.Link href="">Story</Nav.Link>
      <Nav.Link href="">Contact</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="">Shampoo</NavDropdown.Item>
        <NavDropdown.Item href="">Conditioner</NavDropdown.Item>
        <NavDropdown.Item href="">Gel</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<CardDeck>
<Card>
  <Card.Body>
<InstagramEmbed
  url='https://instagr.am/p/CATajz-F5YN/'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
<InstagramEmbed
  url='https://www.instagr.am/p/CEKgP76j8HA/'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
  </Card.Body>
</Card>
<Card>
  <Card.Body>
<InstagramEmbed
  url='https://www.instagram.com/p/CCguLi7piw7/'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
  </Card.Body>
</Card>
</CardDeck>
</>
  );
}

export default App;
