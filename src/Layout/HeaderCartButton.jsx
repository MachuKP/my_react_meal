import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../store/cart-context'

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext)
  const [btnHighLight, setBtnHighLight] = useState(false);

  const btnClasses = `${classes.button} ${btnHighLight ? classes.bump : ""}`

  const {items} = cartContext;

  const itemsAmount = items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0)
  
  useEffect(() => {
    if (items.length === 0) {
      setBtnHighLight(true)
    }

    const timer = setTimeout(() => {
      setBtnHighLight(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{itemsAmount}</span>
    </button>
  )
}

export default HeaderCartButton