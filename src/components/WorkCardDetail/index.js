import React from "react";
import { Container } from "./styles";
import { IoArrowBackSharp, IoCartOutline } from "react-icons/io5";

export default function WorkCardDetail(props) {
  let convertDate = new Date(props.dueDate);
  convertDate = convertDate.toLocaleDateString();

  return (
    <Container>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <strong>
        Forma(s) de pagamento: <b>{props.paymentMethods}</b>
      </strong>
      <p>
        Até <b>{convertDate}</b> por <b>R${props.price}</b>
      </p>
      <div>
        <button onClick={props.handleClickAddToCart}>
          <IoCartOutline />
          Adicionar ao carrinho
        </button>
        <button onClick={props.handleClickBackHire}>
          <IoArrowBackSharp />
          Voltar para sala
        </button>
      </div>
    </Container>
  );
}
