import React from 'react'
import './contact.css'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import  {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3odh5nu', 'template_ylgow9b', form.current, 'QPL0kfXanZPdWUP9u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineAttachEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hamzakhan5163@gmail.com</h5>
            <a href='mailto:hamzakhan5163@gmail.com' target="_blank">Send a Message</a>

          </article>
          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Hamza Amjad</h5>
            <a href='https://m.me/profile.php?id=100013442239190/' target="_blank">Send a Message</a>

          </article>
          <article className='contact__option'>
          <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+92 3187533356</h5>
            <a href='https://api.whatsapp.com/send?phone=+923187533356' target="_blank">Send a Message</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name:</label>
          <input type='text' name='name' placeholder='Your Name' required/>
          <label>Email:</label>
          <input type='email' name='email' placeholder='abc123@gmail.com' required/>
          <label>Message:</label>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
