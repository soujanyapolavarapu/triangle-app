import React from "react";
const About = () => {
  return (
    <div>
      <div>
        <img
          src='/src/client/assets/images/about.gif'
          alt="Gify triangle"
          className="about-triangle-gif"
        />
      </div>
      <div className="card">
        <div className="about-title">
          <h1>About</h1>
        </div>
        {/* This is just a small brief about page   */}
        <div className="about-info">
          <p>
            The Learning Success System is a simple research based method
            parents can use to help children overcome learning difficulties. It
            simplifies the process and enables a parent to work at home with
            their child. The brain is very complex. The brain and body are
            highly integrated. Complex systems such as emotions, incremental
            learning skills, mind body connections and more come into play in
            the learning process. Because of this we believe that no single
            field of expertise has the answer to overcoming a learning
            difficulty. It takes a multi-disciplinary approach. That's what we
            have created.
          </p>
          <p>
            Our main strategy is divided into three parts. Some limited success
            can be achieved by using only one part. Which is what most programs
            do. We believe, that to have maximum success, a system must
            incorporate all three parts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
