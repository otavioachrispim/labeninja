import React from "react";
import axios from "axios";
import { Container, ContentImg, Content } from "./styles";
import { IoArrowBackSharp, IoCartOutline } from "react-icons/io5";
import women from "../../assets/women.jpg";

const headers = {
  headers: {
    Authorization: "8c24d255-953c-478d-abd9-919b05f53b21",
  },
};

export default class WorkCardDetail extends React.Component {
  state = {
    job: {},
  };

  componentDidMount() {
    this.getJob();
    console.log(this.props);
  }

  getJob = async () => {
    const url = `https://labeninjas.herokuapp.com/jobs/${this.props.jobId}`;

    try {
      const res = await axios.get(url, headers);
      this.setState({ job: res.data });
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  render() {
    let convertDate = new Date(this.state.job.dueDate);
    convertDate = convertDate.toLocaleDateString();

    return (
      <Container>
        <ContentImg>
          <img src={women} alt="" />
        </ContentImg>
        <Content>
          <h1>{this.state.job.title}</h1>
          <p>{this.state.job.description}</p>
          <strong>
            Forma(s) de pagamento: <b>{this.state.job.paymentMethods}</b>
          </strong>
          <p>
            Até <b>{convertDate}</b> por <b>R${this.state.job.price}</b>
          </p>
          <div>
            <button onClick={() => this.props.addToCart(this.state.job)}>
              <IoCartOutline />
              Adicionar ao carrinho
            </button>
            <button onClick={() => this.props.changePage("HireNinja")}>
              <IoArrowBackSharp />
              Voltar a lista
            </button>
          </div>
        </Content>
      </Container>
    );
  }
}
