import React, { FC, useState } from 'react'

export const PopUp: FC = ({ mssgError }: any) => {
  const [popup, setPopup] = useState<boolean>(false)

  const onTogglePopUp = () => {
    setPopup(!popup)
  }

  return (
    <>
      {popup && (
        <div className="overlay">
          <div className="container-popup">
            <div className="close-popup">
              <button onClick={onTogglePopUp}>Cerrar</button>
            </div>
            <h1 className="title-popup">Upss, ocurrio un error!</h1>
            <p className="description-error">{mssgError}</p>
            <div className="container-btn">
              <button
                onClick={onTogglePopUp}
                className="button button--primary"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
