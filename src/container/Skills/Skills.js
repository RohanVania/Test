import React from 'react'
import "./Skills.scss"
import AppWrapper from '../../wrapper/AppWrapper'

const buttons = ['Accessible', 'Front End', 'Back End', 'Data Science', 'All']

function Skills() {
    return (
        <>
            <div id='skills' className='tw-w-full tw-h-full '>
                <div className=' '>
                    <h1 className='head-text tw-py-5'>My Personal <span>Projects</span></h1>
                    <div className='tw-flex  tw-justify-center tw-my-5 tw-max-w-[800px] tw-mx-auto tw-flex-wrap tw-items-center'>
                        {
                            buttons.map((item, indx) => {
                                return <button key={indx} className='tw-rounded-[0.5rem] tw-cursor-pointer tw-font-[800] tw-m-[0.5rem md:tw-mt-[20px] md:tw-mb-[15px] tw-px-4 tw-py-3  p-text tw-text-[14px] hover:tw-bg-[#313bac] hover:tw-text-white tw-text-black tw-duration-100'>
                                    {item}
                                </button>
                            })
                        }

                    </div>
                </div>

                <div className='tw-bg-purple-30s tw-flex tw-flex-wrap tw-justify-center  tw-gap-x-5 tw-gap-y-5 tw-items-start '>
                    {
                        Array.from({ length: 10 }).map((el) => {
                          return   <div className='tw-flex tw-flex-col tw-gap-y-6  tw-max-w-[270px] tw-p-4 tw-pt-[20px] tw-rounded-lg hover:tw-shadow-[0px_0px_25px_rgba(0,0,0,0.2)] tw-duration-100 tw-m-[2rem'>
                                <div className='tw-h-[240px] tw-rounded-md tw-bg-green-400 tw-overflow-hidden'>
                                    <img src='https://cdn.sanity.io/images/sshorzzz/production/6b70050408aba286e76890503287b7c1b53fc994-5078x2692.png' className='tw-w-full tw-h-full tw-object-cover ' />
                                </div>
                                <div className='tw-flex tw-flex-col tw-gap-y-3'>
                                    <h2 className='bold-text tw-text-center tw-text-[17px]'>Window Watching</h2>
                                    <p className='p-text tw-text-[13.4px] tw-text-center'>
                                        Web application to browse and search for movies with voice assistant capabilities
                                    </p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AppWrapper(Skills, 'Skills', 'tw-bg-white')