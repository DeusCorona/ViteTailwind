import React from 'react'

function TOS() {
  return (
    <div className='flex flex-col gap-4 md:flex-row justify-between items-center p-8 bg-azure text-white'>
        <div>
            ©DentalLazarević
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-8'>
            <div>
                Politika privatnosti
            </div>
            <div>
                Uslovi korišćenja
            </div>
        </div>
    </div>
  )
}

export default TOS