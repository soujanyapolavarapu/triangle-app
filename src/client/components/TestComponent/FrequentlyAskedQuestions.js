import React from "react";

{
  /* It is just a FAQ page, here we cam see some viewers questions    */
}
const FrequentlyAskedQuestions = () => {
  return (
    <div className="freq-ans-ques">
      <div>
        <h1>Help center</h1>
      </div>
      <div className="questions-container">
        <div>
          <h3>Frequently Asked Questions</h3>
        </div>
        <ul>
          <li>Q: What is Triangle's World?</li>
          <li>A: It gives the information about three side of triangle.</li>
          <br />

          <li>Q: How does Triangle's World work?</li>
          <li>
            A: IF you give the three side of triangle in centimeter, based on
            the given sides, it will show the type of triangle.
          </li>
          <br />
          <li>Q: Where does Triangle's World currently operate?</li>
          <li>
            A: Head office is in Denmark,information can be available 24/7
            around the world.{" "}
          </li>
          <br />
          <li>Q: What about my safety?</li>
          <li>
            A: We do not ask or store any personal information.And we are keep
            on updgrading our website.
          </li>
          <br />
          <li>Q: How to contact?</li>
          <li>A: Please follow us, it consists of our social websites.</li>
        </ul>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
