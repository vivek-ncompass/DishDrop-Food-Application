import { memo } from "react"
import { fetchAvailableMealsData } from "../../utils/http"
import { useFetch } from "../../utils/useFetch"
import { Error } from "../atom-components/Error"
import { MealsList } from "./MealsList"

const AvailableFood = memo(function AvailableFood() {
  const {
    fetchedData: meals,
    error,
    isFetching,
  } = useFetch(fetchAvailableMealsData, [])

  if (isFetching) {
    return <p className="center">Your Meal Options are being Fetched!</p>
  }

  if (error) {
    return <Error title="An Error Occured." message={error.message} />
  }

  return <MealsList meals={meals} />
})

export { AvailableFood }

