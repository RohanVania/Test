import React from 'react'
import { motion } from "framer-motion"
import {  urlFor } from "../../client"
import AppWrapper from '../../wrapper/AppWrapper'
import "./About.scss"



function About({element}) {

    return (
        <>
            <h2 className='head-text'>
                I Known That <span>Good Development</span><br />
                Means <span>Great Business</span>
            </h2>
            <div className='app__profile tw-mt-[60px] xs:tw-mb-[0px] tw-mb-[40px]  tw-flex tw-flex-wrap tw-justify-center'>
                {
                    element?.map((element, index) => {
                        return (
                                <motion.div
                                    className='app__profile-item tw-h-full'
                                    initial={{ opacity: 0, x: -200, y: -100 }}
                                    whileInView={{ opacity: [0, 1], x: [-100, 0], y: [0, 0] }}
                                    transition={{ duration: 0.3, delay: index * 0.22, ease: 'linear' }}
                                    key={`${index}-profile`}
                                >
                                    <motion.div className=' tw-h-full'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5, ease: 'linear' }}
                                    >
                                        <img src={urlFor(element.imgUrl)} alt={`${element.title}-1`} />
                                        <h2 className='bold-text' style={{ marginTop: 10 }}>{element.title}</h2>
                                        <p className='p-text tw-font-[500] md:tw-text-[15px]' style={{ marginTop: 10 }}>{element.description}</p>
                                    </motion.div>

                                </motion.div>
                        )
                    })
                }
            </div>

        </>


    )
}

export default AppWrapper(About, 'About','tw-bg-white')