import React from "react";
import { Container, HeaderContent, ButtonCart } from "./styles";
import { IoCartOutline } from "react-icons/io5";

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <HeaderContent>
          <a href="/">LabeNinjas</a>
          <div>
            <button onClick={() => this.props.changePage("BeNinja")}>
              Seja ninja
            </button>
            <button onClick={() => this.props.changePage("HireNinja")}>
              Contratar ninja
            </button>
          </div>
          <ButtonCart>
            <button onClick={() => this.props.changePage("ShoppingCart")}>
              <IoCartOutline />
              <strong>Ver carrinho</strong>
            </button>
          </ButtonCart>
        </HeaderContent>
      </Container>
    );
  }
}
