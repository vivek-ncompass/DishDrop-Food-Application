import { URL } from "./URL"

export async function fetchAvailableMealsData(){
 const response = await fetch(URL.meals)
 
 if(!response.ok){
  throw new Error("Error while fetching available meals....")
 }

 const mealsData = await response.json()
 return mealsData

}

export async function postCustomerOrder(cartItems, customerData){
  const response = await fetch(URL.orders, {
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      order:{
        items: cartItems,
        customer: customerData,
      }
    })
  })

  if(!response.ok){
    throw new Error("Error while posting orders.....")
  }

  return await response.json()

}