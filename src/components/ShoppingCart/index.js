import React from "react";
import { Container, ContentPayment } from "./styles";
import CartCard from "../CartCard";
import donthave from "../../assets/donthave.jpg";

export default class ShoppingCart extends React.Component {
  render() {
    const cartComponents = this.props.cartList.map((item) => {
      return (
        <CartCard
          key={item.id}
          title={item.title}
          price={item.price}
          id={item.id}
          removeFromCart={this.props.removeFromCart}
        />
      );
    });

    let totalPrice = 0;

    this.props.cartList.forEach((item) => {
      totalPrice += item.price;
    });

    return (
      <Container>
        {cartComponents.length > 0 ? (
          <>
            {cartComponents}
            <ContentPayment>
              <strong>Total: R${totalPrice.toFixed(2)} </strong>
              <button onClick={() => this.props.clearCart()}>
                Contratar serviços
              </button>
            </ContentPayment>
          </>
        ) : (
          <>
            <h1>Carrinho vazio</h1>
            <img src={donthave} alt="" />
          </>
        )}
      </Container>
    );
  }
}
