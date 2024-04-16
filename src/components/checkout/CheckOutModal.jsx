import { useContext, useState } from "react"
import { postCustomerOrder } from "../../utils/http"
import { Button } from "../atom-components/Button"
import { Input } from "../atom-components/Input"
import { Modal } from "../atom-components/Modal"
import { FoodCartContext } from "../context/FoodCartContext"
import { OrderCompleteModal } from "../order-completed/OrderCompleteModal"

export function CheckOutModal({
  totalPrice,
  isCheckOutOpen,
  handleCheckOutClose,
  cartItems,
}) {
  const { clearCart } = useContext(FoodCartContext)

  const [isOrderCompletedOpen, setIsOrderCompletedOpen] = useState(false)
  const [errorDisplay, setErrorDisplay] = useState()

  function handleOrderCompletedClose() {
    setIsOrderCompletedOpen(false)
  }

  function handleOrderCompletedOpen() {
    setIsOrderCompletedOpen(true)
  }

  async function handleFormSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const customerData = Object.fromEntries(formData.entries())

    try {
      const { message } = await postCustomerOrder(cartItems, customerData)
    } catch (error) {
      setErrorDisplay(error.message)
    }
    handleCheckOutClose()
    handleOrderCompletedOpen()
    clearCart()
  }

  return (
    <>
      <OrderCompleteModal
        isOrderCompletedOpen={isOrderCompletedOpen}
        handleOrderCompletedClose={handleOrderCompletedClose}
        errorDisplay={errorDisplay}
      />
      {isCheckOutOpen && (
        <Modal open={isCheckOutOpen} onClose={handleCheckOutClose}>
          <form onSubmit={handleFormSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {totalPrice}</p>
            <Input id="name" label="Full Name" type="text" />
            <Input id="email" label="E-mail Address" type="email" />
            <Input id="street" label="Street" type="text" />
            <div className="control-row">
              <Input
                id="postal-code"
                label="Postal Code"
                type="number"
                minLength="6"
                maxLength="6"
              />
              <Input id="city" label="City" type="text" />
            </div>
            <p className="modal-actions">
              <Button className="text-button" onClick={handleCheckOutClose}>
                Close
              </Button>
              <Button type="submit" className="button">
                Submit
              </Button>
            </p>
          </form>
        </Modal>
      )}
    </>
  )
}
