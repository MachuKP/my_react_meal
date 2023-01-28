import { useState } from "react"
import Meals from "./Meals/Meals"
import Header from "./Layout/Header"
import CartProvider from "./store/CartProvider"
import Cart from "./Cart/Cart"

function App() {
  const [cartIsShow, setcartIsShow] = useState(false)

  const showCartHandler = () => {
    setcartIsShow(true)
  }

  const hideCartHandler = () => {
    setcartIsShow(false)
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
