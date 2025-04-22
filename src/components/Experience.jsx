import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.jpeg";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import Redux from "../assets/Redux.png"
import zustand from "../assets/zustand.png"
import recoil from "../assets/recoil.png"
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import GraphQl from "../assets/graphql.png"
import Express from "../assets/Express.png"
import MongoDB from "../assets/MongoDB.png"
import Node from "../assets/node.png"
import WebSocket from "../assets/WebSocket.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "Typescript",
      style: "shadow-yellow-500",
    },

    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "Nextjs",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: Redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: zustand,
      title: "Zustand",
      style: "shadow-purple-400",
    },
    {
      id: 9,
      src: recoil,
      title: "Recoil",
      style: "shadow-purple-400",
    },

    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 11,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 13,
      src: GraphQl,
      title: "GraphQl",
      style: "shadow-purple-500",
    },
    {
      id: 14,
      src: Express,
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      id: 15,
      src: Node,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 16,
      src: WebSocket,
      title: "WebSocket",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
    name="experience"
    className="bg-gradient-to-b from-gray-800 text-white to-black w-full h-fit pt-20 grid place-items-center"
  >
    
    <div className="max-w-screen-lg mx-auto  p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
            </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
