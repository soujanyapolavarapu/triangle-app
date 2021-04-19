import React, { useState } from "react";


const triangleNames = ({ sideOne, sideTwo, sideThree, setMessage }) => {
  sideOne = Number(sideOne);
  sideTwo = Number(sideTwo);
  sideThree = Number(sideThree);

  switch (true) {
    case sideOne === 0 || sideTwo === 0 || sideThree === 0:
      setMessage("Sides should not be zero cm");
      break;

    case sideOne === sideTwo && sideTwo === sideThree:
      setMessage("Equilateral triangle");
      break;

    case sideOne === sideTwo || sideTwo === sideThree || sideThree === sideOne:
      setMessage("Isoceles Triangle");
      break;

    case sideOne !== sideTwo && sideTwo !== sideThree && sideThree !== sideOne:
      setMessage("Scalene Triangle");
      break;

    default:
      setMessage("Unknown");
  }
};

const FindTriangleName = () => {
  const [sideOne, setSideOne] = useState("");
  const [sideTwo, setSideTwo] = useState("");
  const [sideThree, setSideThree] = useState("");
  const [message, setMessage] = useState("");
  const [firstSide, setFirstSide] = useState("");
  const [secondSide, setSecondSide] = useState("");
  const [thirdSide, setThirdSide] = useState("");

  const send = (event) => {
    event.preventDefault();
    triangleNames({ sideOne, sideTwo, sideThree, setMessage });
    setFirstSide(sideOne);
    setSecondSide(sideTwo);
    setThirdSide(sideThree);
    console.log(firstSide);
    //emptying states here
    setSideOne("");
    setSideTwo("");
    setSideThree("");
  };
  return (
    <div>
      <form onSubmit={send}>
        <h1>Enter the sides of a triangle</h1>
        <br />
        <label htmlFor="sideOne" className='label_one'>Triangle side one *</label>
        <input
          id="sideOne"
          type="number"
          value={sideOne}
          placeholder="Enter side one"
          min="1"
          required
          onChange={(e) => setSideOne(e.target.value)}
        />
        <br />
        <label htmlFor="sideTwo" className='label_one'>Triangle side two *</label>
        <input
          id="sideTwo"
          type="number"
          value={sideTwo}
          placeholder="Enter side two"
          min="1"
          required
          onChange={(e) => setSideTwo(e.target.value)}
        />
        <br />
        <label htmlFor="sideThree">Triangle side three *</label>
        <input
          id="sideThree"
          type="number"
          value={sideThree}
          placeholder="Enter side three"
          min="1"
          required
          onChange={(e) => setSideThree(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* <h1>{message}</h1> */}
      <div className="displayMessage">
        {message === "Equilateral triangle" && (
          <div className="responcecard">
            <div>
              <p>
                Given sides {firstSide}cm, {secondSide}cm and {thirdSide}cm
                forms an Equilateral Triangle. It has three sides of the same
                length. An equilateral triangle is also a regular polygon with
                all angles measuring 60°.
              </p>
            </div>
            <div>
              <img
                src="src/client/assets/images/equilateralImage.png"
                alt="Equilateral Triangle"
                
              />
            </div>
          </div>
        )}

        {message === "Isoceles Triangle" && (
          <div className="responcecard">
            <div>
              <p>
                Given sides {firstSide}cm, {secondSide}cm and {thirdSide}cm
                forms an Isoceles Triangle. It has any two sides of equal
                length.
              </p>
            </div>
            <div>
              <img
                src="src/client/assets/images/isoceleImage.jpeg"
                alt="Isoceles Triangle"
                
              />
            </div>
          </div>
        )}

        {message === "Scalene Triangle" && (
          <div className="responcecard">
            <div>
              <p>
                Given sides {firstSide}cm, {secondSide}cm and {thirdSide}cm
                forms a Scalene Triangle. It has all its sides of different
                lengths. Equivalently, it has all angles of different measure.
              </p>
            </div>
            <div>
              <img
                src="src/client/assets/images/scalene.jpeg "
                alt="Scalene Triangle"
                
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default FindTriangleName;
