import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartContext = useContext(CartContext);

  const hasItem = cartContext.items.length > 0;
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const AddItemToCart = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const removeItemFromCart = (id) => {
    cartContext.removeItem(id);
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          clickAdd={AddItemToCart}
          clickRemove={removeItemFromCart}
        />
      ))}
    </ul>
  );

  const modalController = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {hasItem && cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout ? <Checkout onCancel={props.onClose} /> : modalController }
    </Modal>
  );
};

export default Cart;
