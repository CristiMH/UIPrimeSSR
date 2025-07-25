import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../contexts/languageContext';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Benefits = ({ onScrollTo }) => {
    const { language } = useContext(languageContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [infoRO, setInfoRO] = useState([]);
    const [infoEN, setInfoEN] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch('/website_services_descriptions.json')
            .then((res) => res.json())
            .then((data) => {
                setInfoRO(data.infoRO);
                setInfoEN(data.infoEN);
                setShow(true);
            })
            .catch((err) => console.error('Failed to load descriptions:', err));
    }, []);


    return (
        <>
            <section id='benefits' className='pt-[60px] xs:container xs:mx-auto flex flex-col font-barlow px-[15px]'>
                <p className='uppercase text-[#51FFF8] font-medium text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] text-center'>
                    {language === 'en' ? 'Our capabilities' : 'Capacitățile noastre'}
                </p>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }}>
                    <p className='text-[38px] xs:text-[44px] sm:text-[50px] md:text-[54px] font-semibold text-white text-center'>
                        {language === 'en' ? 'We can help you with...' : 'Vă putem ajuta cu...'}
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0 }} className="flex flex-wrap justify-center gap-[20px] mt-[35px]">
                    {[
                        { en: 'Website Development', ro: 'Creare Website' },
                        { en: 'Website Maintenance', ro: 'Mentenanță Website' },
                        { en: 'SEO Integration', ro: 'Integrare SEO' },
                        { en: 'Web Hosting', ro: 'Web Hosting' },
                        { en: 'Databases', ro: 'Baze de date' }
                    ].map((item, idx) => (
                        <div key={idx} onClick={() => setCurrentIndex(idx)} className="bg-[#51FFF8] px-[23px] py-[8px] xs:px-[27px] xs:py-[12px] rounded-[8px] cursor-pointer hover:bg-[#28b5af] transition-all duration-75 ease-in">
                            <h2 className='font-semibold text-black'>{language === 'en' ? item.en : item.ro}</h2>
                        </div>
                    ))}
                </motion.div>
            </section>

            {
                show && (
                    <section className='text-white font-barlow flex flex-col items-center justify-center gap-[30px] px-[15px] pt-[80px] pb-[100px] xs:container xs:mx-auto'>
                        <p className='text-[28px] xs:text-[34px] sm:text-[40px] md:text-[44px] font-semibold text-[#51FFF8] text-center'>{language === 'en' ? infoEN[currentIndex].title : infoRO[currentIndex].title}</p>
                        <p className='text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] text-center  max-w-[1000px]'>{language === 'en' ? infoEN[currentIndex].descriere : infoRO[currentIndex].descriere}</p>
                    </section>
                )
            }
        </>
    );
};

export default Benefits;