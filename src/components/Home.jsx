import React from "react";
import my_image from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a frontend developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hi there! My name is vivek and I'm a final year BCA student with a
            passion for frontend development. As an aspiring developer, I am
            constantly learning and growing my skills to create visually
            appealing and user-friendly websites. I'm excited to take my first
            steps into the industry and create innovative solutions for
            businesses and individuals alike.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={my_image}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

