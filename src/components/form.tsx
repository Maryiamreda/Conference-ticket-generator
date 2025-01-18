import LogoMark from '../assets/images/logo-mark.svg'
import InfoIcon from '../assets/images/icon-info.svg'
import UploadIcon from '../assets/images/icon-upload.svg'
import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from 'react-redux';
import { setAvatar, setFullName, setEmail, setGithub, setSubmit } from '../store/slice';


const Form = () => {
    const fileTypes = ["JPG", "PNG"];
    const dispatch = useDispatch();
    const handleChange = (file: any) => {
        if (file) {
            const url = URL.createObjectURL(file);
            dispatch(setAvatar(url));  // Now we're dispatching the URL string, not the file
            console.log("photo uploaded!")
        }
    };

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className="logo flex gap-2">
                <img src={LogoMark} className='max-w-5' />
                <h3 className='text-white font-semibold text-xl'>  Coding Conf
                </h3>
            </div>
            <div>
                <h1 className='text-white font-semibold text-4xl'>  Your Journey to Coding Conf <br /> 2025 Starts Here!</h1>
                <p className='text-white font-light text-base opacity-90 pt-3'>  Secure your spot at next year's biggest coding conference.</p>
            </div>
            <form onSubmit={() => dispatch(setSubmit(true))} className='text-start flex flex-col gap-3 w-80' >
                <div className=''>
                    <h4 className='text-white font-light text-sm opacity-95  '>  Upload Avatar </h4>

                    <FileUploader
                        handleChange={handleChange}
                        name="file"
                        required
                        classes='mt-2 border-2 border-dashed border-white bg-white border-opacity-35 bg-opacity-10 rounded-lg cursor-pointer flex flex-col items-center py-4 px-7'

                        types={fileTypes}
                        children={
                            <div className='flex flex-col items-center'>
                                <div className='p-2 border-2 border-neutral-dark bg-white bg-opacity-10 rounded-lg'>
                                    <img src={UploadIcon} className='max-w-6' alt="upload icon" />
                                </div>
                                <p className='text-white font-light text-xs opacity-70 mt-1'>
                                    Drag and drop or click to upload
                                </p>
                            </div>
                        }
                    />
                    <div className='inline-flex gap-1'>
                        <img src={InfoIcon} className='max-w-3 mt-1' />
                        <p className='text-white font-light text-[9px] opacity-85 mt-1 '>  Upload your photo (JPG or PNG, max size: 500KB).                        </p>
                    </div>
                </div>
                <div className=''>
                    <h4 className='text-white font-light text-sm opacity-95'>  Full Name </h4>

                    <input type='text'
                        onChange={(e) => dispatch(setFullName(e.target.value))}
                        className='mt-2 bg-[#ffffff12] text-xs w-full p-2 rounded-lg   border-2 border-opacity-35  border-white text-white focus:outline-none' required
                    />
                </div>
                <div>
                    <h4 className='text-white font-light text-sm opacity-95'>  Email Address          </h4>
                    <input type='email' placeholder='  example@email.com'
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                        className='mt-2 bg-[#ffffff12] text-xs w-full p-2 rounded-lg  placeholder-white placeholder-opacity-70 border-2 border-opacity-35   border-white text-white focus:outline-none' required
                    />
                </div>
                <div>
                    <h4 className='text-white font-light text-sm opacity-95'>  GitHub Username          </h4>
                    <input type='text' placeholder='  @yourusername'
                        onChange={(e) => dispatch(setGithub(e.target.value))}
                        className='mt-2 bg-[#ffffff12] w-full p-2 text-xs rounded-lg  placeholder-white placeholder-opacity-70 border-2 border-opacity-35  border-white text-white focus:outline-none' required
                    />

                </div>
                <button type='submit' className='bg-orange-dark text-neutral-darkest text-xs font-bold  p-2 rounded-lg mt-2'>  Generate My Ticket</button>
            </form>

        </div>
    );
}

export default Form;
