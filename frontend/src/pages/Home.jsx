import React from "react";

import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import "./home.css";
export default function Home() {
  return (
    <div className="contenedor">
      <div className="header">
        <Container className="text-white">
          <h1>QR by Menu</h1>
          <p>
            Escanea un código QR y accede al menú del restaurante directamente
            desde tu Smartphone con QR Menu.
          </p>
        </Container>
      </div>

      <Container>
        <h3>
          QR Menu es una plataforma que permite a los usuarios escanear un
          código QR para acceder al menú de un restaurante. Olvídese de los
          menús físicos y las cartas engorrosas, con QR Menu, puede explorar
          todo lo que su restaurante favorito tiene para ofrecer directamente
          desde su teléfono móvil. Además, QR Menu es fácil de usar y
          completamente seguro, lo que lo convierte en la opción ideal para
          restaurantes y clientes que desean una experiencia sin contacto y sin
          problemas.
        </h3>
      </Container>
      <Container>
        <h2>Te Ofrecemos</h2>
        <p>
          <ListGroup>
            <ListGroup.Item>Gestiona vos mismo los productos, precios, etc</ListGroup.Item>
            <ListGroup.Item>Generación de código QR con tu logo</ListGroup.Item>
            <ListGroup.Item>Categorías y Productos Ilimitados con descripción y fotos</ListGroup.Item>
            <ListGroup.Item>Mantenimiento y adaptacion a tus necesidades</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </p>
      </Container>
    </div>
  );
}
