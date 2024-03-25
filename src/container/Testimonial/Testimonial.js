import React,{useRef} from 'react'
import "./Testimonial.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Navigation } from 'swiper/modules';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import 'swiper/css';
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'

function Testimonial() {

    const slideRef=useRef();


    return (
        <>
            <div id='Testional_Section' className=''>
                <div className=''>
                    <h1 className='head-text'>My <span>Interests</span></h1>
                </div>

                <div className='tw-bg-red-40  sm:max:tw-w-[950px] lg:tw-w-[950px] tw-h-[320px] tw-mx-auto tw-mt-[3rem] tw-rounded-lg tw-overflow-hidden'>

                    <Swiper className='tw-w-full  tw-h-full tw-overflow-hidden ' grabCursor={true} effect={'creative'} creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ['-200%', 0, -1],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        }
                    }}
                        
                        navigation={true}
                        slidesPerView={1}
                        loop
                        spaceBetween={10}
                        speed={600}
                        threshold={50}
                        modules={[EffectCreative,Navigation]}
                        watchOverflow={true}

                    >
                        <SwiperSlide className='tw-bg-green-300 tw-w-full tw-h-full tw-px-'>Slide 1</SwiperSlide>
                        <SwiperSlide className='tw-bg-pink-300 tw-w-full tw-h-full tw-px-'>Slide 2</SwiperSlide>
                        <SwiperSlide className='tw-bg-yellow-300 tw-w-full tw-h-full tw-px-'>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
                <div className=' tw-mt-[1.7rem] tw-flex tw-gap-x-8 tw-justify-center'>
                    <div className='tw-w-[60px] tw-aspect-square tw-bg-[#fff] tw-rounded-full tw-flex tw-justify-center tw-items-center hover:tw-bg-[#313bAC] tw-duration-75'>
                        <RiArrowLeftSLine className='tw-text-[22px] hover:tw-text-white tw-text-[#313Bac] tw-duration-75' />
                    </div>
                    <div className='tw-w-[60px] tw-aspect-square  tw-bg-[#fff] tw-rounded-full tw-flex tw-justify-center tw-items-center hover:tw-bg-[#313bAC] tw-duration-75'>
                        <RiArrowRightSLine className='tw-text-[22px] hover:tw-text-white tw-text-[#313Bac] tw-duration-75' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial