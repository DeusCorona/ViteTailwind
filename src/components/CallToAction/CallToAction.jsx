import React from 'react';
import NavBar from '../NavBar/NavBar';

const CallToAction = () => {
    return (
        <div className='bg-CTA__image bg-center bg-no-repeat bg-cover bg-blend-darken'>
            <NavBar/>
            <div className='flex flex-col items-center justify-center text-white selection:bg-azure text-center min-h-[90vh]'>
                <div className='p-4 font-bold hover:font-black text-4xl'>
                    Dental Lazarević
                </div>
                <hr className='w-[19rem]'/>
                <div className='text-xl'>
                    INOVACIJA U SVAKOM OSMEHU
                </div>
                <hr className='w-[19rem] mb-8'/>
                <button className='text-xl p-4 hover:shadow-md shadow-azure/90 hover:shadow-azure/90 bg-azure md:p-3 rounded-bl-lg rounded-tr-lg transition duration-500'>
                    <div>
                        Rezerviši
                    </div>
                </button>     
            </div>
        </div>
    );
}

export default CallToAction;
