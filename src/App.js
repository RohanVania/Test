import React, { useEffect, useState } from 'react'
import { About, Footer, Project, Work, Testimonial, Header } from "./container/containerExports";
import Navbar from "./components/Navbar/Navbar"
import { useQuery } from '@tanstack/react-query';
import { fetchWorks, fetchTestimonials, fetchAbouts, fetchSkills, fetchProjectType } from "./client"
import "./App.scss"
import "./index.css"
import MainLoader from './MainLoader';
import { Toaster } from 'react-hot-toast';


function App() {
    const [mainloader, setMainLoader] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [showSplash, setShowSplash] = useState(true);

    

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false); // Hide splash screen after 1.5 seconds
        }, 3000); // Adjust the duration as needed

        // Cleanup function
        return () => clearTimeout(timer);
    }, []);

    const projectData = useQuery({
        queryKey: ['projects'],
        queryFn: fetchWorks,
        staleTime: Infinity,
        onSuccess: () => setDataLoaded(true),
    })

    const testimonialData = useQuery({
        queryKey: ['testimonials'],
        queryFn: fetchTestimonials,
        staleTime: Infinity,
        onSuccess: () => setDataLoaded(true),
    })

    const AboutData = useQuery({
        queryKey: ['abouts'],
        queryFn: fetchAbouts,
        staleTime: Infinity,
        onSuccess: () => setDataLoaded(true),

    })

    const skillsData = useQuery({
        queryKey: ['skillsData'],
        queryFn: fetchSkills,
        staleTime: Infinity,
        onSuccess: () => setDataLoaded(true),
    })

    const projectTypeData = useQuery({
        queryKey: ['projectType'],
        queryFn: fetchProjectType,
        staleTime: Infinity,
        onSuccess: () => setDataLoaded(true),
    })


    // console.log("Project Data =>",projectData.data)
    // console.log("Testimonial Data =>",testimonialData.data)
    // console.log("About Data =>",AboutData.data)
    // console.log("Skills Data =>",skillsData.data)
    // console.log("Project Type Data =>", projectTypeData.data)

    const allDataLoaded = [
        projectData.isSuccess,
        testimonialData.isSuccess,
        AboutData.isSuccess,
        skillsData.isSuccess,
        projectTypeData.isSuccess,
    ].every(Boolean);

    if (showSplash) {
        return <MainLoader />;
    }

    else if(!allDataLoaded){
        return <MainLoader />;
    }

    else

        return (
            <div className='app'>
                <Navbar />
                <Header />
                <About element={AboutData.data} />
                <Work element={skillsData.data} />
                <Project element={projectData.data} btnTypes={projectTypeData?.data} />
                <Testimonial element={testimonialData.data} />
                <Footer />
                <Toaster/>
            </div>
        )
}

export default App