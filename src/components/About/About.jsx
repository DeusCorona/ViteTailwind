import React from 'react';
import ImplantImg from '../../assets/Implant.png'

const About = (props) => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-16 bg-charcoal text-white p-16 text-center md:text-left'>
            <div className='flex flex-col items-left gap-4'>
                <div className='text-3xl flex flex-col items-center md:items-start justify-center'>
                    {props.title}
                    <hr className='w-[21rem] h-[0.3rem] bg-white rounded'/>
                </div>
                <p>
                    {props.text}
                </p>
            </div>
            <div>
                <img src={ImplantImg} alt="ImplantImg" />
            </div>
                        
        </div>
    );
}

export default About;
