import React from 'react';

const CallToAction = () => {
    return (
        <div className='bg-CTA__image bg-center bg-no-repeat bg-cover bg-blend-darken flex flex-col items-center justify-center gap-16 text-white selection:bg-tangerine text-center min-h-[100vh] p-16'>
            <div className='p-16 font-bold hover:font-black text-4xl'>
                Some very very very persuasive text that will make you buy our product
            </div>
            <button className='text-2xl p-4 -skew-x-12 shadow-md hover:shadow-lg shadow-tangerine/90 hover:shadow-scarlet/90 hover:bg-scarlet bg-tangerine md:p-3 rounded-md transition duration-500'>
                <div className='skew-x-12'>
                    Action button
                </div>
            </button>     
        </div>
    );
}

export default CallToAction;
