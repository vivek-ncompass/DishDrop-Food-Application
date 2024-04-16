import { createContext, useState } from "react"

export const FoodCartContext = createContext({
  cartItems: [],
  addItem: () => {},
  updateItem: () => {},
  clearCart: () => {},
})

export function FoodCartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(cartDetails) {
    const updatedItems = [...cartItems]

    const existingItemId = updatedItems.findIndex(
      (item) => item.id === cartDetails.id
    )

    let existingItem = updatedItems[existingItemId]

    if (existingItem) {
      existingItem = { ...existingItem, quantity: existingItem.quantity + 1 }
      updatedItems[existingItemId] = existingItem
    } else {
      updatedItems.push({ ...cartDetails, quantity: 1 })
    }

    setCartItems(updatedItems)
  }

  function updateItem(itemId, operation) {
    let allItems = [...cartItems]

    const itemIdInList = allItems.findIndex((item) => item.id === itemId)

    let cartItem = allItems[itemIdInList]

    if (operation === "add") {
      cartItem.quantity = cartItem.quantity + 1
      allItems[itemIdInList] = cartItem
    } else {
      if (cartItem.quantity === 1) {
        allItems = allItems.filter((item) => item.id !== itemId)
      } else {
        cartItem.quantity = cartItem.quantity - 1
        allItems[itemIdInList] = cartItem
      }
    }

    setCartItems(allItems)
  }

  function clearCart() {
    setCartItems([])
  }

  const contextValue = {
    cartItems: cartItems,
    addItem: addToCart,
    updateItem: updateItem,
    clearCart: clearCart,
  }

  return (
    <FoodCartContext.Provider value={contextValue}>
      {children}
    </FoodCartContext.Provider>
  )
}
