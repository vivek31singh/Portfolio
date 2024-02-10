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
      As a recent BCA graduate with a passion for both frontend and backend development, I am thrilled to explore opportunities in the field and contribute my skills to meaningful projects. My experience working on both frontend and backend projects has taught me the importance of attention to detail and the value of a strong work ethic. I am committed to delivering high-quality work that meets the needs of clients and users alike. As a hardworking and passionate individual, I am always looking to learn and grow in my skills, and I welcome new challenges and opportunities to expand my knowledge across the entire stack.
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
