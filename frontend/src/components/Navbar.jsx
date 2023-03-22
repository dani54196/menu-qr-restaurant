import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../assets/img/icons/qr-menu.png";

function NavScrollExample() {
  return (
    <Navbar bg="black" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Restaurants
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Comidas
            </Nav.Link>
            <NavDropdown title="Log In" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Iniciar Secion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Registrese</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Salir</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Usuario
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
            bg="transparent"
              type="search"
              placeholder="comida o restaurante"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
