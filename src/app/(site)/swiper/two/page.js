'use client';

import SwiperTwo from '@/components/swipers/swiperTwo/swiperTwo';


const Page = () => {

    let slides = [{
            _id : 1,
            title : 'Slide 1',
            color: 'green'
        },
        {
            _id : 1,
            title : 'Slide 2',
            color: 'red'
        },
        {
            _id : 2,
            title : 'Slide 3',
            color: 'red'
        },
        {
            _id : 3,
            title : 'Slide 4',
            color: 'red'
        }
    ]

    return (
        <div>
            <h1>Swiper.js</h1>

            <h1>Swiper Two</h1>
            <SwiperTwo slides={slides}></SwiperTwo>
      


        </div>
    )
};
export default Page