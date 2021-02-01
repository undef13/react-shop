import React from "react";
import { Link } from "react-router-dom";

import "./products-list-item.css";

const ProductsListItem = ({ book, addToCart }) => {
  const { id, title, author, price } = book;
  return (
    <li>
      <Link to="/">{title}</Link>
      <div>{author}</div>
      <div>{price}$</div>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </li>
  )
}

export default ProductsListItem;