import React from 'react'
import {motion} from "framer-motion"
import { urlFor } from "../../client"
import AppWrapper from '../../wrapper/AppWrapper'



function Work({element}) {


    return (
        <>
            <div className='tw-w-full'>
                <h1 className='head-text'>Skills & Experience </h1>

                <div className='tw-flex tw-justify-center   tw-w-full  tw-flex-wrap tw-gap-x-[90px] tw-gap-y-[40px] tw-mt-[3rem]'>
                    {/* Skills Div */}
                    <div className='tw-flex sm:tw-max-w-[500px]  tw-flex-wrap tw-gap-x-3 tw-gap-y-4  tw-justify-center md:tw-justify-start  tw-py-[30px] tw-px-[10px] 2xs:tw-px-[20px] '>
                        {
                            // Each Skill
                            element?.map((el, indx) => {
                                return <motion.div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-3  tw-px-3 ' key={indx}
                                    whileInView={{opacity:[0,1],x:[-100,0],y:[-100,0]}}
                                    transition={{duration:0.2,delay:indx*0.14,ease:'linear'}}
                                >
                                    <div className='tw-w-[70px] tw-h-[70px] sm:tw-w-[80px] sm:tw-h-[80px] tw-bg-[#fff] tw-rounded-full tw-flex tw-flex-col tw-justify-center '>
                                        <img src={urlFor(el?.icon)} className='tw-p-4' alt='work-1' />
                                    </div>
                                    <p className=' p-text tw-text-[15px] tw-capitalize '>{el.name}</p>
                                </motion.div>
                            })
                        }

                    </div>

                    {/* Experience Section */}
                    <motion.div className=' tw-space-y-6 tw-self-center tw-p-5'
                        whileInView={{opacity:[0,1],x:[150,0]}}
                        transition={{
                            duration:0.7,
                            ease:'linear'
                        }}
                    >


                        {/* Each Experience */}
                        <div className='tw-text-[18px] tw-flex tw-gap-x-[40px] tw-gap-y-2 tw-items-start tw-flex-wrap'>
                            <h1 className='tw-text-[rgb(49,59,172)] tw-font-[800] tw-pt-1'>June 2021- Feb 2022 </h1>
                            <div className=''>
                                <h2 className='tw-font-[500] tw-text-[16px] 2xs:tw-text-[19px]'>Dm Solving Inc</h2>
                                <p className='tw-text-[13px] tw-font-[400] tw-text-[rgb(107,118,136)]'>Apteo</p>
                            </div>
                        </div>

                        <div className='tw-text-[18px] tw-flex tw-gap-x-[40px] tw-items-start tw-gap-y-2 tw-flex-wrap'>
                            <h1 className='tw-text-[rgb(49,59,172)] tw-font-[800] tw-pt-1'>June 2021- Feb 2022 </h1>
                            <div className=''>
                                <h2 className='tw-font-[500] tw-text-[16px] 2xs:tw-text-[19px]'>Dm Solving Inc</h2>
                                <p className='tw-text-[13px] tw-font-[400] tw-text-[rgb(107,118,136)]'>Apteo</p>
                            </div>
                        </div>

                        <div className='tw-text-[18px] tw-flex tw-gap-x-[40px] tw-items-start tw-gap-y-2 tw-flex-wrap'>
                            <h1 className='tw-text-[rgb(49,59,172)] tw-font-[800] tw-pt-1'>June 2021- Feb 2022 </h1>
                            <div className=''>
                                <h2 className='tw-font-[500] tw-text-[16px] 2xs:tw-text-[19px]'>Dm Solving Inc</h2>
                                <p className='tw-text-[13px] tw-font-[400] tw-text-[rgb(107,118,136)]'>Apteo</p>
                            </div>
                        </div>


                    </motion.div>



                </div>
            </div>
        </>
    )
}

export default AppWrapper(Work, 'Work');