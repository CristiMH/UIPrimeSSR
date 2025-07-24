import React, { useEffect, useContext } from 'react'
import UiPrime from '../assets/static-images/uiprime.png'
import languageContext from '../contexts/languageContext';

const ResponsiveMenu = ({ isOpen, setIsOpen, onScrollTo }) => {

    const { language } = useContext(languageContext);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className={`fixed top-0 z-[49] h-[100vh] w-full bg-black/50 backdrop-blur-md ${isOpen ? 'right-0' : '-right-full'}  transition-all duration-150 ease-in`}></div>

            <div className={`w-[200px] top-0 fixed z-50 xs:w-[250px] bg-black h-[100vh] flex flex-col gap-[45px] pt-[50px] pl-[35px] ${isOpen ? 'left-0 overflow-y-auto' : '-left-full'}  transition-all duration-150 ease-in`}>
                <img src={UiPrime} alt="UiPrime Logo - Professional Website Development" className='w-[100px] xs:w-[132px]' />

                <ul className='flex flex-col gap-[35px]'>
                    <li className='text-white text-[18px] xs:text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                        <button onClick={() => {setIsOpen(false); onScrollTo("process");}} className="block w-full h-full text-left cursor-pointer" aria-label="Learn about our process">
                            {language === 'en' ? 'Process' : "Proces"}
                        </button>
                        <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                    </li>
                    <li className='text-white text-[18px] xs:text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                        <button onClick={() => {setIsOpen(false); onScrollTo("work-samples");}} className="block w-full h-full text-left cursor-pointer" aria-label="See some of our work">
                            {language === 'en' ? 'Work Samples' : 'Lucrări'}
                        </button>
                        <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                    </li>
                    <li className='text-white text-[18px] xs:text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                        <button onClick={() => {setIsOpen(false); onScrollTo("benefits");}} className="block w-full h-full text-left cursor-pointer" aria-label="See what benefits you could recieve">
                            {language === 'en' ? 'Services' : 'Servicii'}
                        </button>
                        <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                    </li>
                    <li className='text-white text-[18px] xs:text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                        <button onClick={() => {setIsOpen(false); onScrollTo("testimonials");}} className="block w-full h-full text-left cursor-pointer" aria-label="Learn about our reputation">
                            {language === 'en' ? 'Testimonials' : 'Recenzii'}
                        </button>
                        <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                    </li>
                    <li className='text-white text-[18px] xs:text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                        <button onClick={() => { setIsOpen(false); onScrollTo("pricing"); }} className="block w-full h-full text-left cursor-pointer" aria-label="See pricing">
                            {language === 'en' ? 'Pricing' : 'Prețuri'}
                        </button>
                        <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                    </li>
                    <li>
                        <button
                            aria-label="Contact us"
                            onClick={() => { setIsOpen(false); onScrollTo("contact-us"); }}
                            className='mb-[60px] bg-[#51FFF8] hover:bg-[#28b5af] text-[14px] xs:text-[16px] uppercase px-[20px] xs:px-[30px] py-[8px] rounded-[8px] text-[#111204] font-semibold transition-all duration-100 ease-in cursor-pointer'>
                            {language === 'en' ? 'Contact Us' : 'Contactează-ne'}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ResponsiveMenu
