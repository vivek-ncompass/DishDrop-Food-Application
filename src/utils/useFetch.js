import { useEffect, useState } from "react"

export function useFetch(fetchingFunction, defaultValue) {
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState()
  const [fetchedData, setFetchedData] = useState(defaultValue)

  async function fetchData() {
    setIsFetching(true)
    try {
      const data = await fetchingFunction()
      setFetchedData(data)
    } catch (error) {
      setError({
        message: error.message || "Error while posting your orders",
      })
    }

    setIsFetching(false)
  }

  useEffect(() => {
    fetchData()
  }, [fetchingFunction])

  return {
    isFetching,
    fetchedData,
    error,
  }
}
