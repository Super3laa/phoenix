import React from "react";
import './ContactUs.css'
import * as emailjs from 'emailjs-com'

export default function ContactUs() {
  return (
    <React.Fragment>

      <div className="contactUs">
          <h2>Contact Us</h2>
          <div className="Field">
          <h1>Your Name</h1>
          <input
            type="text"
            placeholder="Name"
            id="ContactEmail"
          ></input>
        </div>
        <div className="Field">
          <h1>Subject</h1>
          <input
            type="text"
            placeholder="Subject"
            id="ContactSubject"
          ></input>
        </div>
       
        <div className="Field">
          <h1>Messege</h1>
          <textarea
            rows = "5" cols = "60"
            type="text"
            placeholder="Msg"
            id="ContactMsg"
          ></textarea>
        </div>
        <div className="Field">
            <button className="submitButton" onClick={()=>{
              let templateParams = {
                userEmail: document.getElementById('ContactEmail').value,
                userSubject: document.getElementById('ContactSubject').value,
                message: document.getElementById('ContactMsg').value,
               }
               emailjs.send(
                'default_service',
                'template_97nacgtr',
                 templateParams,
                'user_ht8Z7Lju7x2HF5KQBlAs6'
           ).then(res=>alert("Message has been sent")).catch(err=>alert("Sorry, Try again"))
              
            }}>
                Send
            </button>
        </div>
      </div>
    </React.Fragment>
  );
}
