import React, { useContext } from 'react'
import bulletpoint from '../assets/static-images/bulletpoint.svg'
import languageContext from '../contexts/languageContext'

const Pricing = ({ onScrollTo }) => {
    const { language } = useContext(languageContext);

    return (
        <section id='pricing' className='pt-[100px] pb-[80px] xs:container xs:mx-auto flex flex-col font-barlow px-[15px] gap-[60px]'>
            <div className="xs:container xs:mx-auto font-barlow flex flex-col gap-[10px]">
                <p className='text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-medium text-center uppercase text-[#51FFF8]'>Clear & Simple Pricing</p>
                <p className='text-white text-center text-[29px] xs:text-[33px] sm:text-[38px] md:text-[42px] xl:text-[48px] font-semibold xs:leading-14 '>Simple pricing to level up your brand.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-[50px] h-full">
                <div className="max-w-[360px] w-full rounded-[16px] border-[1px] border-[#51FFF8] bg-[#222222] flex flex-col gap-[25px] py-[35px] px-[25px] lg:min-h-[983px]">
                    <p className='text-[30px] xs:text-[34px] font-semibold text-white px-[15px] leading-none'>Landing Page</p>
                    <p className='text-[14px] font-medium text-white px-[15px] opacity-[0.8]'>
                        {language === 'en'
                            ? 'Because each project is individual and unique, prices are negotiable, and packages can be modified based on requirements.'
                            : 'Pentru că fiecare proiect este individual și unic, prețurile sunt negociabile, iar pachetele pot fi modificate în funcție de cerințe.'}
                    </p>
                    <span className='block w-full h-[1px] opacity-[0.8] bg-[#51FFF8]'></span>
                    <div className="flex flex-col px-[15px]">
                        <p className='text-[#51FFF8] text-[32px] xs:text-[36px] font-semibold'>
                            {language === 'en' ? 'From ' : 'De la '} <span className='text-[36px] xs:text-[40px]'>€50</span>
                        </p>
                        <p className='font-medium text-[14px] text-white opacity-[0.8]'>{language === 'en' ? 'One time fee' : 'Taxă unică'}</p>
                    </div>
                    <span className='block w-full h-[1px] opacity-[0.8] bg-[#51FFF8]'></span>
                    <div className="px-[15px] flex flex-col justify-between gap-[40px] h-full">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Creation time: 1 - 2 days' : 'Timp de creare: 1 - 2 zile'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Number of pages: 1' : 'Număr de pagini: 1'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Number of languages: 1' : 'Număr de limbi: 1'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>Mobile-responsive design</p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>Hosting Setup</p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? '15 days free support/administration' : '15 zile de suport/administrare gratuit'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'SEO integration' : 'Integrare SEO'}
                                </p>
                            </div>
                        </div>

                        <div className='w-full'>
                            <button
                                onClick={() => onScrollTo("contact-us")}
                                aria-label='Contact us'
                                className='text-[14px] xxs:text-[16px] w-full font-medium text-white rounded-[8px] border-[1px] px-[5px] border-[#51FFF8] py-[12px] hover:border-[#065c58] hover:bg-[#065c58] cursor-pointer hover:text-white transition-all duration-100 ease-in'>
                                {language === 'en' ? 'Book a Meeting For Free' : 'Rezervați o întâlnire gratuită'}
                            </button>
                        </div>

                    </div>
                </div>

                <div className="max-w-[360px] w-full rounded-[16px] border-[1px] border-[#51FFF8] bg-[#222222] flex flex-col gap-[25px] py-[35px] px-[25px] lg:min-h-[983px]">
                    <p className='text-[30px] xs:text-[34px] font-semibold text-white px-[15px] leading-none'>Content-Based</p>
                    <p className='text-[14px] font-medium text-white px-[15px] opacity-[0.8]'>
                        {language === 'en'
                            ? 'Because each project is individual and unique, prices are negotiable, and packages can be modified based on requirements.'
                            : 'Pentru că fiecare proiect este individual și unic, prețurile sunt negociabile, iar pachetele pot fi modificate în funcție de cerințe.'}
                    </p>
                    <span className='block w-full h-[1px] opacity-[0.8] bg-[#51FFF8]'></span>
                    <div className="flex flex-col px-[15px]">
                        <p className='text-[#51FFF8] text-[32px] xs:text-[36px] font-semibold'>
                            {language === 'en' ? 'From ' : 'De la '} <span className='text-[36px] xs:text-[40px]'>€250</span>
                        </p>
                        <p className='font-medium text-[14px] text-white opacity-[0.8]'>{language === 'en' ? 'One time fee' : 'Taxă unică'}</p>
                    </div>
                    <span className='block w-full h-[1px] opacity-[0.8] bg-[#51FFF8]'></span>
                    <div className="px-[15px] flex flex-col justify-between gap-[40px] h-full">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Creation time: 7 - 15 days' : 'Timp de creare: 7 - 15 zile'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Number of pages: 3 - 8' : 'Număr de pagini: 3 - 8'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Number of languages: 2' : 'Număr de limbi: 2'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? '20 products' : '20 produse'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>Mobile-responsive design</p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>Hosting Setup</p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? '1 month free support/administration' : '1 lună de suport/administrare gratuit'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'SEO integration' : 'Integrare SEO'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Admin panel' : 'Panou de administrare'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>Training</p>
                            </div>
                        </div>

                        <div className='w-full'>
                            <button
                                onClick={() => onScrollTo("contact-us")}
                                aria-label='Contact us'
                                className='text-[14px] xxs:text-[16px] w-full font-medium text-white rounded-[8px] border-[1px] border-[#51FFF8] px-[5px] py-[12px] hover:border-[#065c58] hover:bg-[#065c58] cursor-pointer hover:text-white transition-all duration-100 ease-in'>
                                {language === 'en' ? 'Book a Meeting For Free' : 'Rezervați o întâlnire gratuită'}
                            </button>
                        </div>

                    </div>
                </div>

                <div className="max-w-[360px] w-full rounded-[16px] border-[1px] border-[#51FFF8] bg-[#222222] flex flex-col gap-[25px] py-[35px] px-[25px] lg:min-h-[983px]">
                    <p className='text-[30px] xs:text-[34px] font-semibold text-white px-[15px] leading-none'>E-Commerce</p>
                    <p className='text-[14px] font-medium text-white px-[15px] opacity-[0.8]'>
                        {language === 'en'
                            ? 'Because each project is individual and unique, prices are negotiable, and packages can be modified based on requirements.'
                            : 'Pentru că fiecare proiect este individual și unic, prețurile sunt negociabile, iar pachetele pot fi modificate în funcție de cerințe.'}
                    </p>
                    <span className='block w-full h-[1px] opacity-[0.8] bg-[#51FFF8]'></span>
                    <div className="flex flex-col px-[15px]">
                        <p className='text-[#51FFF8] text-[32px] xs:text-[36px] font-semibold'>
                            {language === 'en' ? 'From ' : 'De la '}
                            <span className='text-[36px] xs:text-[40px]'>€500</span>
                        </p>
                        <p className='font-medium text-[14px] text-white opacity-[0.8]'>
                            {language === 'en' ? 'One time fee' : 'Taxă unică'}
                        </p>
                    </div>
                    <span className='block w-full h-[1px] opacity-[0.8] bg-[#51FFF8]'></span>
                    <div className="px-[15px] flex flex-col justify-between gap-[40px] h-full">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Creation time: 14 - 30 days' : 'Timp de creare: 14 - 30 zile'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Number of pages: 3 - 10' : 'Număr de pagini: 3 - 10'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Number of languages: 2' : 'Număr de limbi: 2'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? '40 products' : '40 produse'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>Mobile-responsive design</p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>Hosting Setup</p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? '1 month free support/administration' : '1 lună de suport/administrare gratuit'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'SEO integration' : 'Integrare SEO'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Admin panel' : 'Panou de administrare'}
                                </p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>Training</p>
                            </div>

                            <div className="flex gap-[10px]">
                                <img src={bulletpoint} alt="" className='w-[14px]' />
                                <p className='text-[16px] xxs:text-[18px] xs:text-[20.5px] font-medium text-white'>
                                    {language === 'en' ? 'Payment gateway integration' : 'Integrare payment gateway'}
                                </p>
                            </div>
                        </div>

                        <div className='w-full'>
                            <button
                                onClick={() => onScrollTo("contact-us")}
                                aria-label='Contact us'
                                className='text-[14px] xxs:text-[16px] w-full font-medium text-white rounded-[8px] px-[5px] border-[1px] border-[#51FFF8] py-[12px] hover:border-[#065c58] hover:bg-[#065c58] cursor-pointer hover:text-white transition-all duration-100 ease-in'>
                                {language === 'en' ? 'Book a Meeting For Free' : 'Rezervați o întâlnire gratuită'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;