import React, { useState, useEffect } from "react";

//Here i am using react hooks and fetching data from API, the data is having just imfo about types of triangles.
const TrianglesContent = () => {
  const [triangles, setTriangles] = useState([]);

  useEffect(() => {
    fetchedData();
  }, []);
  //Fetching details of triangle from API
  const fetchedData = () => {
    fetch("/api/triangles")
      .then((res) => res.json())
      .then((triangleData) => {
        setTriangles(triangleData);
      });
  };

  //this below array consists of gify images, these will display while fetching data from API
  const imgArray = [
    "src/client/assets/images/equilateral.gif",
    "src/client/assets/images/isoceles.gif",
    "src/client/assets/images/scalene.gif",
  ];

  return (
    <div>
      {triangles.map((triangle, i) => (
        <div key={triangle.id} className="fetchTiangles">
          <div>
            <h1>{triangle.triangle_name}</h1>
            <p>{triangle.description}</p>
          </div>

          <div className="fetchImages">
            <img
              src={
                imgArray[triangle.id - 1]
                  ? imgArray[triangle.id - 1]
                  : "src/client/assets/images/random.gif"
              }
              alt="triangle"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrianglesContent;
