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
              <img src="https://i.ibb.co/VBcqgf4/facebook-new.png" />
              <span>Connect with us to improve your draw triangles.</span>
            </div>
            <div>
              <img src="https://i.ibb.co/NNRVSDx/twitter.png" />
              <span>Be in the know on the latest news, tips, and tricks.</span>
            </div>

            <div>
              <img src="https://i.ibb.co/b5kQF5X/linkedin.png" />
              <span>Leverage your professional network, and get hired.</span>
            </div>
          </div>

          <div className="contact-address">
            <div>
              <img src="https://i.ibb.co/p2TB8FD/address.png" />
              <span>Svogerslev 41,400 Roskilde,Denmark</span>
            </div>

            <div>
              <img src="https://i.ibb.co/rkdc2xV/coworking.png" />
              <span>15 employees</span>
            </div>

            <div>
              <img src="https://i.ibb.co/PGDMt7h/internet-v1.png" />
              <span>www.find_triangle.com</span>
            </div>

            <div>
              <img src="https://i.ibb.co/PFqQJ0v/add-contact-to-company.png" />
              <span>+45-12345678</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
