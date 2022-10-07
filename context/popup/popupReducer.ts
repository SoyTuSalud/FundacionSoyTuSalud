import { PopupState } from './'

type PopupActionTypes =
  | { type: 'Popup - Open Popup' }
  | { type: 'Popup - Close Popup' }

export const popupReducer = (
  state: PopupState,
  action: PopupActionTypes,
): PopupState => {
  switch (action.type) {
    case 'Popup - Open Popup':
      return {
        ...state,
        isOpenPopup: true,
      }

    case 'Popup - Close Popup':
      return {
        ...state,
        isOpenPopup: false,
      }

    default:
      return state
  }
}
