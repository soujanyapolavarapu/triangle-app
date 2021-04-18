import React from "react";

{
  /* This is just a contact page   */
}
const Contact = () => {
  return (
    <div>
      <div className="background-image-contact">
        <div className="contact-details">
          <h1 className="contact-title">Come say hello!</h1>
          <div className="social-media-contact-icons">
            <div>
              <img src="src/client/assets/images/facebook-new.png" />
              <span>Connect with us to improve your draw triangles.</span>
            </div>
            <div>
              <img src="src/client/assets/images/twitter.png" />
              <span>Be in the know on the latest news, tips, and tricks.</span>
            </div>

            <div>
              <img src="src/client/assets/images/linkedin.png" />
              <span>Leverage your professional network, and get hired.</span>
            </div>
          </div>

          <div className="contact-address">
            <div>
              <img src="src/client/assets/images/address.png" />
              <span>Svogerslev 41,400 Roskilde,Denmark</span>
            </div>

            <div>
              <img src="src/client/assets/images/coworking.png" />
              <span>15 employees</span>
            </div>

            <div>
              <img src="src/client/assets/images/internet--v1.png" />
              <span>www.find_triangle.com</span>
            </div>

            <div>
              <img src="src/client/assets/images/add-contact-to-company.png" />
              <span>+45-12345678</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
