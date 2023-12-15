import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { fetchAbouts, urlFor } from "../../client"
import AppWrapper from '../../wrapper/AppWrapper'
import "./About.scss"

// const abouts = [
//     { title: 'Software Developer', description: 'I am a proficient developer with a passion for solving complex problems', imgUrl: images.about01 },
//     { title: 'Data Scientist', description: 'I enjoy using AI and interesting data to create actionable recommendations', imgUrl: images.about02 },
//     { title: 'Web Develoment', description: 'I am a good web developer.', imgUrl: images.about03 },
//     { title: 'Leader', description: 'I have a proclivity to bring out the best of people around me', imgUrl: images.about04 },
// ]

function About() {
    const [abouts,setAbouts]=useState([]);    

    useEffect(()=>{
        async function fetchData(){
            const SanityData=await fetchAbouts();
            setAbouts(SanityData)
            console.log("About Us Data =>",SanityData)
        };
        fetchData();
    },[])

    return (
        <>
            <h2 className='head-text'>
                I Known That <span>Good Development</span><br />
                Means <span>Great Business</span>
            </h2>
            <div className='app__profiles tw-mt-[60px]'>
                {
                    abouts.map((element, index) => {
                        return (
                            <motion.div
                                className='app__profile-item'
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                key={`${index}-profile`}
                            >
                                <img src={urlFor(element.imgUrl)} alt={`${element.title} image`} />
                                <h2 className='bold-text' style={{ marginTop: 10 }}>{element.title}</h2>
                                <p className='p-text tw-font-[500] md:tw-text-[15px]' style={{ marginTop: 10 }}>{element.description}</p>

                            </motion.div>
                        )
                    })
                }
            </div>

        </>

    )
}

export default AppWrapper(About,'About')