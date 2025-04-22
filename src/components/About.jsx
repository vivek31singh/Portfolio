import React from "react";

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="md:pb-8 sm:pb-4">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className="text-x mt-5">
      Hello! I'm Vivek, an MCA student and Full Stack MERN developer, passionate about building user-friendly and efficient web applications. I'm eager to enhance and contribute my skills in full-stack development, particularly in Nextjs and Typescript. Let's work together to create something amazing!
      </p>
<p>
          If you're looking for a dedicated and enthusiastic MERN developer
          to bring your projects to life, I would love to chat and see how I can
          contribute to your team. Thank you for considering my portfolio and
          for the opportunity to share my work with you.
        </p>
      </div>
    </div>
  );
};

export default About;
