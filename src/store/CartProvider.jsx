import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "add") {
    const existIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existedCart = state.items[existIndex];
    let updatedItemList;
    //check update or add
    if (existedCart) {
      const updateItem = {
        ...existedCart,
        amount: existedCart.amount + action.item.amount,
      };
      updatedItemList = [...state.items];
      updatedItemList[existIndex] = updateItem;
    } else {
      updatedItemList = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      totalAmount: updatedTotalAmount,
      items: updatedItemList,
    };
  }

  if (action.type === "delete") {
    const existIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existedCart = state.items[existIndex];
    let updatedItemList;

    if (existedCart.amount === 1) {
      const updatedItemList = state.items.filter(
        (item) => item.id !== action.item.id
      );
    } else {
      updatedItemList = [...state.items];
      updatedItemList[existIndex].amount = existedCart.amount - 1;
    }
    const updatedTotalAmount = state.totalAmount - existedCart.price;
    return {
      totalAmount: updatedTotalAmount,
      items: updatedItemList,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, cartDispatch] = useReducer(CartReducer, defaultCartState);

    const addItemHandler = (item) => {
        cartDispatch({type: "add", item: item})
    }

    const removeItemHandler = (id) => {
        cartDispatch({type: "remove", id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;