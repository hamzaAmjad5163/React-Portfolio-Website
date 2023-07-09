import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Simplicity: A simple and intuitive interface that is easy to navigate and understand is crucial for a positive user experience.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Consistency: A consistent design language across all elements of the interface ensures users can quickly understand how to interact with the application or website.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Clarity: Clear and concise messaging helps users understand what actions they can take and what the consequences of those actions might be.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Responsiveness: A responsive design that works seamlessly across different devices and screen sizes is essential to ensure users have a consistent experience.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Accessibility: A design that considers users with disabilities ensures everyone can use the interface effectively.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Speed: Fast load times and quick response times to user interactions help keep users engaged and reduce frustration.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Personalization: The ability to personalize the user experience based on user preferences and behavior can increase engagement and loyalty.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Feedback: Providing feedback to users about their actions helps them understand what's happening and reduces frustration.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Error prevention and recovery.
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon'/>
              <p>
              HTML: HyperText Markup Language is the foundation of any website and defines the structure of web pages.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              CSS: Cascading Style Sheets is used to control the layout and presentation of web pages, including fonts, colors, and other visual aspects.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              JavaScript: JavaScript is a scripting language that allows for dynamic behavior on web pages, such as animations, interactivity, and form validation.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Responsive design: Ensuring that websites are optimized for different screen sizes and devices is essential in modern web development.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Accessibility: A design that considers users with disabilities ensures everyone can use the interface effectively.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Accessibility: Building websites that are accessible to people with disabilities ensures that everyone can use the site effectively.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Personalization: The ability to personalize the user experience based on user preferences and behavior can increase engagement and loyalty.
              </p>
            </li>

            </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Planning: Before creating content, it's important to plan out the website or application and identify the target audience and goals.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Research: Conducting research to understand the market, competition, and user needs can inform content creation decisions.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              User-centered content: Creating content that meets the needs and expectations of the target audience, and is easy to understand and navigate, is essential for a positive user experience.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Responsive design: Ensuring that websites are optimized for different screen sizes and devices is essential in modern web development.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Testing: Testing the content and its placement on the website or application can help identify areas for improvement and ensure the content meets user needs.
              </p>
            </li>

            <li><GiCheckMark className='service__list-icon'/>
              <p>
              Ongoing updates: Regularly updating and refreshing content can keep the website or application relevant and engaging to users.
              </p>
            </li>

            </ul>
        </article>
      </div>      
    </section>
  )
}

export default Services
