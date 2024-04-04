'use client';
import styles from './swiperTwo.module.css';

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

const SwiperTwo = ({slides}) => {

    // Reference til swiper elementet.
    const swiperRef = useRef(null);

    useEffect(() => {
       
        register();
      
    }, []) 

    const slideTo = (index) => {

        swiperRef.current.swiper.slideTo(index, 1000);
    }

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

                <h3>Slide to</h3>

                <div onClick={ () => slideTo(1)}>SLIDE TO index=1</div>

                <h3>Dot Navigation Manuel</h3>

                <div>
                    <div onClick={ () => slideTo(0)}>DOT</div>
                    <div onClick={ () => slideTo(1)}>DOT</div>
                    <div onClick={ () => slideTo(2)}>DOT</div>
                </div>

                <h3>Dot Navigation Dynamisk</h3>

                <div>
                    {slides.map((slide, index) => {
                        return (
                            <div key={index} onClick={ () => slideTo(index)}>DOT ({index})</div>
                        )
                    })}
                </div>
        </div>
    )
};
export default SwiperTwo