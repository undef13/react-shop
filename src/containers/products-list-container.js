import React, { Component } from "react";
import { connect } from "react-redux";

import compose from "../utils";
import withShopService from "../components/hoc";
import { fetchBooks, addToArray } from "../actions";

import ProductsList from "../components/products-list";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";

class ProductsListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, addToCart } = this.props;
    if(loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }
    return <ProductsList books={books} addToCart={addToCart} />
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { ss }) => {
  return {
    fetchBooks: fetchBooks(dispatch, ss),
    addToCart: (id) => dispatch(addToArray(id))
  };
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     booksLoaded,
//     booksRequested
//   },dispatch)
// }

// const mapDispatchToProps = dispatch => ({
//   booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks)),
//   booksRequested: () => dispatch(booksRequested())
// })

export default compose(
  withShopService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductsListContainer);