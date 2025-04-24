import React, { useState, useEffect, useContext } from 'react'
import UiPrime from '../assets/static-images/uiprime.png'
import bgEllipse1 from '../assets/static-images/bgEllipse1.png'
import Star2 from '../assets/static-images/Star2.png'
import Star1 from '../assets/static-images/Star1.png'
import Star from '../assets/static-images/Star.png'
import rocket from '../assets/static-images/rocket.svg'
import refresh from '../assets/static-images/refresh.svg'
import write from '../assets/static-images/write.svg'
import ResponsiveMenu from './ResponsiveMenu'
import languageContext from '../contexts/languageContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Top = ({ onScrollTo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useContext(languageContext);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <div className='relative font-barlow'>
            <nav className='flex justify-between xs:container items-center xs:mx-auto p-[15px]'>
                <img src={UiPrime} alt="UiPrime Logo - Professional Website Development" className='w-[80px] xxs:w-[100px] xs:w-[132px] lg:pt-0' />

                <header className='hidden lg:block'>
                    <ul className='flex gap-[32px] items-center'>
                        <li className='text-white text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                            <button onClick={() => onScrollTo("process")} className='cursor-pointer' aria-label="Learn about our process">
                                {language === 'en' ? 'Process' : "Proces"}
                            </button>
                            <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                        </li>
                        <li className='text-white text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                            <button onClick={() => onScrollTo("work-samples")} className='cursor-pointer' aria-label="See some of our work">
                                {language === 'en' ? 'Work Samples' : 'Lucrări'}
                            </button>
                            <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                        </li>
                        <li className='text-white text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                            <button onClick={() => onScrollTo("benefits")} className='cursor-pointer' aria-label="See what benefits you could recieve">
                                {language === 'en' ? 'Benefits' : 'Beneficii'}
                            </button>
                            <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                        </li>
                        <li className='text-white text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                            <button onClick={() => onScrollTo("testimonials")} className='cursor-pointer' aria-label="Learn about our reputation">
                                {language === 'en' ? 'Testimonials' : 'Recenzii'}
                            </button>
                            <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                        </li>
                        <li className='text-white text-[20px] opacity-[0.7] cursor-pointer hover:opacity-[1] duration-75 ease-in transition-all group relative'>
                            <button onClick={() => onScrollTo("pricing")} className='cursor-pointer' aria-label="See pricing">
                                {language === 'en' ? 'Pricing' : 'Prețuri'}
                            </button>
                            <span className='block absolute -bottom-1 left-0 w-0 h-[2px] opacity-[0.8] bg-white transition-all duration-150 ease-in group-hover:w-full'></span>
                        </li>
                        <li>
                            <button
                                onClick={() => onScrollTo("contact-us")}
                                aria-label="Contact us"
                                className='bg-[#51FFF8] hover:bg-[#28b5af] uppercase px-[20px] py-[8px] rounded-[8px] text-[#111204] font-semibold transition-all duration-100 ease-in cursor-pointer'>
                                {language === 'en' ? 'Contact Us' : 'Contactează-ne'}
                            </button>
                        </li>
                    </ul>
                </header>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 w-[30px] h-[20px] flex flex-col justify-center items-center cursor-pointer lg:hidden xs:-mt-[10px] lg:mt-0"
                >
                    <div className="relative w-[30px] h-[20px]">
                        <span className={`absolute left-0 w-full h-[2px] xs:h-[3px] bg-[#51FFF8] rounded transition-all duration-300 ${isOpen ? "rotate-45 top-[7px] xs:top-[9px]" : "top-0"}`}></span>

                        <span className={`absolute left-0 w-full h-[2px] xs:h-[3px] bg-[#51FFF8] rounded transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : "top-[7px] xs:top-[9px]"}`}></span>

                        <span className={`absolute left-0 w-full h-[2px] xs:h-[3px] bg-[#51FFF8] rounded transition-all duration-300 ${isOpen ? "-rotate-45 top-[7px] xs:top-[9px]" : "top-[14px] xs:top-[18px]"}`}></span>
                    </div>
                </button>

                <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} onScrollTo={onScrollTo}/>
            </nav>

            <section className='xs:container xs:mx-auto flex flex-col gap-[35px] sm:gap-[55px] pt-[15px] xxs:pt-[30px] md:pt-[60px] relative xl:max-w-[1058px] px-[10px]'>
                <motion.div 
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{once: false, amount: 0}}>
                    <h1 className="font-semibold text-white text-[35px] xxs:text-[40px] xs:text-[50px] md:text-[69px] lg:text-[91px] xl:text-[96px] max-w-[1038px] mx-auto text-center">
                        {language === "en" ? (
                            <>
                                Discover The Power Of A <span className="whitespace-nowrap">Well-Structured</span> Website
                            </>
                        ) : (
                            <>
                                Descoperă Puterea Unui Website Bine Structurat
                            </>
                        )}
                    </h1>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{once: false, amount: 0}}>
                    <h2 className='text-white opacity-[0.8] text-[16px] xxs:text-[18px] xs:text-[20px] md:text-[22px] lg:text-[24px] max-w-[450px] sm:max-w-[500px] lg:max-w-[695px] text-center mx-auto'>
                        {language === "en" ?
                            'We increase revenue and ensure sustainable long-term growth for your business through powerful  websites.'
                            : 'Creștem veniturile și asigurăm o creștere sustenabilă pe termen lung pentru afacerea ta prin website-uri puternice.'}
                    </h2>
                </motion.div>
                <motion.div 
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{once: false, amount: 0}}
                    className="w-full text-center relative">
                    <button onClick={() => onScrollTo("contact-us")}
                        className='bg-[#51FFF8] hover:bg-[#28b5af] text-[16px] xxs:text-[18px] xs:text-[20px] md:text-[22px] lg:text-[24px] px-[32px] py-[8px] rounded-[8px] text-[#111204] font-semibold transition-all duration-100 ease-in cursor-pointer'>
                        {language === 'en'
                            ? 'Book a meeting for free'
                            : 'Programează o întâlnire'}
                    </button>
                    <img src={Star} alt="" className="absolute hidden sm:block top-[20px] right-[80px] md:top-[20px] md:right-[150px] lg:right-[280px] xl:right-[295px] transform -z-10" />
                    <img src={Star1} alt="" className="absolute hidden sm:block top-[1px] left-[80px] md:top-[1px] md:left-[160px] transform -z-10" />
                </motion.div>

                <img src={Star2} alt="" className="absolute hidden sm:block top-[60px] right-[20px] md:top-[100px] md:right-[35px] lg:top-[108px] lg:right-[43px] xl:right-[33px] transform -z-10 w-[55px] md:w-[65px] lg:w-auto" />
            </section>

            <section id="process" className='flex flex-col gap-[20px] px-[15px] pt-[100px] xs:pt-[120px] xs:container xs:mx-auto'>
                <p className='text-[18px] xs:text-[20px] md:text-[22px] lg:text-[24px] text-[#51FFF8] font-medium'>
                    {language === 'en' ? 'How we work' : 'Cum lucrăm'}
                </p>
                <div className="flex justify-between lg:flex-row flex-col lg:gap-[40px] gap-[15px]">
                    <h2 className='lg:w-[1600px] xl:w-auto text-[24px] xxs:text-[28px] xs:text-[33px] md:text-[40px] xl:text-[48px] 2xl:text-[54px] font-semibold text-white'>
                        {language === 'en' 
                        ? 'Get a dedicated website development service at a fraction of the cost' 
                        : 'Obține un serviciu dedicat de dezvoltare web la un preț redus'}
                    </h2>
                    <div className="flex flex-col justify-between lg:gap-0 gap-[15px]">
                        <h2 className='text-[16px] xs:text-[18px] md:text-[20px] xl:text-[24px] font-light text-[#FFFFFF] opacity-[0.8]'>
                            {language === 'en'
                            ? 'Grow your brand with high-quality websites for a minimal fee. Work with experienced designers and engineers. Contact us and make as many requests as you need - no limits.'
                            : 'Dezvoltă-ți brandul cu un website de calitate înaltă la un preț redus. Lucrează cu designeri și ingineri cu experiență. Contactează-ne și fă oricâte cereri ai nevoie – fără limite.'}
                        </h2>
                        <div onClick={() => onScrollTo("pricing")} className='relative lg:-top-[10px] xl:-top-[13px] 2xl:-top-[15px]'>
                            <button
                                className='bg-[#51FFF8] hover:bg-[#28b5af] text-[14px] xs:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] px-[32px] py-[8px] rounded-[8px] text-[#111204] font-semibold transition-all duration-100 ease-in cursor-pointer'>
                                {language === 'en' 
                                ? 'See pricing'
                                : 'Vezi prețurile'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center md:items-start md:flex-row md:flex-wrap justify-center gap-[80px] xl:gap-[150px] 2xl:gap-[200px] px-[15px] pt-[100px] xs:pt-[120px] pb-[100px] xs:container xs:mx-auto'>
                <div className="flex flex-col gap-[20px] max-w-[283px] lg:mr-[120px] xl:mr-0">
                    <div className="bg-[#51FFF8] w-[93px] h-[93px] flex items-center justify-center rounded-full">
                        <img src={rocket} alt="" />
                    </div>
                    <p className='text-[26px] font-medium text-white'>
                        {language === 'en' 
                        ? 'Contact us & get started'
                        : 'Contactează-ne & începe'}
                    </p>
                    <h2 className='text-[16px] xs:text-[18px] font-light text-[#FFFFFF] opacity-[0.8]'>
                        {language === 'en'
                        ? 'Submit as many design tasks as you need until the perfection is accomplished, without worrying about additional fees.'
                        : 'Trimite oricâte modificări de design ai nevoie până când perfecțiunea este îndeplinită, fără griji legate de costuri suplimentare'}
                    </h2>
                </div>

                <div className="flex flex-col gap-[20px] max-w-[283px]">
                    <div className="bg-[#51FFF8] w-[93px] h-[93px] flex items-center justify-center rounded-full">
                        <img src={write} alt="" />
                    </div>
                    <p className='text-[26px] font-medium text-white'>
                        {language === 'en' 
                        ? 'Web programming'
                        : 'Programare web'}
                    </p>
                    <h2 className='text-[16px] xs:text-[18px] font-light text-[#FFFFFF] opacity-[0.8]'>
                        {language === 'en'
                        ? 'Our engineers start the process of transforming the design to a fully  functional  website.'
                        : 'Inginerii noștri încep procesul de transformare a design-ului într-un website complet funcțional'}
                    </h2>
                </div>

                <div className="flex flex-col gap-[20px] max-w-[283px]">
                    <div className="bg-[#51FFF8] w-[93px] h-[93px] flex items-center justify-center rounded-full">
                        <img src={refresh} alt="" />
                    </div>
                    <p className='text-[26px] font-medium text-white'>
                        {language === 'en' 
                        ? 'Deployment setup'
                        : 'Configurare și lansare'}
                    </p>
                    <h2 className='text-[16px] xs:text-[18px] font-light text-[#FFFFFF] opacity-[0.8]'>
                        {language === 'en'
                        ? 'Our engineers handle the hosting setup for your website.'
                        : 'Inginerii noștri se ocupă de hosting, astfel încât website-ul tău să fie online rapid.'}
                    </h2>
                </div>
            </section>

            <img src={bgEllipse1} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-[1112px] h-[791px]" />
        </div>
    )
}

export default Top;