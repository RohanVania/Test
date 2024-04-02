import React, { useState } from 'react'
import "./Navbar.scss"
import images from "../../constants/constantsImport"

import { HiMenu, HiX } from "react-icons/hi"
import { easeOut, motion } from "framer-motion"

const list = ['Home', 'About', "Work", "Projects","Testimonial", "Contact"];

function Navbar() {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='app__navbar'>

            {/* Logo */}
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="" />
            </div>

            {/* List */}
            <ul className='app__navbar-links'>
                {list.map((item) => (
                    <li className='app__flex p-text' key={`key-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            {/* Mobile Navbar */}

            <div className='app__navbar-menu'>
                <HiMenu onClick={() => setToggle(true)} />

                {
                    toggle &&
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >

                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {list.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                }
            </div>

        </nav >
    )
}

export default Navbar