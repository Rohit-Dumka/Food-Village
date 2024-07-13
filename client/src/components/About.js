import food from "../utils/images/burger-image.png";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-5xl w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10 lg:space-y-0">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Welcome to <br /> The world of <br /><br/>
              <span className="bg-orange-500 py-2 px-4 rounded-lg text-white font-bold inline-block">
                Tasty & Fresh Food
              </span>
            </h1>
            <h4 className="text-xl lg:text-2xl italic">
              "Better you will feel if you eat a Food
              <span className="text-orange-700">Village</span> healthy meal"
            </h4>
          </div>
          <div className="lg:w-1/2">
            <img src={food} alt="Food Image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
