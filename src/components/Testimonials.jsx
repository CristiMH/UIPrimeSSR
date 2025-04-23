import React, { useContext, useState, useEffect } from 'react';
import languageContext from '../contexts/languageContext';

const Testimonials = () => {
    const { language } = useContext(languageContext);

    return (
        <section id="testimonials" className='bg-white flex flex-col gap-[50px] pt-[60px] pb-[40px] px-[15px] font-barlow'>
            <div className="xs:container xs:mx-auto font-barlow flex flex-col gap-[10px]">
                <p className='text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-medium text-center uppercase'>
                    {language === 'en' ? 'Testimonials' : 'Recenzii'}
                </p>
                <p className='text-center text-[29px] xs:text-[33px] sm:text-[38px] md:text-[42px] xl:text-[48px] font-semibold xs:leading-14 max-w-[300px] xs:max-w-[400px] mx-auto'>
                    {language === 'en'
                    ? (
                        <>
                            Customers Are Our <span className='whitespace-nowrap'>Top Priority</span>
                        </>
                    ) : (
                        <>
                            Clienții noștri sunt prioritatea noastră
                        </>
                    )}
                </p>
            </div>

            <div className="flex justify-center items-center text-[16px] xxs:text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] opacity-[0.5] my-[80px] text-center">
                {language === 'en' ? 'No Testimonials Yet - But We Are Working On It' : 'Încă Nu Avem Recenzii - Dar Lucrăm La Asta'}
            </div>
        </section>
    );
};

export default Testimonials;