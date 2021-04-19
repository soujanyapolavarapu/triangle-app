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
            In Find triangle, give the three side of triangle in centimeter,
            based on the sides of the trinagle. It will show the type of a triangle.
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
