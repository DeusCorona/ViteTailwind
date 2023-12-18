import React from 'react';
import { useState } from 'react';

const procedures = [
    "Poznato je da zbog povećanog delovanja hormona u trudnoći postoji povećana sklonost upalama desni, stoga je neophodno redovna poseta stomatologu. 0",
    "Trenutno veoma popularna estetska procedura je beljenje zuba, pri beljenju zuba ne dolazi ni do kakvih strukturalnih promena na zubnom tkivu pa se moze ponavljati bez stetnih posledica… 1",
    "Poznato je da zbog povećanog delovanja hormona u trudnoći postoji povećana sklonost upalama desni, stoga je neophodno redovna poseta stomatologu. 2",
    "Trenutno veoma popularna estetska procedura je beljenje zuba, pri beljenju zuba ne dolazi ni do kakvih strukturalnih promena na zubnom tkivu pa se moze ponavljati bez stetnih posledica… 3"
];

const nextSlide = () =>
{

};

const Carousel = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        const isLastSlide = slideIndex === procedures.length - 1
        const newIndex = isLastSlide ?  0 : slideIndex + 1
        setSlideIndex(newIndex)
    };

    const previousSlide = () => {
        const isFirstSlide = slideIndex === 0
        const newIndex = isFirstSlide ? procedures.length - 1 : slideIndex - 1
        setSlideIndex(newIndex)
    };

    return (
        <div className='flex flex-col items-center justify-center gap-8 bg-tealgreen text-white p-4 md:px-24'>
            <div className='text-4xl fontLexend'>
                Mapa usluga
            </div>
            <div className='flex flex-row justify-center items-center gap-8'>
                <div onClick={previousSlide} className='cursor-pointer hover:bg-azure p-4 rounded'>
                    {"<"}
                </div>
                <div className='border-2 rounded p-4 w-[40%] font-[200]'>
                    {procedures[slideIndex]}
                </div>
                <div onClick={nextSlide} className='cursor-pointer hover:bg-azure p-4 rounded'>
                    {">"}
                </div>            
            </div>
        </div>
    );
}

export default Carousel;
