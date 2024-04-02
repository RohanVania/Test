import React from 'react'
import { BsMedium, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div className='tw-cursor-pointer'>
        <a className=' tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center' href='https://github.com/RohanVania'>
          <BsGithub />
        </a>
      </div>
      <div className='tw-cursor-pointer' >
        <a className=' tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center' href='https://www.linkedin.com/in/rohanvania'>
          <BsLinkedin />
        </a>
      </div>
      <div className='tw-cursor-pointer'>
        <a className=' tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center' href='https://medium.com/@rohan.vania'>
          <BsMedium />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia