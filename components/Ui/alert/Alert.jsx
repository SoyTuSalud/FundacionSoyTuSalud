
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import ReportProblemTwoToneIcon from '@mui/icons-material/ReportProblemTwoTone';
import { useEffect, useState } from 'react';

const Alert = ({ config }) => {

  let configAlert = {
    color:'',
    icon: <></>
  }
  
  switch (config.type) {
    case 'info':
      configAlert.color = 'bg-amber-100 text-amber-800',
      configAlert.icon = <ReportProblemTwoToneIcon fontSize='large' className='mr-10'/>
      break;
    case 'error':
      configAlert.color = 'bg-red-500 text-white',
      configAlert.icon = <CancelTwoToneIcon fontSize='large' className='mr-10'/>
    default:
      break;
  }

  return (
    <>
      <div className={` h-full items-center place-content-center mr-auto w-full flex justify-center ${configAlert.color} text-4xl py-11 rounded-md`}>
          {configAlert.icon}
          <span>{config.message}</span> 
        </div>
    </>
  )
}

export default Alert