//Here i am importing Hooks from react library.
import React, { Children, useEffect, useState } from "react";

//This component is used as a children component and exported in home component to change background images repeated.
const slideImages = [
  "https://i.ibb.co/QkDP6HM/background1.png",
  "https://i.ibb.co/wMMMBf4/background2.jpg",
  "https://i.ibb.co/ZMCnqh5/background3.jpg",
  "https://i.ibb.co/RhvWSzz/background4.jpg",
];

function HomeBackground({ children }) {
  const [image, setImage] = useState(slideImages[0]);
  const [index, setIndex] = useState(0);
  let timer;

  const Photo = () => {
    return <img className="back-images" src={image} />;
  };

  //The UseEffect Hook lets you perform side effects in function components:
  useEffect(() => {
    displayPhoto();

    //Return will  performs as a cleanup when the subscription changes.
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  //calling this function in useEffect
  const displayPhoto = () => {
    timer = setInterval(() => {
      if (index === slideImages.length - 1) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }

      setImage(slideImages[index]);
    }, 3000);
  };
  return (
    <div className="container">
      <Photo />
      {children}
    </div>
  );
}

export default HomeBackground;
