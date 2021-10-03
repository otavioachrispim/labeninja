import React from "react";
import Header from "./components/Header";
import { Container, Content, FooterContent, Categories } from "./styles";
import workman from "./assets/workman.jpg";
import {
  IoLogoReact,
  IoLogoNodejs,
  IoLogoTux,
  IoLogoDribbble,
  IoPhonePortraitOutline,
  IoServerOutline,
} from "react-icons/io5";
import BeNinja from "./components/BeNinja";
import HireNinja from "./components/HireNinja";
import ShoppingCart from "./components/ShoppingCart";
import WorkCardDetail from "./components/WorkCardDetail";

export default class App extends React.Component {
  state = {
    section: "home",
    jobDetail: "",
    cartList: [],
  };

  handleClickChangePage = (pageName) => {
    this.setState({ section: pageName });
  };

  handleClickDetailPage = (jobId) => {
    this.setState({ section: "WorkCardDetail", jobDetail: jobId });
  };

  handleClickAddToCart = (job) => {
    const newCartList = [...this.state.cartList, job];
    this.setState({ cartList: newCartList });
    alert(`O serviço ${job.title} foi adicionado ao carrinho`);
  };

  handleClickRemoveFromCart = (id) => {
    const canDelete = window.confirm(
      "Tem certeza que deseja remover este produto?"
    );
    if (canDelete) {
      const newCartList = this.state.cartList.filter((cartItem) => {
        return cartItem.id !== id;
      });
      this.setState({ cartList: newCartList });
    }
  };

  handleClickClearCart = () => {
    this.setState({ cartList: [] });
    alert("Obrigada por comprar com a gente!");
  };

  renderPages = () => {
    switch (this.state.section) {
      case "home":
        return (
          <>
            <Content>
              <div>
                <h1>
                  Profissionais capacitados em Tecnologia e clientes se
                  conectando de forma rápida e simples.{" "}
                </h1>
                <p>
                  Na nossa plataforma você encontra todos os serviços de
                  tecnologia!
                </p>
              </div>
              <img src={workman} alt="" />
            </Content>
            <FooterContent>
              <h1>Serviços TI:</h1>
              <Categories>
                <div>
                  <IoLogoReact />
                  <strong>Front-end</strong>
                </div>
                <div>
                  <IoLogoNodejs />
                  <strong>Back-end</strong>
                </div>
                <div>
                  <IoLogoTux />
                  <strong>Sistemas</strong>
                </div>
                <div>
                  <IoLogoDribbble />
                  <strong>Design</strong>
                </div>
                <div>
                  <IoPhonePortraitOutline />
                  <strong>Mobile</strong>
                </div>
                <div>
                  <IoServerOutline />
                  <strong>Dados</strong>
                </div>
              </Categories>
            </FooterContent>
          </>
        );
      case "BeNinja":
        return <BeNinja />;
      case "HireNinja":
        return (
          <HireNinja
            goToDetail={this.handleClickDetailPage}
            addToCart={this.handleClickAddToCart}
          />
        );
      case "ShoppingCart":
        return (
          <ShoppingCart
            clearCart={this.handleClickClearCart}
            removeFromCart={this.handleClickRemoveFromCart}
            cartList={this.state.cartList}
          />
        );
      case "WorkCardDetail":
        return (
          <WorkCardDetail
            changePage={this.handleClickChangePage}
            addToCart={this.handleClickAddToCart}
            jobId={this.state.jobDetail}
          />
        );
      default:
        return <h2>Oops! Algo deu errado!</h2>;
    }
  };

  render() {
    return (
      <Container>
        <Header changePage={this.handleClickChangePage} />
        {this.renderPages()}
      </Container>
    );
  }
}
