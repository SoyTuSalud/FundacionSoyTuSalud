interface sessionInterface {
  _id: string
  correo: string
  role: string
  statusAccount: string
  __v: number
  iat: number
  exp: number
}

interface actionsSession {
    type: string
    payload: sessionInterface
}

const initialSession: sessionInterface = {
  _id: '',
  correo: '',
  role: '',
  statusAccount: '',
  __v: 0,
  iat: 0,
  exp: 0,
}



export const SessionReducer = (
  state: sessionInterface = initialSession,
  action: actionsSession,
) => {

  switch (action.type) {
    case 'Charge':
        return {...state, name: action.payload}

    default:
      return state
  }
}
