import React from 'react'
import images from "../../constants/constantsImport"
import { easeInOut, motion } from "framer-motion"
import AppWrapper from '../../wrapper/AppWrapper'
import "./Header.scss"

const scaleVariant = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1.2,
            ease: "easeInOut",
        }
    }
}

// Array for Images 

const imagesIcon = [images.flutter, images.redux, images.react]

function Header() {
    return (
        <div id="home" className='app__heade app__flex tw-flex-wrap   tw-overflow-hidden'>

            {/* 1st Motion Div */}
            <motion.div
                whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 1.2 }}
                className='app__header-info '
            >
                {/* Main Badge */}
                <div className='app__header-badge'>

                    {/* Badge */}
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div style={{ marginLeft: '20px' }}>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>Rohan</h1>
                        </div>
                    </div>

                    <div className='tag-cmp app__flex'>
                        <p className='p-text'>Software Engineer</p>
                        <p className='p-text'>Front End Developer</p>
                    </div>

                </div>

            </motion.div>

            {/* 2nd Motion Div */}
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delayChildren: 1 }}
                className='app__header-img '
            >
                {/* <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.profile}
                    alt='profile-circle'
                    className='overlay-circle'
                ></motion.img> */}
                <img src={images.profile} alt="profile-bg" className='' />

                {/* <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.3 }}
                    src={images.circle}
                    alt='profile-circle'
                    className='overlay-circle'
                >

                </motion.img> */}

            </motion.div>

            {/* 3rd Motion Div */}
            <motion.div
                variants={scaleVariant}
                whileInView={scaleVariant.whileInView}
                className='app__header-circles '
            >
                {
                    imagesIcon.map((data) =>
                        <div className='circle-cmp app__flex'>
                            <img src={data} alt="circle" />
                        </div>
                    )

                }

            </motion.div>

        </div>
    )
}

export default AppWrapper(Header,'Home','')