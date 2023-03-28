import React from "react";

function saludo() {
  return (
    <div>
      <h2>Nombre del Restaurante</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

function Restaurant() {
  return (
    <div>
      Restaurantes
      {saludo()}
      {saludo()}
    </div>
  );
}

export default Restaurant;
