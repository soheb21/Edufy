import React, { useState } from 'react'
import mssg from "../../assets/msg-icon.png"
import mail from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"
import white_icon from "../../assets/white-arrow.png"
import "./Contact.css"
const Contact = () => {
    let initialState = {
        username: "",
        phone: "",
        email: "",
        message: ""
    }
    const [formdata, setFormdata] = useState(initialState)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // let formdata = new FormData(e.target);
        // const obj = Object.fromEntries(formdata.entries())
        console.log(formdata)
        setFormdata(initialState)


    }
    return (
        <div className='contact'>
            <div className="contact-col">
                <h1>Send us a message  <img src={mssg} alt="mssg" /></h1>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li> <img src={mail} alt="mail" /> ansarishoeb53@gmail.com</li>
                    <li> <img src={phone} alt="phone" />+91 845-295-5876</li>
                    <li>  <img src={location} alt="location" />77 Massachusetts Ave, Cambridge
                        MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="">Your name</label>
                    <input onChange={handleChange} value={formdata.username} name='username' type="text" placeholder='Enter your name' />
                    <label htmlFor="">Phone Number</label>
                    <input onChange={handleChange} value={formdata.phone} name='phone' type="text" placeholder='Enter your phone number' />
                    <label htmlFor="">Your Email</label>
                    <input onChange={handleChange} value={formdata.email} name='email' type="text" placeholder='Enter your email id' />
                    <label htmlFor="">Write your messages here</label>
                    <textarea onChange={handleChange} value={formdata.message} name="message" placeholder='Enter your message' rows="6" />
                    <button className='btn dark-btn '>Submit Now <img src={white_icon} alt="white_icon" /></button>
                </form>
                <span></span>

            </div>
        </div>
    )
}

export default Contact