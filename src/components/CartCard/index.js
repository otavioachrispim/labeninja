import React from "react";
import { Container } from "./styles";
import { IoTrashOutline } from "react-icons/io5";

const CartCard = (props) => {
  return (
    <Container>
      <h1>{props.title}</h1>
      <h1>R${props.price.toFixed(2)}</h1>
      <button onClick={() => props.removeFromCart(props.id)}>
        <IoTrashOutline />
      </button>
    </Container>
  );
};

export default CartCard;
