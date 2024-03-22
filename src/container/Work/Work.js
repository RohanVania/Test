import React, { useEffect } from 'react'
import { fetchSkills } from "../../client"


function Work() {
    useEffect(() => {
        async function fetchData() {
            const SanityData = await fetchSkills();
            console.log("Skills Us Data =>", SanityData)
        };
        fetchData();
    }, [])
    return (
        <>
            <div className='tw-bg-red-400'>
                <h1 className='head-text '>Skills and Experience</h1>

                <div >
                    <div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Work;