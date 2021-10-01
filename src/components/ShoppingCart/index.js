import React from "react";
import { Container } from "./styles";
import { IoArrowBackSharp, IoCartOutline } from "react-icons/io5";

export default function ShoppingCart(props) {
  return (
    <Container>
      <div>
        <h1>{props.title}</h1>
        <p>{props.price}</p>
        <button onClick={props.handleClickDelete}>
          <IoCartOutline />
        </button>
      </div>
      <strong>Total: {props.total} </strong>
      <button>Contratar serviços</button>
    </Container>
  );
}
