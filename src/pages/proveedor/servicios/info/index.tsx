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
          show && 'fixed inset-0 h-full w-full',
          'bg-black bg-opacity-60 backdrop-blur-sm'
        )}
      >
        <div
          className={clsx(
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-4/5 rounded-xl bg-white p-6 lg:w-2/5 lg:p-9'
          )}
        >
          <p className="text-center">{info[16]}</p>
          {16 != 16 ? (
            <div className="mt-4 flex justify-center">
              <SoyTuButton className="w-3/5">Aceptar</SoyTuButton>
            </div>
          ) : (
            <div className="mt-4 flex flex-col items-center justify-center gap-x-6 gap-y-4">
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
