import React from 'react';
import ToothImg from '../../assets/Tooth.png'

const About = (props) => {
    return (
        <div className='flex flex-col justify-between items-center gap-8 bg-charcoal text-white p-16 md:px-24 text-center md:text-left'>
            <div className='text-3xl flex flex-col items-center md:items-start justify-center'>
                {props.title}
                <hr className='w-[21rem] h-[0.1rem] bg-white rounded'/>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                <p className='w-[75%] lg:w-[85%]'>
                    {props.text}
                </p>
                <div className='w-[25%] lg:w-[15%]'>
                    <img src={ToothImg} alt="ToothImg" />
                </div>
            </div>      
        </div>
    );
}

export default About;
