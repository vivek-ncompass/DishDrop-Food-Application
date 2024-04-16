import { useContext, useState } from "react"
import { formatter } from "../../utils/formatter"
import { Button } from "../atom-components/Button"
import { Modal } from "../atom-components/Modal"
import { CheckOutModal } from "../checkout/CheckOutModal"
import { FoodCartContext } from "../context/FoodCartContext"
import { CartItems } from "./CartItems"

export function CartModal({ isCartOpen, handleCartClose }) {
  const { cartItems } = useContext(FoodCartContext)

  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false)

  const totalPrice = cartItems
    .reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
    .toFixed(2)

  function handleCheckOutClose() {
    setIsCheckOutOpen(false)
  }

  function handleCheckOutOpen() {
    setIsCheckOutOpen(true)
  }

  function handleGoToCart() {
    setIsCheckOutOpen(true)
    handleCartClose()
  }

  return (
    <>
      <CheckOutModal
        isCheckOutOpen={isCheckOutOpen}
        handleCheckOutClose={handleCheckOutClose}
        totalPrice={totalPrice}
        cartItems={cartItems}
      />

      {isCartOpen && (
        <Modal open={isCartOpen} close={handleCartClose} classNameProp="cart">
          <h2>Your Cart</h2>
          {!cartItems.length ? (
            <p>No items in cart yet.</p>
          ) : (
            <>
              <CartItems cartItems={cartItems} />
              <p className="cart-total">{formatter.format(totalPrice)}</p>
            </>
          )}
          <p className="modal-actions">
            <Button
              className="text-button"
              onClick={() => {
                handleCartClose()
              }}
            >
              Close
            </Button>
            {!!cartItems.length && (
              <Button
                className="button"
                onClick={() => {
                  handleGoToCart()
                }}
              >
                Go to Checkout
              </Button>
            )}
          </p>
        </Modal>
      )}
    </>
  )
}
