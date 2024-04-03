import React from 'react'
import { About, Footer, Project, Work, Testimonial, Header} from "./container/containerExports";
import Navbar from "./components/Navbar/Navbar"
import { useQuery } from '@tanstack/react-query';
import {fetchWorks,fetchTestimonials,fetchAbouts,fetchSkills,fetchProjectType} from "./client"
import "./App.scss"
import "./index.css"


function App() {

    const projectData= useQuery({
        queryKey: ['projects'],
        queryFn: fetchWorks ,
        staleTime:Infinity
    })
    
    const testimonialData = useQuery({
        queryKey: ['testimonials'],
        queryFn: fetchTestimonials,
        staleTime:Infinity
    })

    const AboutData = useQuery({
        queryKey: ['abouts'],
        queryFn: fetchAbouts,
        staleTime:Infinity
    })

    const skillsData = useQuery({
        queryKey: ['skillsData'],
        queryFn: fetchSkills,
        staleTime:Infinity
    })

    const projectTypeData = useQuery({
        queryKey: ['projectType'],
        queryFn: fetchProjectType,
        staleTime:Infinity
    })


    // console.log("Project Data =>",projectData.data)
    // console.log("Testimonial Data =>",testimonialData.data)
    // console.log("About Data =>",AboutData.data)
    // console.log("Skills Data =>",skillsData.data)
    console.log("Project Type Data =>",projectTypeData.data)
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About element={AboutData.data} />
            <Work element={skillsData.data}/>
            <Project element={projectData.data} btnTypes={projectTypeData?.data}/>
            <Testimonial element={testimonialData.data}/>
            <Footer />
        </div>
    )
}

export default App