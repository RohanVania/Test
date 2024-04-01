import React, { useRef } from 'react'
import "./Testimonial.scss"
import { urlFor, fetchTestimonials } from "../../client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Navigation } from 'swiper/modules';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion"

import 'swiper/css';
import 'swiper/css/effect-creative'
import 'swiper/css/navigation'
import { useQuery } from '@tanstack/react-query';
import AppWrapper from '../../wrapper/AppWrapper';

function Testimonial() {

    const slideRef = useRef();
    const { data, isLoading, error } = useQuery({
        queryKey: ['testimonials'],
        queryFn: fetchTestimonials,
        staleTime:Infinity
    })

    console.log(data)


    return (
        <>
            <motion.div id='Testional_Section' className='   tw-w-full tw-h-full tw-px-4'
                whileInView={{opacity:[0,1],y:[100,0]}}
                transition={{duration:0.7, ease:'linear',delay:0.1}}
            >
                <div className=''>
                    <h1 className='head-text'>My <span>Interests</span></h1>
                </div>

                <div className='tw-bg-[#fff] sm:max:tw-max-w-[1050px] lg:tw-max-w-[950px] tw-w-[400px tw-min-h-[320px]  tw-flex tw-items-center tw-mx-auto tw-mt-[3rem] tw-rounded-lg tw-overflow-hidden tw-shadow-[0_0_30px_rgba(0,0,0,0.1)]'>

                    <Swiper className='tw-w-full  tw-h-full tw-overflow-hidden '
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                translate: ['-200%', 0, -1],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            }
                        }}

                        onSwiper={it => (slideRef.current = it)}
                        navigation={false}
                        slidesPerView={1}
                        loop
                        spaceBetween={10}
                        speed={600}
                        // threshold={50}
                        modules={[EffectCreative, Navigation]}
                        watchOverflow={true}

                    >
                        {
                            data?.map((el, indx) => {
                                return <SwiperSlide className=' tw-w-full tw-h-full  tw-bg-[#fff] tw-p-[32px]' key={indx}>
                                    <div className='tw-w-full tw-h-full tw-flex tw-flex-col  xs:tw-flex-row tw-gap-y-4  tw-gap-x-4 '>
                                        <div className=' xs:tw-self-center xs:tw-px-0 2xs:tw-px-3'>
                                            <div className='tw-w-[85px] tw-aspect-square 2xs:tw-w-[95px]    '>
                                                <img src={urlFor(el.imgurl)} alt='img1' className='tw-w-full tw-h-full tw-object-cover tw-rounded-full' />
                                            </div>
                                        </div>
                                        <div className='tw-flex tw-flex-col  tw-gap-y-5 tw-justify-between tw-w-full 2xs:tw-px-3'>
                                            <div className=' '>
                                                <p className='p-text tw-text-[rgb(3,3,3)] tw-text-[14px] 2xs:tw-text-[17px] text-sm:tw-text-[20px] tw-font-[400]'>{el.feedback}</p>
                                            </div>
                                            <div>
                                                <h1 className='bold-text tw-text-[#313bac] 2xs:tw-text-[18.3px]'>{el.name}</h1>
                                                <p className='p-text 2xs:tw-text-[16px]'>{el.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }

                    </Swiper>
                </div>
                <div className=' tw-mt-[3.7rem] tw-flex tw-gap-x-8 tw-justify-center'>
                    <div className='tw-w-[60px] tw-aspect-square tw-bg-[#fff] tw-rounded-full tw-flex tw-justify-center tw-items-center hover:tw-bg-[#313bAC] tw-text-[#313Bac] hover:tw-text-white tw-cursor-pointer tw-duration-75'
                        onClick={() => slideRef.current?.slideNext()}
                    >
                        <RiArrowLeftSLine className='tw-text-[22px]  tw-duration-75' />
                    </div>
                    <div className='tw-w-[60px] tw-aspect-square  tw-bg-[#fff] tw-rounded-full tw-flex tw-justify-center tw-items-center tw-text-[#313Bac] hover:tw-bg-[#313bAC] tw-cursor-pointer hover:tw-text-white tw-duration-75'
                        onClick={() => slideRef.current?.slidePrev()}
                    >
                        <RiArrowRightSLine className='tw-text-[22px]  tw-duration-75' />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AppWrapper(Testimonial,'Testimonial')