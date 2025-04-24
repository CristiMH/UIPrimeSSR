import React, { useContext, useState, useEffect } from 'react';
import thunder from '../assets/static-images/thunder.svg';
import expert from '../assets/static-images/expert.svg';
import gear from '../assets/static-images/gear.svg';
import touch from '../assets/static-images/touch.svg';
import value from '../assets/static-images/value.svg';
import languageContext from '../contexts/languageContext';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Benefits = ({ onScrollTo }) => {
    const { language } = useContext(languageContext);

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
                        { en: 'System Design', ro: 'Proiectarea sistemelor' },
                        { en: 'Information Architecture', ro: 'Arhitectura informațională' },
                        { en: 'Web Programming', ro: 'Programare web' },
                        { en: 'CRM, CMS & ERP Systems', ro: 'Sisteme CRM, CMS și ERP' },
                        { en: 'SEO Integration', ro: 'Integrare SEO' },
                        { en: 'Hosting', ro: 'Hosting' }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#51FFF8] px-[23px] py-[8px] xs:px-[27px] xs:py-[12px] rounded-[8px]">
                            <h2 className='font-semibold text-black'>{language === 'en' ? item.en : item.ro}</h2>
                        </div>
                    ))}
                </motion.div>
            </section>

            <section className='flex flex-col gap-[20px] px-[15px] mt-[100px] xs:mt-[120px] xs:container xs:mx-auto font-barlow'>
                <p className='text-[18px] xs:text-[20px] md:text-[22px] lg:text-[24px] text-[#51FFF8] font-medium'>
                    {language === 'en' ? 'Benefits' : 'Beneficii'}
                </p>
                <div className="flex justify-between lg:flex-row flex-col lg:gap-[40px] gap-[15px]">
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }}>
                        <h2 className='lg:w-[1600px] xl:w-auto text-[24px] xxs:text-[28px] xs:text-[33px] md:text-[40px] xl:text-[48px] 2xl:text-[53px] font-semibold text-white'>
                            {language === 'en' ? 'Turn your business into a full-scale online enterprise' : 'Transformă-ți afacerea într-o companie online de succes'}
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0 }} className="flex flex-col justify-between lg:gap-0 gap-[15px]">
                        <h2 className='text-[16px] xs:text-[18px] md:text-[20px] xl:text-[24px] font-light text-[#FFFFFF] opacity-[0.8]'>
                            {language === 'en' ? 'Our team ensures an appealing, modern, fast and secure website.' : 'Echipa noastră asigură un website atractiv, modern, rapid și securizat.'}
                        </h2>
                        <div className='relative top-[25px] xl:-top-[10px]'>
                            <button
                                onClick={() => onScrollTo("pricing")}
                                className='bg-[#51FFF8] hover:bg-[#28b5af] text-[14px] xs:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] px-[32px] py-[8px] rounded-[8px] text-[#111204] font-semibold transition-all duration-100 ease-in cursor-pointer'>
                                {language === 'en' ? 'See pricing' : 'Vezi prețurile'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className='font-barlow flex flex-col items-center md:items-start md:flex-row md:flex-wrap justify-center gap-[80px] 2xl:gap-[120px] px-[15px] pt-[120px] xs:pt-[140px] pb-[100px] xs:container xs:mx-auto'>
                {[
                    {
                        img: touch, en: 'Fast. Responsive. Reliable.', ro: 'Rapid. Responsiv. Eficient.',
                        enDesc: 'By leveraging modern web technologies and optimizing performance, we ensure your site is responsive, engaging, and efficient.',
                        roDesc: 'Prin utilizarea tehnologiilor web moderne și optimizarea performanței, ne asigurăm că site-ul tău este responsiv, atractiv și eficient.'
                    },
                    {
                        img: expert, en: 'Expert turnovers', ro: 'Rezultate excepționale',
                        enDesc: 'With a focus on efficiency and precision, we deliver high-quality websites within set deadlines, allowing your business to launch and grow without unnecessary delays.',
                        roDesc: 'Cu un accent pe eficiență și precizie, livrăm site-uri web de calitate înaltă în termenii stabiliți, permițând afacerii tale să se lanseze și să crească fără întârzieri inutile.'
                    },
                    {
                        img: gear, en: 'Customized for you', ro: 'Personalizat pentru tine',
                        enDesc: 'Our web solutions are fully customized to meet your unique business needs. From design to functionality, we work to create a website that reflects your brand and enhances your online presence.',
                        roDesc: 'Soluțiile noastre web sunt complet personalizate pentru a răspunde nevoilor unice ale afacerii tale. De la design la funcționalitate, lucrăm pentru a crea un site care reflectă brandul tău și îți îmbunătățește prezența online.'
                    },
                    {
                        img: thunder, en: 'Top-notch quality', ro: 'Calitate înaltă',
                        enDesc: 'High-end work from a dedicated team of experienced engineers that have the objective of seeing your brand thrive.',
                        roDesc: 'Lucrări de înaltă calitate realizate de o echipă dedicată de ingineri cu experiență, având ca obiectiv dezvoltarea brandului tău.'
                    },
                    {
                        img: value, en: 'Great value for money', ro: 'Raport calitate-preț excelent',
                        enDesc: 'Delivering exceptional websites that offer great value for money, we focus on balancing quality and affordability.',
                        roDesc: 'Oferim pagini web excepționale cu un raport calitate-preț excelent, punând accent pe echilibrul între calitate și accesibilitate.'
                    }
                ].map((benefit, index) => (
                    <div key={index} className="flex flex-col gap-[20px] max-w-[310px]">
                        <img src={benefit.img} alt="" className='w-[50px] h-[50px]' />
                        <p className='text-[26px] font-medium text-white'>{language === 'en' ? benefit.en : benefit.ro}</p>
                        <h2 className='text-[16px] xs:text-[18px] font-light text-[#FFFFFF] opacity-[0.8]'>
                            {language === 'en' ? benefit.enDesc : benefit.roDesc}
                        </h2>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Benefits;