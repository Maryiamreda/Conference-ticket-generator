import React from 'react';
import LogoMark from '../assets/images/logo-mark.svg'

const Form = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className="logo flex gap-2">
                <img src={LogoMark} className='max-w-5' />
                <h3 className='text-white font-semibold text-xl'>  Coding Conf
                </h3>
            </div>
            <div>
                <h1 className='text-white font-semibold text-4xl'>  Your Journey to Coding Conf <br /> 2025 Starts Here!</h1>
                <p className='text-white font-light text-base opacity-90 pt-3'>  Secure your spot at next year's biggest coding conference.</p>
            </div>

            <form className='text-start flex flex-col gap-6'>
                <div className=''>
                    <h4 className='text-white font-light text-lg opacity-95  '>  Upload Avatar </h4>
                    <input type='file' />
                </div>
                <div className=''>
                    <h4 className='text-white font-light text-lg opacity-95'>  Full Name </h4>

                    <input type='text' className='opacity-15 w-full p-2 rounded  border-white' />


                </div>
                <div>
                    <h4 className='text-white font-light text-lg opacity-95'>  Email Address          </h4>
                    <input type='email' placeholder='  example@email.com' className='opacity-15 w-full p-2 rounded  border-white' />
                </div>
                <div>
                    <h4 className='text-white font-light text-lg opacity-95'>  GitHub Username          </h4>
                    <input type='text' placeholder='  @yourusername' className='opacity-15 w-full p-2 rounded ' />
                </div>
                <button className='bg-orange-dark text-neutral-darkest text-sm font-bold  p-2 rounded'>  Generate My Ticket</button>
            </form>

        </div>
    );
}

export default Form;
