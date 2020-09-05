import React from "react";
import './ContactUs.css'
export default function ContactUs() {
  return (
    <React.Fragment>

      <div className="contactUs">
          <h2>Contact Us</h2>
        <div className="Field">
          <h1>Name</h1>
          <input
            type="text"
            placeholder="Name"
            className="Name"
          ></input>
        </div>
        <div className="Field">
          <h1>Subject</h1>
          <input
            type="text"
            placeholder="Subject"
            className="Subject"
          ></input>
        </div>
        <div className="Field">
          <h1>E-mail</h1>
          <input
            type="text"
            placeholder="E-mail"
            className="email"
          ></input>
        </div>
        <div className="Field">
          <h1>Subject</h1>
          <textarea
            rows = "5" cols = "60"
            type="text"
            placeholder="Msg"
            className="Subject"
          ></textarea>
        </div>
        <div className="Field">
            <button className="submitButton">
                Send
            </button>
        </div>
      </div>
    </React.Fragment>
  );
}
