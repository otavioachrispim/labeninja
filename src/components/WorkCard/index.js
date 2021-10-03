import React from "react";
import { Container } from "./styles";
import { IoCartOutline } from "react-icons/io5";

const WorkCard = (props) => {
  let convertDate = new Date(props.job.dueDate);
  convertDate = convertDate.toLocaleDateString();

  return (
    <Container>
      <h1>{props.job.title}</h1>
      <strong>
        Até <b>{convertDate}</b> - <b>R${props.job.price}</b>{" "}
      </strong>
      <div>
        <button onClick={() => props.goToDetail(props.job.id)}>
          Ver detalhes
        </button>
        <button onClick={() => props.addToCart(props.job)}>
          <IoCartOutline />
        </button>
      </div>
    </Container>
  );
};

export default WorkCard;
