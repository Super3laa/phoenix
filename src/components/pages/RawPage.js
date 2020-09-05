import React from "react";
import ContactUs from "../RawPageComponents/ContactUs";
import "./RawPage.css";
import Header from '../RawPageComponents/Header'
export default function RawPage(props) {
  return (
    <React.Fragment>
      <Header />
      {props.content}
      <div className="footer">
        <ContactUs />
        <div className="AboutSocial">
          <div>
            <a href="#" className="fa fa-facebook"></a>
          </div>
          <br />
          <p>Stay in touch with us on SocialMedia</p>
          <p>Copyright © 2020 AlaaEssam. All Rights Reserved</p>
        </div>
      </div>
    </React.Fragment>
  );
}
