import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='https://www.linkedin.com/in/hamza-amjad-0a3aaa228/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/hamzaAmjad5163' target='_blank'><BsGithub/></a>

    </div>
  )
}

export default HeaderSocial
