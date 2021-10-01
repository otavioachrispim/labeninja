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

export default class App extends React.Component {
  state = {
    section: "home",
  };

  handleClickBeNinjaPage = () => {
    this.setState({ section: "BeNinja" });
  };

  handleClickHireNinjaPage = () => {
    this.setState({ section: "HireNinja" });
  };

  handleClickShoppingCartPage = () => {
    this.setState({ section: "ShoppingCart" });
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
        return <HireNinja />;
      case "ShoppingCart":
        return (
          <>
            <ShoppingCart title="Web design" price="R$30,00" total="R$30,00" />
          </>
        );
      default:
        return <h2>Oops! Algo deu errado!</h2>;
    }
  };

  render() {
    return (
      <Container>
        <Header
          handleClickBeNinja={this.handleClickBeNinjaPage}
          handleClickHireNinja={this.handleClickHireNinjaPage}
          handleClickShoppingCart={this.handleClickShoppingCartPage}
        />
        {this.renderPages()}
      </Container>
    );
  }
}
