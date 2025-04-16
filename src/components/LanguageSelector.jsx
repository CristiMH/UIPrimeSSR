import React, { useContext } from 'react'
import languageContext from '../contexts/languageContext'

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(languageContext)

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    };

    return (
        <section className='bg-transparent py-[5px] px-[15px] xs:container xs:mx-auto font-barlow'>
            <div className="ml-auto w-[80px] xxs:w-[90px] xs:w-[95px]">
                <select 
                    name="lang" 
                    id="lang" 
                    value={language}
                    onChange={handleChange}
                    className='text-white w-full text-[12px] xxs:text-[13px] xs:text-[14px] outline-none opacity-[0.6] tracking-wider cursor-pointer'
                >
                    <option className='bg-[#1E2008] font-barlow tracking-widest' value="en">English</option>
                    <option className='bg-[#1E2008] font-barlow tracking-widest' value="ro">Română</option>
                </select>
            </div>
        </section>
    )
}

export default LanguageSelector;