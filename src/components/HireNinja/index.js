import React from "react";
import axios from "axios";
import { Container, Content, FilterContainer, SearchBox } from "./styles";
import { IoSearchSharp } from "react-icons/io5";
import WorkCard from "../WorkCard";
import FilterBox from "../FilterBox";
import WorkCardDetail from "../WorkCardDetail";
import ShoppingCart from "../ShoppingCart";

const headers = {
  headers: {
    Authorization: "8c24d255-953c-478d-abd9-919b05f53b21",
  },
};

export default class HireNinja extends React.Component {
  state = {
    jobsList: [],
    searchByName: "",
    sortOrder: "",
    minPrice: "",
    maxPrice: "",
    jobDetails: {},
    detail: false,
    loading: false,
    shoppingCart: false,
    listCartShopping: [],
  };

  componentDidMount() {
    this.getAllJobs();
  }

  onChangeSearchName = (e) => {
    this.setState({ searchByName: e.target.value });
  };

  onChangeSortOrder = (e) => {
    this.setState({ sortOrder: e.target.value });
  };

  onChangeMinPrice = (e) => {
    this.setState({ minPrice: e.target.value });
  };

  onChangeMaxPrice = (e) => {
    this.setState({ maxPrice: e.target.value });
  };

  getAllJobs = async () => {
    const url = "https://labeninjas.herokuapp.com/jobs";

    try {
      const res = await axios.get(url, headers);
      this.setState({ jobsList: res.data.jobs });
    } catch (err) {
      alert(err.response);
    }
  };

  getJobById = async (jobId) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${jobId}`;

    try {
      const res = await axios.get(url, headers);
      this.setState({ jobDetails: res.data });
    } catch (err) {
      alert(err.response);
    }
  };

  handleClickDetail = (id) => {
    this.setState({ detail: !this.state.detail });
    this.getJobById(id);
  };

  handleClickBackHire = () => {
    this.setState({ detail: !this.state.detail });
    this.getAllJobs();
  };

  handleClickAddToCart = (job) => {
    const cloneListCartShopping = [...this.state.listCartShopping];

    const jobOnList = cloneListCartShopping.find((item) => {
      return item.id === job.id;
    });

    if (!jobOnList) {
      const newJobOnCartShopping = {
        ...job,
      };
      this.setState({
        listCartShopping: [...cloneListCartShopping, newJobOnCartShopping],
      });
    } else {
      alert("Produto já foi adicionado ao carrinho!");
      this.setState({ listCartShopping: cloneListCartShopping });
    }
  };

  render() {
    const jobsListPosted = this.state.jobsList
      .filter((job) => {
        return job.title.toLowerCase().includes(this.state.searchByName);
      })
      .filter((job) => {
        return this.state.minPrice === "" || job.price >= this.state.minPrice;
      })
      .filter((job) => {
        return this.state.maxPrice === "" || job.price >= this.state.maxPrice;
      })
      .sort((a, b) => {
        switch (this.state.sortOrder) {
          case "title":
            return a.title.localeCompare(b.title);
          case "higher":
            return a.price - b.price;
          case "lower":
            return b.price - a.price;
          case "dueDate":
            return a.dueDate - b.dueDate;
          default:
            return a.title.localeCompare(b.title);
        }
      })
      .map((job) => {
        return (
          <WorkCard
            key={job.id}
            title={job.title}
            price={job.price}
            description={job.description}
            paymentMethods={job.paymentMethods}
            dueDate={job.dueDate}
            handleClickDetail={() => this.handleClickDetail(job.id)}
            // handleClickAddToCart={() => this.handleClickAddToCart(job)}
          />
        );
      });

    // const total = this.state.listCartShopping.reduce((sumTotal, job) => {
    //   return sumTotal + job.price * job.amount;
    // });

    // const shoppingCartDetail = this.state.listCartShopping.map((job) => {
    //   return <ShoppingCart title={job.title} price={job.price} />;
    // });

    return (
      <Container>
        <FilterContainer>
          <SearchBox>
            <IoSearchSharp />
            <input
              type="text"
              value={this.state.searchByName}
              onChange={this.onChangeSearchName}
            />
          </SearchBox>
          <FilterBox
            sortOrder={this.state.sortOrder}
            onChangeSortOrder={this.onChangeSortOrder}
            minPrice={this.state.minPrice}
            onChangeMinPrice={this.onChangeMinPrice}
            maxPrice={this.state.maxPrice}
            onChangeMaxPrice={this.onChangeMaxPrice}
          />
        </FilterContainer>
        <Content>
          {this.state.detail === false ? (
            jobsListPosted
          ) : (
            <WorkCardDetail
              loading={this.state.loading}
              title={this.state.jobDetails.title}
              price={this.state.jobDetails.price}
              description={this.state.jobDetails.description}
              paymentMethods={this.state.jobDetails.paymentMethods}
              dueDate={this.state.jobDetails.dueDate}
              handleClickBackHire={this.handleClickBackHire}
              handleClickAddToCart={this.handleClickOpenCart}
            />
          )}
        </Content>
      </Container>
    );
  }
}
