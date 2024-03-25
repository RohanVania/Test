import { urlFor } from "../../client"

const SkillBox = (element) => {
    console.log(element.icon)
    return (
        <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-2  tw-px-3'>
            <div className='sm:tw-w-[80px] sm:tw-h-[80px] tw-bg-[#fff] tw-rounded-full tw-flex tw-flex-col tw-justify-center '>
                <img src={``} className='tw-p-4' />
            </div>
            <p className=' p-text'>{element.name}</p>
        </div>
    )
}

export default SkillBox