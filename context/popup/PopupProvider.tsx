import { FC, useReducer } from 'react'
import { PopupContext, popupReducer } from '.'

export interface PopupState {
  isOpenPopup: boolean
}

const POPUP_INITIAL_STATE: PopupState = {
  isOpenPopup: false,
}

export const PopupProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(popupReducer, POPUP_INITIAL_STATE)

  const openPopup = () => {
    dispatch({ type: 'Popup - Open Popup' })
  }

  const closePopup = () => {
    dispatch({ type: 'Popup - Close Popup' })
  }

  return (
    <PopupContext.Provider
      value={{
        ...state,

        openPopup,
        closePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  )
}
