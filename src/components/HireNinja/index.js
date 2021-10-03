import React from "react";
import axios from "axios";
import { Container, Content, FilterContainer, SearchBox } from "./styles";
import { IoSearchSharp } from "react-icons/io5";
import WorkCard from "../WorkCard";
import FilterBox from "../FilterBox";

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
  };

  componentDidMount() {
    this.getJob();
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

  getJob = async () => {
    const url = "https://labeninjas.herokuapp.com/jobs";

    try {
      const res = await axios.get(url, headers);
      this.setState({ jobsList: res.data.jobs });
    } catch (err) {
      alert(err.response);
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
            job={job}
            goToDetail={this.props.goToDetail}
            addToCart={this.props.addToCart}
          />
        );
      });

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
        <Content>{jobsListPosted}</Content>
      </Container>
    );
  }
}
