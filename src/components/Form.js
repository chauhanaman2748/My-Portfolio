import "./Form.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all form fields are filled
    if (!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
      alert('Please fill all the fields');
      return;
    }

    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.current.user_email.value)) {
      alert('Please enter a valid email');
      return;
    }

    emailjs.sendForm('service_lzoo949', 'template_rhgbsfr', form.current, 'baD2MYasgxR1Ot5J9')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          notify();
      }, (error) => {
          console.log(error.text);
      });
  };

  const notify = () => toast("Message Sent...!");

  return (
    <div className="form" id="form">
      <h1 className="project-heading">Get in Touch</h1>
      <h3 className="form-heading">Let's Connect! Drop me a message and I'll get back to you as soon as possible..</h3>
        <form id="contact-form" ref={form}>
            <label>Your Name</label>
            <input type="text"  name="user_name" />
            <label>Your Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message"
                rows="6" placeholder="Type your message here"
            />
            <button className="btn" onClick={sendEmail}>
                Submit
            </button>
            <ToastContainer />
        </form>
    </div>
  )
}

export default Form
