import React from "react";

//Here i mentioned how the app works basically
const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div>
        <h1>How it works!!!</h1>
      </div>
      <div>
        <ul className="process-how-it-works">
          <li>In Home, it tells about What is triangle and brief history.</li>
          <li>
            In Draw triangle, give the three side of triangle in centimeter,
            based on the sides trinagle impage will be drawn and let you know
            what type of triangle it is(using canvas).
          </li>
          <li>
            In Triangles, it gives different types of triangles
            information(fetched through API).
          </li>
          <li>
            In footer, you can browse through about us, contact us and more.
          </li>
          <li>we hope you enjoy it!!!</li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
