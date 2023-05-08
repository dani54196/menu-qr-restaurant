import React from "react";
import axios from "axios";

function saludo() {
  // get restaurant data from API
  axios.get 
  

  return (
    <div>
      <h2>name</h2>
      <p>description</p>
      <p>location</p>
    </div>
  );
}

function Restaurant() {
  return (
    <div>
      <h3>Restaurantes</h3>
      {saludo()}
      {saludo()}
    </div>
  );
}

export default Restaurant;
