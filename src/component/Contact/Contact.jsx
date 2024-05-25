import React from 'react'
import './Contact.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2b9aab77-5b27-499a-8b19-0d811c754d24");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("")
    }
  };

  
  return (
    <div className='main-contact'>
      <form onSubmit={onSubmit}>
        <h1>Contact me</h1>
        <div className='contact-box'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder='' />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='' />
          <div className='message-box'>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder=''></textarea>
          </div>
        </div>
        <button type="submit">Submit ✔️</button>
      </form>
    </div>
  )
}

export default Contact
