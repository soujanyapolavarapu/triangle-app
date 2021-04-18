import React from "react";
import HomeBackground from "./HomeBackground";

//  This is home page component, here i am giving just a brief info about triangles and
// <HomeBackground> component is used as a children component.
const Home = () => {
  return (
    <HomeBackground>
      <div>
        <div className="home">
          <h1 className="home_h1">Welcome to Triangle's World</h1>

          <h2 className="home_h2">What is a Triangle??</h2>
          <p>
            A triangle is a polygon with three edges and three vertices. It is
            one of the basic shapes in geometry.
          </p>

          <h2 className="home_h2">History</h2>
          <p>
            Thales of Miletus (624–547 BC) is credited with bringing geometry
            from Egypt into Greece and laying some early groundwork for the
            study of triangles. Pythagoras, whose famous theorem is still in
            use, is hailed as the first 'pure mathematician' to study geometry
            by applying abstract mathematical concepts.
          </p>

          <p>
            From an interior point in a reference triangle, the nearest points
            on the three sides serve as the vertices of the pedal triangle of
            that point. If the interior point is the circumcenter of the
            reference triangle, the vertices of the pedal triangle are the
            midpoints of the reference triangle's sides, and so the pedal
            triangle is called the midpoint triangle or medial triangle. The
            midpoint triangle subdivides the reference triangle into four
            congruent triangles which are similar to the reference triangle.
          </p>
        </div>
      </div>
    </HomeBackground>
  );
};
export default Home;
