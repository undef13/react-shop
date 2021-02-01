const booksRequested = () => { 
  return {
    type: "FETCH_BOOKS_REQUEST" 
  }
};

const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  }
}

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE", 
    payload: error 
  }
};

const addToArray = (bookId) => {
  return {
    type: "ADD_TO_CART",
    payload: bookId
  }
}

const deleteFromCart = (bookId) => {
  return {
    type: "DELETE_FROM_CART",
    payload: bookId
  }
}

const decreaseCount = bookId => {
  return {
    type: "DECREASE_COUNT",
    payload: bookId
  }
}

const fetchBooks = (dispatch, ss) => () => {
  dispatch(booksRequested());
  ss.getProducts()
    .then(data => dispatch(booksLoaded(data)))
    .catch(error => dispatch(booksError(error)));
}

export {
  fetchBooks,
  addToArray,
  deleteFromCart,
  decreaseCount
}