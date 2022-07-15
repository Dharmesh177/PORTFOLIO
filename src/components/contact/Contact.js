import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';

import './Contact.css';

const Contact = () => {
  
  const formRef = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_kv3nj0d', 'template_foc5rzs', formRef.current, 'JCQc6fxczGw-MAdAC')
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const contactsArray = [
    {
      media: 'Email',
      icon: <MdOutlineEmail className='contact__option-icon' />,
      h5: 'dvala453@gmail.com',
      link: 'mailto:dvala453@gmail.com',
    },
    {
      media: 'LinkedIn',
      icon: <RiLinkedinBoxLine className='contact__option-icon' />,
      h5: 'Dharmesh Vala',
      link: 'https://www.linkedin.com/in/dharmesh-vala-252724204/',
    },
    // {
    //   media: 'WhatsApp',
    //   icon: <BsWhatsapp className='contact__option-icon' />,
    //   h5: '+916354434661',
    //   link: 'https://wa.me/6354434661',
    // },
  ];

  const contacts = contactsArray.map(({ media, icon, h5, link }, index) => {
    return (
      <article  className='purple contact__option' key={index}>
        {icon}
        <h4 class="purple">{media}</h4>
        <h5 class="purple">{h5}</h5>
        <a href={link} class="purple btn btn-primary" target='_blank'>
          Send a message
        </a>
      </article>
    );
  });

  return (
    <Container fluid className="project-section">
    <section id='contact' >
      <h5 class="purple">Get In Touch</h5>
      <h2 class="purple">Contact Me</h2>
      <div className='container contact__container purple'>
        <div className='contact__options purple'>{contacts}</div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type='text' class="purple" name='name' placeholder='Your Full Name' required />
          <input type='email' class="purple" name='email' placeholder='Email' required />
          <textarea name='message' class="purple" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
    </Container>
  );
};
export default Contact;
