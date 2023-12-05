import React from 'react'
import "./About.scss"
import { motion } from "framer-motion"
import images from '../../constants/images'

const abouts = [
    { title: 'Software Developer', description: 'I am a proficient developer with a passion for solving complex problems', imgUrl: images.about01 },
    { title: 'Data Scientist', description: 'I enjoy using AI and interesting data to create actionable recommendations', imgUrl: images.about02 },
    { title: 'Web Develoment', description: 'I am a good web developer.', imgUrl: images.about03 },
    { title: 'Leader', description: 'I have a proclivity to bring out the best of people around me', imgUrl: images.about04},
]

function About() {
    return (
        <>
            <h2 className='head-text'>
                I Known That <span>Good Development</span><br />
                Means <span>Great Business</span>
            </h2>
            <div className='app__profiles'>
                  {
                    abouts.map((element,index)=>{
                        return ( 
                        <motion.div
                            className='app__profile-item'
                            whileInView={{opacity:1}}
                            whileHover={{scale:1.1}}
                            transition={{duration:0.5}}
                            key={`${index}-profile`}
                        >   
                            <img src={element.imgUrl} alt={`${element.title} image`} />
                            <h2 className='bold-text' style={{marginTop:10}}>{element.title}</h2>
                            <p className='p-text' style={{marginTop:10}}>{element.description}</p>

                        </motion.div>
                        )
                    })
                  }
            </div>

        </>

    )
}

export default About