import { useContext } from "react"
import { formatter } from "../../utils/formatter"
import { Button } from "../atom-components/Button"
import { FoodCartContext } from "../context/FoodCartContext"

export function CartItems({ cartItems }) {
  const { updateItem } = useContext(FoodCartContext)

  return (
    <ul>
      {cartItems.map((item) => (
        <li key={item.id} className="cart-item">
          <p>
            {item.name} - {item.quantity} × {formatter.format(item.price)}
          </p>
          <p className="cart-item-actions">
            <Button onClick={() => updateItem(item.id, "sub")}>-</Button>
            <span>{item.quantity}</span>
            <Button onClick={() => updateItem(item.id, "add")}>+</Button>
          </p>
        </li>
      ))}
    </ul>
  )
}
