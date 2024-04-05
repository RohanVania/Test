import React from 'react'
import email from "../../assets/email.png"
import Phone from "../../assets/Phone.png"

import "./Footer.scss"
import AppWrapper from '../../wrapper/AppWrapper'
import { motion } from "framer-motion"

function Footer() {
    return (
        <>
            <motion.div id='Contact' className=''
                whileInView={{ opacity: [0, 1], y: [100, 0] }}
                transition={{ duration: 0.7, ease: 'linear', delay: 0.1 }}
            >
                <div id='footer-heading' className='tw-mb-[3rem]'>
                    <h1 className='head-text'>
                        Grab A Coffee &
                        <span>
                            Chat With Me
                        </span>
                    </h1>
                </div>

                {/* Email & Linkedin */}
                <div className='tw-px-3'>
                    <div className='tw-flex tw-gap-x-3 tw-gap-y-[40px] tw-justify-center :tw-justify-between md:tw-justify-center sm:tw-gap-x-12 tw-flex-wrap   tw-py-7'>
                        {/* Email Detail */}
                        <a href='mailto:rohan.vania@gmail.com' className='tw-max-w-[290px  tw-bg-[#fef4f5] tw-flex tw-items-center tw-cursor-pointer  tw-gap-x-3 tw-py-[16px] tw-px-[11px] tw-rounded-lg tw-flex-wrap tw-gap-y-2'>
                            <div className='tw-px-1'>
                                <img src={email} className='tw-w-[40px] tw-aspect-square ' alt='email-1' />
                            </div>
                            <p className='tw-text-[15px] tw-font-[400] tw-text-[rgb(107,118,136)]'>
                                rohan.vania@gmail.com
                            </p>
                        </a>
                        {/* Linkedin Detail */}
                        <a href='tel:+15488813998'  className='tw-max-w-[290px  tw-bg-[#F2F7FB]  tw-cursor-pointer tw-flex tw-items-center tw-justify-cente tw-gap-x-3 tw-py-[16px] tw-px-[10px] tw-rounded-lg tw-flex-wrap tw-gap-y-2'>
                            <div className='tw-px-1'>
                                <img src={Phone} className='tw-w-[40px] tw-aspect-square ' alt='email' />
                                {/* <MdOutlinePhoneAndroid className='tw-w-[40px] tw-aspect-square' /> */}
                            </div>
                            <p className='tw-text-[15px] tw-font-[400] tw-text-[rgb(107,118,136)]'>
                                +1 548-881-3998
                            </p>
                        </a>
                    </div>
                </div>

                {/* Form */}
                <div className='tw-flex tw-justify-center tw-mt-[30px]  '>
                    <form className='tw-w-[510px lg:tw-min-w-[900px]  tw-w-[100%] tw-text-[#313bac] tw-flex tw-flex-col tw-gap-y-6 tw-px-3 text-sm::tw-px-0 '>
                        <div className=''>
                            <input type='text' className='tw-outline-none tw-w-full tw-py-[10px] tw-px-5 tw-rounded-lg tw-bg-[#edf2f8] tw-text  ' placeholder='Your Name' />
                        </div>
                        <div className=''>
                            <input type='text' className='tw-outline-none tw-w-full tw-py-[10px] tw-px-5 tw-rounded-lg tw-bg-[#edf2f8] tw-text  ' placeholder='Your Name' />
                        </div>
                        <div className=''>
                            <textarea className="tw-outline-none tw-w-full tw-py-[20px]  tw-min-h-[150px] tw-resize-none tw-px-5 tw-rounded-lg tw-bg-[#edf2f8] tw-text" placeholder="How can we help you ?" />
                        </div>
                        <div className='tw-text-center'>
                            <button className='tw-px-7 tw-py-4 tw-rounded-xl tw-text-white tw-cursor-pointer tw-font-[500] tw-bg-[#313bac] tw-text-[14.3px]  '>
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </motion.div>
        </>
    )
}

export default AppWrapper(Footer, 'Contact', 'tw-bg-white')