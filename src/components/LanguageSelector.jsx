import React, { useContext, useEffect, useState } from 'react'
import languageContext from '../contexts/languageContext'

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(languageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('language', e.target.value)
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

          {
            language === 'en' && (
              <>
                <option className='bg-[#1E2008]' value="en">English</option>
                <option className='bg-[#1E2008]' value="ro">Română</option>
              </>
            )
          }

          {
            language === 'ro' && (
              <>
                <option className='bg-[#1E2008]' value="ro">Română</option>
                <option className='bg-[#1E2008]' value="en">English</option>
              </>
            )
          }
        </select>
      </div>
    </section>
  );
};


export default LanguageSelector