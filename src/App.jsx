import { Header } from "./components/Header"
import { AvailableFood } from "./components/Home/AvailableFood"
import {
  FoodCartContextProvider
} from "./components/context/FoodCartContext"

function App() {
  return (
      <FoodCartContextProvider>
        <Header />
        <AvailableFood />
      </FoodCartContextProvider>
  )
}

export default App
