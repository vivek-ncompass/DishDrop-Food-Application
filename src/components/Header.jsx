import { useContext, useState } from "react"
import { Button } from "./atom-components/Button"
import { CartModal } from "./cart/CartModal"
import { FoodCartContext } from "./context/FoodCartContext"
import mainlogo from "/logo.jpg"

export function Header() {
  const { cartItems } = useContext(FoodCartContext)
  const [isCartOpen, setIsCartOpen] = useState(false)

  function handleCartOpen() {
    setIsCartOpen(true)
  }

  function handleCartClose() {
    setIsCartOpen(false)
  }

  return (
    <>
      <CartModal handleCartClose={handleCartClose} isCartOpen={isCartOpen} />
      <div id="main-header">
        <div id="title">
          <img src={mainlogo} alt="Logo DishDrop" />
          <h1>DishDrop</h1>
        </div>
        <Button className="text-button" onClick={handleCartOpen}>
          Cart({cartItems.length})
        </Button>
      </div>
    </>
  )
}
