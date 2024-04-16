import { Meal } from "./Meal"

export function MealsList({ meals }) {
  return (
    <div id="meals">
      {meals.map((meal) => (
        <Meal meal={meal} key={meal.id} />
      ))}
    </div>
  )
}
