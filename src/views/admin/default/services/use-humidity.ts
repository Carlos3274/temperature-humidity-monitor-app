import { useEffect, useState } from 'react'

export type HumidityApi = {
  created_at: string
  entry_id: number
  field2: string
}

const useHumidity = () => {
  const [data, setData] = useState<HumidityApi[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          'https://api.thingspeak.com/channels/2197058/fields/2.json?api_key=0GX98SP5IV'
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

export default useHumidity
