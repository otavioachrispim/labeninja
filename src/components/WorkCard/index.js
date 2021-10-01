import React from "react";
import { Container } from "./styles";
import { IoCartOutline } from "react-icons/io5";

export default function WorkCard(props) {
  let convertDate = new Date(props.dueDate);
  convertDate = convertDate.toLocaleDateString();

  return (
    <Container>
      <h1>{props.title}</h1>
      <strong>
        Até <b>{convertDate}</b> - <b>R${props.price}</b>{" "}
      </strong>
      <div>
        <button onClick={props.handleClickDetail}>Ver detalhes</button>
        <button onClick={props.handleClickCart}>
          <IoCartOutline />
        </button>
      </div>
    </Container>
  );
}
