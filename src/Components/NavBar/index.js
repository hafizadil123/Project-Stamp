import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

const NavBar = () => (
  <Navbar style={{ borderBottom: '1px solid grey' }}>
    <Container>
      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Stamp It</span>
        <Nav>
          <Nav.Link href="">Tools</Nav.Link>
          <Nav.Link href="">Add Token</Nav.Link>
          <NavDropdown title="Credits">
            <NavDropdown.Item href="">Languages</NavDropdown.Item>
            <NavDropdown.Item href="">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </Container>
  </Navbar>
)

export default NavBar;
