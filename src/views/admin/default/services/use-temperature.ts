import { useEffect, useState } from 'react'

export type TemperatureApi = {
  created_at: string
  entry_id: number
  field1: string
}

const useTemperature = () => {
  const [data, setData] = useState<TemperatureApi[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          'https://api.thingspeak.com/channels/2197058/fields/1.json?api_key=0GX98SP5IVJTXVVJ&results=2'
        )
        const jsonData = await response.json()
        setData(jsonData.feeds)
      } catch (error) {
        setError('Error fetching data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
    const intervalId = setInterval(fetchData, 15000)

    return () => clearInterval(intervalId)
  }, [])

  return { data, isLoading, error }
}

export default useTemperature
