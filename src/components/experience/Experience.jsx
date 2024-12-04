import React from 'react'
import './experience.css'
import {BsSendCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have: </h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front-end Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>Laravel Front-end Developer</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        <div className='experience__backend'>
        <h3>Back-end Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>

              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basics</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>Android Applications</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>Flutter</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsSendCheckFill className='experience__details-icon'/>
              <div>
              <h4>Desktop Applications C#</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
      
    
  )
}

export default Experience
