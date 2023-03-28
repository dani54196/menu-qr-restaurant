import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <br />
      <h2>Contacto</h2>
      <p></p>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            name="email"
          />
          <Form.Text className="text-muted">
            No compartiremos tu email con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Numero de telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su numero de Telefono"
            name="phone"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="Ingrese su mensaje"
            name="message"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Deseo subscribirme" />
        </Form.Group>

        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Deseo que me contacte por ..."
        >
          <Form.Select
            aria-label="Floating label select example"
            name="contactme"
          >
            <option value="whatsapp">Whatsapp</option>
            <option value="email">Email</option>
          </Form.Select>
        </FloatingLabel>
        <br />
        <Button variant="primary" type="submit" value="Send">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
