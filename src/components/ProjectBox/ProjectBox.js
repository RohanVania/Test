import { IoEye } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import {urlFor} from "../../client"

const ProjectBox = ({ element }) => {

    return (
        <div className='tw-cursor-pointer tw-flex tw-flex-col tw-gap-y-6  tw-max-w-[280px] tw-p-4 tw-pt-[20px] tw-rounded-lg hover:tw-shadow-[0px_0px_25px_rgba(0,0,0,0.2)] tw-duration-100 '>
            <div className='tw-h-[240px] tw-rounded-md tw-overflow-hidden  tw-relative tw-cursor-pointer  tw-items-center tw-flex '>
                <img src={urlFor(element?.imgUrl)} className='tw-w-full tw-h-full tw-object-cover' alt={element.Title} />
                <div className="tw-opacity-0 tw-bg-[rgba(0,0,0,0.4)] tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-gap-x-8 tw-text-white tw-font-[800] tw-z-100 tw-absolute tw-top-0 tw-bottom-0 hover:tw-opacity-100 tw-duration-300">
                    <div className="tw-bg-[rgba(0,0,0,0.7)] tw-w-[48px] tw-aspect-square tw-rounded-full tw-flex tw-justify-center tw-items-center hover:tw-scale-[0.78] tw-duration-200">
                        <a href={element?.projectLink} target="_blank" rel="noreferrer">
                            <IoEye className="tw-text-[40px] tw-p-[5px]" />
                        </a>
                    </div>
                    <div className="tw-bg-[rgba(0,0,0,0.7)] tw-w-[48px] tw-aspect-square tw-rounded-full tw-flex tw-justify-center tw-items-center hover:tw-scale-[0.78] tw-duration-200">
                        <a href={element?.codeLink} target="_blank"  rel="noreferrer" >
                            <FaGithub className="tw-text-[35px] tw-p-[5px]" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3'>
                <h2 className='bold-text tw-text-center tw-text-[17px]'>{element?.title}</h2>
                <p className='p-text tw-text-[13.4px] tw-text-center'>
                    {element?.description}
                </p>
            </div>
        </div>
    )
}

export default ProjectBox