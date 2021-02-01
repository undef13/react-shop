import React from "react";

import ProductsListItem from "../products-list-item";

const ProductsList = ({ books, addToCart }) => {
  const booksList = books.map(book => {
    return (
      <ProductsListItem addToCart={addToCart} key={book.id} book={book} />
    );
  });

  return (
    <ul>
      {booksList}
    </ul>
  )
}

export default ProductsList;