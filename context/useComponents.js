import { createContext, useContext } from 'react'

export const ComponentContext = createContext(null)

export const useComponent = () => {
  return useContext(ComponentContext)
}
