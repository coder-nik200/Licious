import React from "react";
import welcome from "../assets/welcome.avif";
import advertisement from "../assets/advertisement.avif";

const Advertisement = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 gap-6">
      {/* Bigger Welcome Image */}
      <img
        src={welcome}
        alt="Welcome"
        className="w-3/4 max-w-8xl rounded-lg shadow-md"
      />

      {/* Bigger Advertisement Image */}
      <img
        src={advertisement}
        alt="Advertisement"
        className="w-3/4 max-w-8xl rounded-lg shadow-md"
      />
    </div>
  );
};

export default Advertisement;
