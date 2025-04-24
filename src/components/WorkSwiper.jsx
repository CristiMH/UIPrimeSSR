import React, { useState, useRef, useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import '../styles.css'
import first from '../assets/static-images/1.png'
import second from '../assets/static-images/2.png'
import third from '../assets/static-images/3.png'
import fourth from '../assets/static-images/4.png'
import fifth from '../assets/static-images/5.png'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Zoom } from 'yet-another-react-lightbox/plugins'
import languageContext from '../contexts/languageContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const images = [first, second, third, fourth, fifth]

const WorkSwiper = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);
  const { language } = useContext(languageContext);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="work-samples" className="bg-white flex flex-col gap-[50px] pt-[60px] pb-[40px] px-[15px]">
      <div className="xs:container xs:mx-auto font-barlow flex flex-col gap-[10px]">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
          <p className="text-center text-[33px] xs:text-[36px] sm:text-[45px] md:text-[56px] xl:text-[64px] font-semibold leading-none">
            {language === 'en' ? (
              <>Some samples of <span className="whitespace-nowrap">our work</span></>
            ) : (
              <>Câteva exemple din lucrările noastre</>
            )}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}>
          <h2 className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] xl:text-[24px] font-medium text-center">
            {language === 'en'
              ? 'We help our clients grow their enterprise with clear and modern websites.'
              : 'Ajutăm clienții noștri să-și dezvolte afacerea cu pagini web calitative și moderne.'}
          </h2>
        </motion.div>
      </div>

      <p className="text-center text-[14px] sm:text-[16px] opacity-[0.5]">
        {language === 'en' ? 'Press image for full preview' : 'Apasă pe imagine pentru previzualizare'}
      </p>

      {
        isClient && (
          <>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              initialSlide={window.innerWidth > 550 ? 1 : 0}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className="mySwiper -mt-[40px]"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {images.map((image, idx) => (
                <SwiperSlide key={idx} onClick={() => { setIndex(idx); setOpen(true); }}>
                  <img src={image} alt="Sample - Website Development" className="cursor-pointer" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Lightbox
              open={open}
              close={() => setOpen(false)}
              index={index}
              on={{
                view: ({ index: newIndex }) => {
                  setIndex(newIndex);
                  swiperRef.current?.slideTo(newIndex);
                },
              }}
              slides={images.map((img) => ({ src: img }))}
              plugins={[Zoom]}
            />
          </>
        )
      }
    </section>
  );
};

export default WorkSwiper