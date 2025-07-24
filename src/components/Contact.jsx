import React, { useRef, useState, useEffect, useContext } from 'react'
import axios from 'axios';
import bgEllipse1 from '../assets/static-images/bgEllipse1.png'
import { FaArrowAltCircleRight, FaInstagram, FaReact, FaPhp, FaJsSquare } from "react-icons/fa";
import UiPrime from '../assets/static-images/uiprime.png'
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { DiDjango } from "react-icons/di";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import spinner from '../assets/static-images/spinner.svg';
import languageContext from '../contexts/languageContext';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Reordering from './Reordering';

const Contact = ({ onScrollTo }) => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { language } = useContext(languageContext);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);

        // const lastSentTime = localStorage.getItem("lastSentTime");
        // const currentTime = Date.now();

        // if (lastSentTime) {
        //     const elapsedTime = (currentTime - lastSentTime) / 1000;
        //     const remainingTime = Math.ceil(60 - elapsedTime);

        //     if (remainingTime > 0) {
        //         toast.error(`Try again in ${remainingTime} seconds!`);
        //         setLoading(false);
        //         return;
        //     }
        // }

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            if (language === "ro") {
                toast.error("Toate câmpurile sunt obligatorii!");
            } else {
                toast.error("All fields are required!");
            }
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            if (language === "ro") {
                toast.error("Adresă de email invalidă!");
            } else {
                toast.error("Invalid email address!");
            }
            setLoading(false);
            return;
        }

        const captchaResponse = grecaptcha.getResponse();
        if (!captchaResponse) {
            if (language === "ro") {
                toast.error("Rezolvați testul captcha!");
            } else {
                toast.error("Solve the captcha!");
            }
            setLoading(false);
            return;
        }

        try {
            const data = {
                sender_mail: email,
                sender_full_name: name,
                content: message,
            };

            const response = await axios.post('https://uiprimeapi.onrender.com/api/v1/send-message/',
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

            if (response.status === 200) {
                if (language === "ro") {
                    toast.success("Emailul a fost trimis cu succes!");
                } else {
                    toast.success("Email sent successfully!");
                }
                setName('');
                setEmail('');
                setMessage('');
                form.current.reset();
                grecaptcha.reset()
                localStorage.setItem("lastSentTime", Date.now());
            }
        }
        catch (error) {
            if (language === "ro") {
                toast.error("Nu s-a putut trimite emailul!");
            } else {
                toast.error("Couldn't send email!");
            }
        }
        finally {
            setLoading(false);
            grecaptcha.reset()
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} />

            <section id="contact-us" className='bg-white flex flex-col pt-[60px] px-[15px] font-barlow'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}>
                    <p className='text-center text-[29px] xs:text-[33px] mb-[50px] sm:text-[38px] md:text-[42px] xl:text-[48px] font-semibold xs:leading-14 max-w-[300px] xs:max-w-[400px] mx-auto whitespace-nowrap'>
                        {language === 'en' ? 'Contact Us' : 'Contactează-ne'}
                    </p>
                </motion.div>

                {
                    loading && (
                        <div className="min-h-[440px] flex justify-center items-center">
                            <Reordering />
                        </div>
                    )
                }

                <form ref={form} onSubmit={sendEmail} className={`flex flex-col gap-[25px] items-center max-w-[539px] w-full mx-auto ${loading ? 'hidden' : ''}`}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        id="name"
                        placeholder={language === 'en' ? 'Enter your full name' : 'Introdu numele tău complet'}
                        className='rounded-[14px] border-2 border-[#111204] px-[15px] py-[8px] font-medium w-full'
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder={language === 'en' ? 'Enter your email address' : 'Introdu adresa ta de email'}
                        className='rounded-[14px] border-2 border-[#111204] px-[15px] py-[8px] font-medium w-full'
                    />
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="message"
                        placeholder={language === 'en' ? 'Ask us what you want to know...' : 'Întreabă-ne ce dorești să afli...'}
                        className='rounded-[14px] min-h-[132px] border-2 border-[#111204] px-[15px] py-[8px] font-medium w-full'>
                    </textarea>
                    <div className="g-recaptcha scale-[0.7] xxs:scale-[0.8] cstm:scale-[1]" data-sitekey={import.meta.env.VITE_SITE_KEY}></div>
                    <div className="flex w-full items-center gap-[25px] justify-center cstm:gap-0 cstm:justify-between flex-wrap">
                        <motion.div
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0 }}>
                            <p className='text-[14px] text-[#111204] opacity-[0.6] font-medium cstm:max-w-[180px] text-center cstm:text-left'>
                                {language === 'en' ? 'We will reply via email in the shortest time.' : 'Îți vom răspunde prin email în cel mai scurt timp.'}
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('left', 0.2)}
                            initial='hidden'
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0 }}>
                            <button type="submit" className='bg-[#51FFF8] hover:bg-[#28b5af] text-black rounded-[30px] font-semibold px-[80px] cstm:px-[50px] py-[9px] cursor-pointer transition-all duration-75 ease-in'>
                                {language === 'en' ? 'Send' : 'Trimite'}
                            </button>
                        </motion.div>
                    </div>
                </form>

                <div className="xs:container xs:mx-auto rounded-[35px] bg-[#1E2008] py-[80px] z-[1] relative px-[30px] top-[70px] cstm:top-[100px]">
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className='flex flex-col gap-[30px] justify-center items-center '>
                        <p className='text-[34px] sm:text-[54px] lg:text-[64px] text-white font-semibold max-w-[260px] sm:max-w-[500px] text-center leading-10 sm:leading-18 z-[3]'>
                            {language === 'en'
                                ? (<>
                                    Become partners with <span className='whitespace-nowrap'>UI Prime</span>
                                </>)
                                : (<>
                                    Devino partener cu <span className='whitespace-nowrap'>UI Prime</span>
                                </>)
                            }
                        </p>
                        <p className='font-medium text-[14px] xs:text-[16px] sm:text-[18px] text-white opacity-[0.7] max-w-[260px] text-center z-[3]'>
                            {language === 'en' ? 'Book a meeting for free and start requesting right away!' : 'Programează o întâlnire gratuită și începem imediat!'}
                        </p>
                        <div className='z-[3]'>
                            <button
                                onClick={() => onScrollTo("contact-us")}
                                aria-label={language === 'en' ? 'Contact us' : 'Contactează-ne'}
                                className='flex gap-[10px] items-center bg-[#51FFF8] hover:bg-[#28b5af] text-[14px] xs:text-[16px] px-[40px] xxs:px-[62px] py-[12px] rounded-[8px] text-[#111204] font-semibold transition-all duration-100 ease-in cursor-pointer'>
                                {language === 'en' ? 'Contact Us' : 'Contactează-ne'}
                                <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </motion.div>

                    <img src={bgEllipse1} alt="" className='h-[420px] sm:h-[500px] w-full absolute top-0 left-1/2 transform z-[2] -translate-x-1/2' />
                </div>
            </section>
            <footer className='px-[15px] pt-[170px] pb-[30px] font-barlow'>
                <div className="flex flex-col gap-[50px] xs:container xs:mx-auto">
                    <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-[70px] md:gap-[100px] mb-[50px]">
                        <div className="flex flex-col gap-[20px]">
                            <img src={UiPrime} alt="UiPrime Logo - Professional Website Development" className='w-[80px] xxs:w-[100px] xs:w-[132px] lg:pt-0 mx-auto xs:mx-0' />
                            <h2 className='text-white font-medium max-w-[335px] pl-[5px] opacity-[0.8] xs:text-left text-center'>
                                {language === 'en'
                                    ? 'UI Prime - We aim to thrive as an IT Services providing company, in order to help enterprises and brands reach their maximum potential.'
                                    : 'UI Prime - Misiunea noastră este să fim în topul companiilor ce oferă servicii IT cu scopul de a ajuta afacerilor să-și atingă potențialul maxim.'}
                            </h2>

                        </div>
                        <div className="flex flex-wrap gap-[30px] lg:gap-[40px] text-white text-3xl order-last md:order-none md:max-w-[150px] lg:max-w-[240px] justify-center">
                            <FaReact />
                            <DiDjango />
                            <FaPhp />
                            <FaJsSquare />
                            <SiTailwindcss />
                            <BiLogoPostgresql />
                            <SiMysql />
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <a href='mailto:uiprime.online@gmail.com' className="flex gap-[10px] text-white items-center justify-center xs:justify-start">
                                <MdOutlineEmail className='text-xl' />
                                uiprime.online@gmail.com
                            </a>
                            <a href='tel:+37360053029' className="flex gap-[10px] text-white items-center justify-center xs:justify-start">
                                <CiPhone className='text-2xl' />
                                + (373) 600 53 029
                            </a>
                            <a href='https://www.instagram.com/uiprime.online/' target='_blank' className="flex gap-[10px] text-white items-center justify-center xs:justify-start">
                                <FaInstagram className='text-2xl' />
                                UI Prime
                            </a>
                        </div>
                    </div>
                    <span className='block w-full h-[1px] opacity-[0.6] bg-gray-400'></span>
                    <div className="flex flex-col items-center gap-[55px] lg:items-start lg:gap-[0px] lg:flex-row lg:justify-between">
                        <header>
                            <ul className='flex flex-wrap justify-center gap-[25px] items-center xs:container xs:mx-auto'>
                                <li className='text-white text-[16px] opacity-[0.9] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                                    <button onClick={() => onScrollTo("process")} className='cursor-pointer' aria-label="Learn about our process">
                                        {language === 'en' ? 'Process' : "Proces"}
                                    </button>
                                    <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                                </li>
                                <li className='text-white text-[16px] opacity-[0.9] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                                    <button onClick={() => onScrollTo("work-samples")} className='cursor-pointer' aria-label="See some of our work">
                                        {language === 'en' ? 'Work Samples' : 'Lucrări'}
                                    </button>
                                    <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                                </li>
                                <li className='text-white text-[16px] opacity-[0.9] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                                    <button onClick={() => onScrollTo("benefits")} className='cursor-pointer' aria-label="See what benefits you could recieve">
                                        {language === 'en' ? 'Benefits' : 'Beneficii'}
                                    </button>
                                    <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                                </li>
                                <li className='text-white text-[16px] opacity-[0.9] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                                    <button onClick={() => onScrollTo("testimonials")} className='cursor-pointer' aria-label="Learn about our reputation">
                                        {language === 'en' ? 'Testimonials' : 'Recenzii'}
                                    </button>
                                    <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                                </li>
                                <li className='text-white text-[16px] opacity-[0.9] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                                    <button onClick={() => onScrollTo("pricing")} className='cursor-pointer' aria-label="See pricing">
                                        {language === 'en' ? 'Pricing' : 'Prețuri'}
                                    </button>
                                    <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                                </li>
                                <li className='text-white text-[16px] opacity-[0.9] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                                    <button onClick={() => onScrollTo("contact-us")} className='cursor-pointer' aria-label="Contact us">
                                        {language === 'en' ? 'Contact Us' : 'Contactează-ne'}
                                    </button>
                                    <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                                </li>
                            </ul>
                        </header>
                        <p className='text-[16px] font-medium text-white opacity-[0.9] text-center xs:text-start'>
                            &copy; &nbsp;
                            {language === 'en'
                                ? '2025 UI Prime - All Rights Reserved'
                                : '2025 UI Prime - Toate drepturile rezervate'}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Contact;