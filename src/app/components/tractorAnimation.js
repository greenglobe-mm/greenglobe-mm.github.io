// TractorAnimation.js (Modified)
import React, { useEffect, useState } from "react";
import { FaTractor } from "react-icons/fa";

const TractorAnimation = ({
  animationDuration = 2000,
  animationDistance = 500,
  iconSize = "5em",
  iconColor = "green",
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, animationDuration);
  });

  const tractorStyle = {
    fontSize: iconSize,
    transition: `transform ${animationDuration / 1000}s linear`,
    transform: animate ? `translateX(${animationDistance}px)` : "translateX(0)",
    color: iconColor,
  };

  return (
    <div className="self-start items-start justify-start">
      <FaTractor style={tractorStyle} />
    </div>
  );
};

export default TractorAnimation;
