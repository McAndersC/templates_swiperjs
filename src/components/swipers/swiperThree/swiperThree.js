'use client';
import styles from './swiperThree.module.css';

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';


const SwiperThree = ({slides}) => {

    
    useEffect(() => {
       
        register();
      
    }, []) 

    return (
        <div className={styles.container}>
                <swiper-container
                        slides-per-view={1}
                        loop
                        autoplay
                    >
                    <swiper-slide>
                        <div style={{backgroundColor:"red"}}>
                            <h1>Slide 1</h1>
                        </div>
                    </swiper-slide>   
                    <swiper-slide>
                        <div style={{backgroundColor:"blue"}}>
                            <h1>Slide 2</h1>
                        </div>
                    </swiper-slide>  
                    <swiper-slide>
                        <div style={{backgroundColor:"green"}}>
                            <h1>Slide 3</h1>
                        </div>
                    </swiper-slide>  
                </swiper-container>

        </div>
    )
};
export default SwiperThree