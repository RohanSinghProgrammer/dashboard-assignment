import React from 'react'
import { FaUser } from 'react-icons/fa'

const OperationCard = () => {
  return (
    <div className='flex space-x-4'>
        <div className="bg-gray-200 p-4 rounded-lg w-20 grid place-items-center">
            <FaUser className='text-5xl' />
        </div>
        <div className="grid place-items-center w-fit">
            <p className='text-lg font-semibold'>Operation Name 1</p>
            <button className='px-4 py-1.5 rounded-lg bg-ui-turquoise mt-4'>View Details</button>
        </div>
    </div>
  )
}

export default OperationCard