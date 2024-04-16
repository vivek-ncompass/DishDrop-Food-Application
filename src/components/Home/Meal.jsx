import { useContext } from "react"
import { formatter } from "../../utils/formatter"
import { Button } from "../atom-components/Button"
import { FoodCartContext } from "../context/FoodCartContext"

export function Meal({ meal }) {
  const { addItem } = useContext(FoodCartContext)

  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <div>
          <p className="meal-item-price">
            <span>{formatter.format(meal.price)}</span>
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <div className="meal-item-actions">
            <Button
              className="button"
              onClick={() => {
                addItem(meal)
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
