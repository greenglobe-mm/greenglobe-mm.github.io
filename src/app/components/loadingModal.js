import React, { useEffect, useState } from "react";
import TractorAnimation from "./tractorAnimation";

const LoadingModal = ({ isLoading }) => {
  const [animationDistance, setAnimationDistance] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAnimationDistance(window.innerWidth * 0.6 - 100);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="absolute left-[20%] w-[60%] top-1/3">
        <TractorAnimation
          animationDuration={1000}
          animationDistance={animationDistance}
          iconSize="7em"
          iconColor="red"
        />
      </div>
      <div className="flex flex-col items-center mt-4 z-10">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">
          Loading . . .
        </h2>
      </div>
    </div>
  );
};

export default LoadingModal;
