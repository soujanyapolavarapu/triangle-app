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

      <div className="input-search-icon">
        <input type="text" placeholder="What are you looking for?"></input>
        <img
          className="search-icon"
          src="https://i.ibb.co/6H2K05c/web-search.png"
        />
      </div>

      <div className="questions-container">
        <div>
          <h3>Frequently Asked Questions</h3>
        </div>
        <ul>
          <li>What is Triangle's World?</li>
          <li>How does Triangle's World work?</li>
          <li>Where does Triangle's World currently operate?</li>
          <li>Are experiences online or in-person?</li>
          <li>What information i can get here?</li>
          <li>What about my safety?</li>
          <li>How do I contact you?</li>
        </ul>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
