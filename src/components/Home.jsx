import React from "react";
import my_image from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl pt-32 font-bold text-white">
          I'm a MERN Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        Hey there! I'm Vivek, a recent graduate with a BCA degree and a fervent interest in MERN full-stack development. I am enthusiastic about creating smooth user experiences and building robust applications. With a comprehensive focus on both frontend and backend technologies, I am committed to refining my skills to develop dynamic and interactive web applications. Let's collaborate and code something extraordinary together!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
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

