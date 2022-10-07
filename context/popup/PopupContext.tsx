import { createContext } from 'react'

interface ContextProps {
  isOpenPopup: boolean

  //Methods
  openPopup(): void
  closePopup(): void
}

export const PopupContext = createContext<ContextProps>({} as ContextProps)
