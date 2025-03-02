import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header>
      {/* collapseOnSelect: will collapse after select */}
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
