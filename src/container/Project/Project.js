import React, { useState } from 'react'
import "./Project.scss"
import AppWrapper from '../../wrapper/AppWrapper'
import { motion } from 'framer-motion'
import ProjectBox from '../../components/ProjectBox/ProjectBox'


function Project({ element, btn }) {

    const [activebtn, setActiveBtn] = useState('All')
    const [filterProject, setFilterProject] = useState(null);

    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });



    const handleFilter = (item) => {
        const customItem = item.replace(" ", "");
        setActiveBtn(item);
        setAnimateCard([{ y: 100, opacity: 0.5 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterProject(element);
            } else {
                setFilterProject(element.filter((el) => el.tags.includes(customItem)));
            }
        }, 500);
    };

    return (
        <>
            <motion.div className='tw-w-full tw-h-full '
                whileInView={{ opacity: [0, 1], y: [100, 0] }}
                transition={{ duration: 0.5, ease: 'linear' }}
            >
                <div className=' '>
                    <h1 className='head-text tw-pt-5'>My Personal <span>Projects</span></h1>
                    <div className='tw-flex  tw-justify-center tw-my-5 tw-max-w-[800px] tw-mx-auto tw-flex-wrap tw-items-center tw-gap-x-6 tw-gap-y-4  tw-pt-[30px] 2xs:tw-pt-[0px]'>
                        {
                            btn?.map((item, indx) => {
                                const activeStyle = activebtn === item.Title ? `tw-bg-[#313bac] tw-text-white` : ``
                                return <button key={indx} className={`${activeStyle} ${item.Title === 'Accessible' ? 'tw-text-[15.7px]' : ''} tw-rounded-[0.5rem] tw-cursor-pointer tw-font-[800]  md:tw-mt-[20px] md:tw-mb-[15px] tw-px-4 tw-py-3  p-text tw-text-[14px] hover:tw-bg-[#313bac] hover:tw-text-white tw-text-black tw-duration-500`} onClick={() => handleFilter(item.Title)}>
                                    {item.Title}
                                </button>
                            })
                        }

                    </div>
                </div>

                <motion.div className=' tw-flex tw-flex-wrap tw-justify-center  tw-gap-x-5 tw-gap-y-5 tw-items-start '
                    animate={animateCard}
                    transition={{ duration: 1, ease: 'linear', delayChildren: 0.5 }}
                >
                    {
                        filterProject === null ? element?.map((el, indx) => {
                            return <ProjectBox key={indx} element={el} />
                        }) :
                            filterProject?.map((el, indx) => {

                                return <ProjectBox key={indx} element={el} />
                            })


                    }
                </motion.div>
            </motion.div>
        </>
    )
}

export default AppWrapper(Project, 'Projects', 'tw-bg-white')