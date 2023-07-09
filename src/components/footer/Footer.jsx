import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Hamza</a>
        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#testimonials'>Testimonials</a></li>
            <li><a href='#contact'>Contact</a></li>
            
        </ul>

        <div className='footer__socials'>
            <a href='https://www.facebook.com/'><BsFacebook/></a>
            <a href='https://twitter.com/home'><AiFillTwitterCircle/></a>
            <a href='https://www.linkedin.com/in/hamza-amjad-0a3aaa228/'><BsLinkedin/></a>
            <a href='https://github.com/hamzaAmjad5163'><AiFillGithub/></a>
        </div>
        <div className='footer__copyright'>
            <small >&copy; Hamza Amjad. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer
