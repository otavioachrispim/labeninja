import React from "react";
import { Container, HeaderContent, ButtonCart } from "./styles";
import { IoCartOutline } from "react-icons/io5";

export default function Header(props) {
  return (
    <Container>
      <HeaderContent>
        <a href="/">LabeNinjas</a>
        <div>
          <button onClick={props.handleClickBeNinja}>Seja ninja</button>
          <button onClick={props.handleClickHireNinja}>Contratar ninja</button>
        </div>
        <ButtonCart>
          <button>
            <IoCartOutline />
          </button>
        </ButtonCart>
      </HeaderContent>
    </Container>
  );
}
