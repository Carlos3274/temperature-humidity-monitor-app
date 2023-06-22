import { HumidityApi } from '../services/use-humidity'
import { TemperatureApi } from '../services/use-temperature'

export const cleanDate = (date: string): string => {
  return date
}

export const getLastTemperature = (
  input: TemperatureApi[]
): TemperatureApi | undefined => {
  return input.length > 0 ? input.slice(-1)[0] : undefined
}

export const getLastHumidity = (input: HumidityApi[] | undefined) => {
  return input.length > 0 ? input.slice(-1)[0] : undefined
}
