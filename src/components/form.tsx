import React from 'react';
import LogoMark from '../assets/images/logo-mark.svg'
import InfoIcon from '../assets/images/icon-info.svg'
import UploadIcon from '../assets/images/icon-upload.svg'

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

            <form className='text-start flex flex-col gap-6 w-80'>
                <div className=''>
                    <h4 className='text-white font-light text-lg opacity-95  '>  Upload Avatar </h4>
                    <label htmlFor="photo upload"
                        className=' mt-3 border-2 border-dashed border-white bg-white bg-opacity-10 rounded-lg cursor-pointer flex flex-col items-center p-7' >
                        <div className='p-3 border-2 border-neutral-dark bg-white bg-opacity-10 rounded-lg '>
                            <img src={UploadIcon} />

                        </div>
                        <p className='text-white font-light  opacity-85 mt-1 '>  Drag and drop or click to upload    </p>
                    </label>

                    <input type='file' id='photo upload' draggable="true" hidden />
                    <div className='inline-flex gap-1'>
                        <img src={InfoIcon} className='max-w-3 mt-1' />
                        <p className='text-white font-light text-[9px] opacity-85 mt-1 '>  Upload your photo (JPG or PNG, max size: 500KB).                        </p>
                    </div>
                </div>
                <div className=''>
                    <h4 className='text-white font-light text-lg opacity-95'>  Full Name </h4>

                    <input type='text' className='mt-2  opacity-15 w-full p-2 rounded-lg  border-white' />


                </div>
                <div>
                    <h4 className='text-white font-light text-lg opacity-95'>  Email Address          </h4>
                    <input type='email' placeholder='  example@email.com' className='mt-2 opacity-15 w-full p-2 rounded-lg  border-white' />
                </div>
                <div>
                    <h4 className='text-white font-light text-lg opacity-95'>  GitHub Username          </h4>
                    <input type='text' placeholder='  @yourusername' className=' mt-2  opacity-15 w-full p-2 rounded-lg  ' />
                </div>
                <button className='bg-orange-dark text-neutral-darkest text-xs font-bold  p-2 rounded'>  Generate My Ticket</button>
            </form>

        </div>
    );
}

export default Form;
