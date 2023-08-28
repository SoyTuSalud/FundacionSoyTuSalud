import { getLayout } from '@/src/components/layouts/supplier/SupplierLayout'
import SoyTuButton from '@/src/components/soytu/SoyTuButton'
import clsx from 'clsx'
import { useState } from 'react'
import { info } from './info.data'

const InfoModal = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <div
        className={clsx(
          !show && 'hidden',
          show && 'fixed inset-0 w-full h-full',
          'bg-black bg-opacity-60 backdrop-blur-sm'
        )}
      >
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'rounded-xl p-6 lg:p-9 bg-white w-4/5 lg:w-2/5'
          )}
        >
          <p className="text-center">{info[16]}</p>
          {16 != 16 ? (
            <div className="flex justify-center mt-4">
              <SoyTuButton className="w-3/5">Aceptar</SoyTuButton>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-x-6 gap-y-4 mt-4">
              <SoyTuButton className="w-3/5">Continuar aquí</SoyTuButton>
              <SoyTuButton className="w-3/5" variant="outlined">
                Cancelar
              </SoyTuButton>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

InfoModal.getLayout = getLayout

export default InfoModal
