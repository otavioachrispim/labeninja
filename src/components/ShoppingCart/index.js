import React from "react";
import { Container, ContentJob, ContentPayment } from "./styles";
import { IoTrashOutline } from "react-icons/io5";

export default function ShoppingCart(props) {
  return (
    <Container>
      <ContentJob>
        <h1>{props.title}</h1>
        <p>{props.price}</p>
        <button onClick={props.handleClickDelete}>
          <IoTrashOutline />
        </button>
      </ContentJob>
      <ContentPayment>
        <strong>Total: {props.total} </strong>
        <button>Contratar serviços</button>
      </ContentPayment>
    </Container>
  );
}
