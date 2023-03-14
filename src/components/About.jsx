import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20 ">
          As a BCA final year student with a passion for frontend development, I
          am excited to explore opportunities in the field and contribute my
          skills to meaningful projects. My experience working on frontend
          projects has taught me the importance of attention to detail and the
          value of a strong work ethic. I am committed to delivering
          high-quality work that meets the needs of clients and users alike. As
          a hardworking and passionate individual, I am always looking to learn
          and grow in my skills, and I welcome new challenges and opportunities
          to expand my knowledge.
        </p>

        <br />

        <p className="text-xl">
          If you're looking for a dedicated and enthusiastic frontend developer
          to bring your projects to life, I would love to chat and see how I can
          contribute to your team. Thank you for considering my portfolio and
          for the opportunity to share my work with you.
        </p>
      </div>
    </div>
  );
};

export default About;
