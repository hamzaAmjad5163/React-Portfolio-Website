import React from 'react'
import CV from '../../assets/Hamza Amjad Resume (1).pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
