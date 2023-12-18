import React from 'react';
import Implant from '../../assets/Implant.png'

const Contact = (props) => {
    return (
        <div className='flex flex-col justify-between gap-16 items-center md:items-start bg-charcoal overflow-x-hidden text-white selection:bg-azure p-16 md:px-24'>
            <div className='text-4xl'>
                {props.title}
            </div>
            <div className='flex flex-col items-start md:flex-row-reverse justify-between gap-4'>
                <div className='flex flex-col md:items-start gap-4 font-[200]'>
                    <div>
                        Stomatolog: dr Dejan Lazarević
                    </div>
                    <div>
                        E-mail: dr.dejanlazarevic@gmail.com
                    </div>
                    <div>
                        Telefon:+381 11 35 65 178
                    </div>
                    <div>
                        +381 63 12 76 347
                    </div>
                    <div>
                        Adresa: Kneza Višeslava 63, Beograd
                    </div>
                    <div className='mt-12'>
                        PONEDELJAK - SREDA - PETAK: 12:00 - 20:00h
                    </div>
                    <div>
                    UTORAK - ČETVRTAK: 10:00 - 18:00h
                    </div>
                </div>
                <div className='max-w-[50vw]'>
                    <img src={Implant} alt="ImplantImg" />
                </div>
                <form action="" className='block'>
                    <input type="text" id='firstName' name='firstName' placeholder='Ime' className='rounded p-1 md:p-2 mr-4 mb-4 w-full text-black block'/>
                    <br />
                    <input type="text" id='lastName' name='lastName' placeholder='Prezime' className='rounded p-1 md:p-2 mb-4 w-full text-black block'/>
                    <br/>
                    <input type="text" id='phone' name='phone' placeholder='Telefon' className='rounded p-1 md:p-2 mb-4 text-black w-full block' />
                    <br />
                    <input type="text" id='email' name='email' placeholder='E-mail' className='rounded p-1 md:p-2 mb-4 text-black w-full block'/>
                    <br />
                    <input type="text" id='message' name='message' placeholder='Poruka' className='rounded px-1 md:px-2 py-8 mb-4 text-black w-full block'/>
                    <br />
                    <input type="checkbox" id='terms' name='terms' className='rounded p-1 md:p-4 mb-4 text-black' />
                    <label htmlFor="terms">Pročitao sam i slažem se sa uslovima korišćenja.</label>
                    <br />
                    <div className='flex flex-row justify-center items-center md:justify-start mt-4'>
                        <input type="submit" value="Pošalji" className='cursor-pointer bg-azure text-white px-4 py-2 rounded-bl-lg rounded-tr-lg' />
                    </div>
                </form>
            </div>      
        </div>
    );
}

export default Contact;
