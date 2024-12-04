import React from 'react'
import './about.css'
import ME from '../../assets/ab.png'
import {BsAward} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {RiFileList3Line} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Year</small>
            </article>

            <article className='about__card'>
              <HiOutlineUsers className='about__icon'/>
              <h5>Followers</h5>
              <small>43+</small>
            </article>

            <article className='about__card'>
              <RiFileList3Line className='about__icon'/>
              <h5>Projects</h5>
              <small>41+ Completed</small>
            </article>
          </div>
          <p>
            As a full stack developer, i bring a comprehensive range of technical skills and expertise to the
            table, including proficiency in front-end and back-end and database technologies. With year of
            experience in the field. I have developed an understanding of how to build and maintain complex
            web applications from end to end. I am well skilled in language such as Javascript, HTML, CSS and
            PHP, and have experience with framework like React, and Node js, Angular Js. In addition to my 
            technical skills, I am also a strong communicator able to collaborate effectively with team members
            and stakeholders to deliver projects on time and to a high standard.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
