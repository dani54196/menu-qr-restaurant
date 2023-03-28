import React, { useState } from "react";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/icons/qr-menu.png";

// const [isLoggedIn, setIsLoggedIn] = useState(0);
let isLoggedIn = false;

function LogIn() {
  return (
    <NavDropdown title="Ingresar" id="navbarScrollingDropdown">
      <NavDropdown.Item as={Link} to="login">
        Iniciar Secion
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="signup">
        Registrese
      </NavDropdown.Item>
    </NavDropdown>
  );
}

function AdminPanel() {
  return (
    <NavDropdown title="Usuario" id="navbarScrollingDropdown">
      <NavDropdown.Item as={Link} to="mydata">
        Mis Datos
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="myrestaurants">
        Mis Restaurantes
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={Link} to="logout">
        Salir
      </NavDropdown.Item>
    </NavDropdown>
  );
}

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
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/items">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/restaurants">
              Restaurants
            </Nav.Link>
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
          </Nav>
          {isLoggedIn ? AdminPanel() : LogIn()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
