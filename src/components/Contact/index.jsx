import React, { useState } from 'react';
import './index.scss';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';



const Contact = () =>{

    const[state, setState] = useState();

    const handleChange = (e) => {
        return setState({...state, [e.target.name]: e.target.value})
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6r8fqrk','contact_form', e.target, 'user_jnuNyqdL4g6g4yjowUStl')
        .then((result) => {
            e.target.reset();
            return swal('Thank you !','Your email was succesfully sent','success')
        }, (error) => {
            return swal('Sorry! Something went wrong','You can still contact me on: macamdeoca@gmail.com','error')
        })
    }
    return(
        <footer id= 'contact' className='contact_container'>
            <p className='text'>
                LET'S GET IN TOUCH !
                <p>
                FILL THIS FORM AND I WILL GET BACK TO YOU
                </p>
            </p>
            <form id='form' className='form_container' onSubmit={sendEmail}>
                <input id='name' className='id_field' type='text' name='name' placeholder='NAME' onChange={handleChange} required/>
                <input id='email' className='id_field' type='email' name='email' placeholder='E_MAIL' onChange={handleChange} required/>
                <textarea id='message'className='id_field' type='text' name='message'placeholder='MESSAGE' onChange={handleChange}></textarea>
                <input id='submit'className='id_field submit' type='submit' name='name' value='Send Email!'/>
            </form>
            <div className='bottom_contact'>
                Made with tons of patience &#128134;&#8205;&#9792;&#65039;  by Macarena Montes de Oca @ 2021
            </div>
        </footer>
    )
}

export default Contact; 