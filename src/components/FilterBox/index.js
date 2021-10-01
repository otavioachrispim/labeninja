import React from "react";
import { Container } from "./styles";

export default function FilterBox(props) {
  return (
    <Container>
      <div>
        <label htmlFor="order">Ordenar por:</label>
        <select
          name="order"
          value={props.sortOrder}
          onChange={props.onChangeSortOrder}
        >
          <option value="title">Título</option>
          <option value="lower">Maior preço</option>
          <option value="higher">Menor preço</option>
          <option value="dueDate">Prazo</option>
        </select>
      </div>
      <div>
        <label htmlFor="minPrice">Valor Mínimo</label>
        <input
          name="minPrice"
          min="0"
          type="number"
          placeholder="R$"
          value={props.minPrice}
          onChange={props.onChangeMinPrice}
        />
      </div>
      <div>
        <label htmlFor="maxPrice">Valor Máximo</label>
        <input
          name="maxPrice"
          min="0"
          type="number"
          placeholder="R$"
          value={props.maxPrice}
          onChange={props.onChangeMaxPrice}
        />
      </div>
    </Container>
  );
}
