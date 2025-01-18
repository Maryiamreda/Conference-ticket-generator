import { useSelector } from 'react-redux';
import LogoMark from '../assets/images/logo-mark.svg'
import githubLogo from '../assets/images/icon-github.svg'

import './ticket.css'
const Ticket = () => {
    const { avatar, fullName, email, github } = useSelector((state: any) => state.ticket);
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className="logo flex gap-2">
                <img src={LogoMark} className='max-w-5' />
                <h3 className='text-white font-semibold text-xl'>  Coding Conf
                </h3>
            </div>
            <h1 className='text-white font-semibold text-4xl'>
                Congrats, <span className='name-gradiant'>{fullName}</span>! <br /> Your ticket is ready.

            </h1>
            <h4 className='text-white font-light text-base opacity-90 pt-3'>  We've emailed your ticket to <br /><span className='text-orange-primary'>{email}</span> and will send updates in<br /> the run up to the event.
            </h4>
            <div className="ticket mt-10 py-4 px-4 flex flex-col gap-10" >
                <div className="logo flex flex-col gap-1">
                    <div className="logo flex gap-2">
                        <img src={LogoMark} className='max-w-7' />
                        <h3 className='text-white font-semibold text-2xl'>  Coding Conf</h3>
                    </div>
                    <p className='text-white font-light text-xs opacity-90 w-48 '>  Jan 31, 2025 / Austin, TX</p>

                </div>
                <div className='flex gap-2'>
                    <img src={avatar} className='max-w-16 rounded-lg' />
                    <div className='flex flex-col text-start gap-1 pt-1'>
                        <h2 className='text-white  text-xl'>{fullName}</h2>
                        <div className='flex gap-2'>
                            <img src={githubLogo} className='max-w-4  ' />
                            <p className='text-white font-light text-xs opacity-90 '>@{github}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Ticket;
