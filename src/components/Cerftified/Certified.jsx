import React from 'react'
import Logo from '../../assets/Dejan1.png'

function Certified(props) {
  return (
    <div className='flex flex-col items-center md:items-start justify-between p-16 md:px-24 bg-tealgreen text-white'>
        <div className='text-3xl flex flex-col items-center md:items-start justify-center'>
            {props.title}
            <hr className='w-[11rem] md:w-[2rem] h-[0.1rem] bg-white rounded'/>
        </div>
        <div className='flex flex-col-reverse items-start md:flex-row justify-between gap-8 mt-[2rem]'>
            <div className='md:w-[25%] lg:w-[20%]'>
                <img src={Logo} alt="LogoImg" className='rounded-lg'/>
            </div>
            <div className='flex flex-col gap-8 items-center md:items-start justify-center md:w-[75%] lg:w-[80%]'>
                <p className='text-xl'>
                    {props.text}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Certified