const updateCartItems = (idx, cartItems, newBook) => {

  if(newBook.count <= 0) {
    return cartItems.filter(({ id }) => id !== newBook.id );
  }

  if (idx === -1) {
    return [...cartItems, newBook];
  }
  
  return [
    ...cartItems.slice(0, idx),
    newBook,
    ...cartItems.slice(idx + 1)
  ];
}

const updateCartItem = (item, book, quantity) => {
  if(item) {
    return {
      ...item, 
      count: item.count + quantity,
      itemTotal: item.itemTotal + quantity * book.price
    }
  } else {
    return {
      id: book.id,
      title: book.title,
      count: 1,
      itemTotal: book.price,
    }
  }
}

const updateOrder = (bookId, state, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems } } = state;

  const book = books.find(({ id }) => id === bookId);
  
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  let newBook = updateCartItem(item, book, quantity);
  
  return {
    orderTotal: 0,
    cartItems: updateCartItems(itemIndex, cartItems, newBook)
  }
}

const updateShoppingCart = (state, action) => {

  if(state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch(action.type) {
    case "ADD_TO_CART": 
      return updateOrder(action.payload, state, 1);
    case "DELETE_FROM_CART": 
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(action.payload, state, -item.count);
    case "DECREASE_COUNT": 
      return updateOrder(action.payload, state, -1);
    default: 
      return state.shoppingCart;
  }
}

export default updateShoppingCart;