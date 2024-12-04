import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fur.png'
import IMG2 from '../../assets/data.png'
import IMG3 from '../../assets/food.png'
import IMG4 from '../../assets/de.png'
import IMG5 from '../../assets/mfur.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
           <img src='https://github.com/user-attachments/assets/b145d3af-d6ba-4d0b-9ee8-d827d411eb85' alt=''></img>
          </div>
          <h3>Properties DHA360.pk</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/hamzaAmjad5163?tab=repositories' className='btn' target='_blank'>Github</a>
            
            </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
           <img src={IMG1} alt=''></img>
          </div>
          <h3>A tea brand e-commerce website</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/hamzaAmjad5163?tab=repositories' className='btn' target='_blank'>Github</a>
            
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
           <img src={IMG2} alt=''></img>
          </div>
          <h3>Grow Skill course Website</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/hamzaAmjad5163?tab=repositories' className='btn' target='_blank'>Github</a>
            
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
           <img src={IMG3} alt=''></img>
          </div>
          <h3>Foodelt</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/hamzaAmjad5163?tab=repositories' className='btn' target='_blank'>Github</a>
            
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
           <img src={IMG4} alt=''></img>
          </div>
          <h3>Financial service mobile dashboard</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/hamzaAmjad5163?tab=repositories' className='btn' target='_blank'>Github</a>
            
            </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
           <img src={IMG5} alt=''></img>
          </div>
          <h3>Plant e-commerce website</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/hamzaAmjad5163?tab=repositories' className='btn' target='_blank'>Github</a>
            
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
