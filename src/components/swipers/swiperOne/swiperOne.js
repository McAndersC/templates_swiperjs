'use client';
import styles from './swiperOne.module.css';

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState, useRef } from 'react';


const Aslide = ({slide}) => {
    return (
        <div className={styles.aslide} style={{backgroundColor: slide.color}}>
            <h1>{slide.title}</h1>
        </div>
    )
}

const SwiperOne = ({slides}) => {

    // Reference til swiper elementet.
    const swiperRef = useRef(null);
    // State til at holde vinduesstørrelsen
    const [windowDimensions, setWindowDimensions] = useState({});

    useEffect(() => {
       
        register();
      
    }, []) 

    // Opdaterer vinduesstørrelsen når komponentet er mounted
    useEffect(() => {

        // Vi er frække og kalder en event, så swiper opdaterer sig selv
        window.dispatchEvent(new Event('resize'));
        
    }, [])

    useEffect(() => {
        
        // Henter information fra windows objektet.
        const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
            return {
                width,
                height
            };
        }

        // Kalder denne funktion hver gang browseren ændres i størrelse
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        // Lytter på vinduesstørrelse via window objektet
        window.addEventListener('resize', handleResize);

        // Fjerne eventlistener når komponentet unmountes/ryddes op
        return () => window.removeEventListener('resize', handleResize);

    }, [windowDimensions]);

    useEffect(() => {

        console.log('Dimensioner', windowDimensions)
        let swiperParams = swiperRef.current.swiper.params;


        if (windowDimensions.width < 768 ) {

            swiperParams.slidesPerView = 2;
          
        } else if (windowDimensions.width > 768 && windowDimensions.width < 1024) {

            swiperParams.slidesPerView = 3;

        } else if (windowDimensions.width > 1024 ) {

            swiperParams.slidesPerView = 5;
          
        } 

    }, [windowDimensions])


    return (
        <div className={styles.container}>
                <swiper-container
                        slides-per-view={1}
                        loop
                        autoplay
                        slides-per-group={1}
                        ref={swiperRef} 
                    >

                     
                        {slides.map((slide, index) => {
                            return (
                                <swiper-slide key={index}>
                                    <Aslide slide={slide}></Aslide>
                                </swiper-slide>   
                            )
                        })}
                </swiper-container>
        </div>
    )
};
export default SwiperOne