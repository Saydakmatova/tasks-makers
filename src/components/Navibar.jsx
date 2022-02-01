import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          Hello React!
        </Link>
        <Link className="navbar-brand" to="/homeContact">
          Contacts
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/counter">
              Counter
            </Link>
            <Link className="nav-link" to="/receipts">
              Receipts
            </Link>
            <Link className="nav-link" to="/form">
              Form
            </Link>
            <Link className="nav-link" to="/addContact">
              ADD CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
