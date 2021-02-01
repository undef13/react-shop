import React from "react";
import { connect } from "react-redux";

import { deleteFromCart, addToArray, decreaseCount } from "../../actions";

import "./shopping-cart-table.css";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, itemTotal } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{itemTotal}$</td>
        <td>
          <button onClick={() => onIncrease(id)}>+</button>
          <button onClick={() => onDecrease(id)}>-</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </td>
      </tr>
    )
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>
      <div>Total: {total}$</div>
    </>
  )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: (id) => dispatch(addToArray(id)),
    onDecrease: (id) => dispatch(decreaseCount(id)),
    onDelete: (id) => dispatch(deleteFromCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);