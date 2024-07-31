import React from 'react'
import flutter from "../../assets/flutter.png";
import redux from "../../assets/redux.png";
import react from "../../assets/react.png"
// import profile from "../../assets/profile.png"
import profile from "../../assets/removebg.png"

import { motion } from "framer-motion"
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

const imagesIcon = [flutter, redux, react]

function Header() {
    
    return (
        <div id="home" className='app__header app__flex tw-flex-wrap   tw-overflow-hidden '>

            {/* 1st Motion Div */}
            <motion.div
                whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 1.2 }}
                className='app__header-info  tw-flex '
            >
                {/* Main Badge */}
                <div className='app__header-badge 400:tw-ml-auto 600:tw-mx-aut '>

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
                className='app__header-img tw-object-cover '
            >
                <img src={profile} alt="profile-bg" className=' tw-bg-red-40  400:tw-mx-10'  />

            </motion.div>

            {/* 3rd Motion Div */}
            <motion.div
                variants={scaleVariant}
                whileInView={scaleVariant.whileInView}
                className='app__header-circles '
            >
                {
                    imagesIcon.map((data,indx) =>
                        <div key={indx} className='circle-cmp app__flex'>
                            <img src={data} alt={`circle-${indx}`} />
                        </div>
                    )

                }

            </motion.div>

        </div>
    )
}

export default AppWrapper(Header,'Home','')