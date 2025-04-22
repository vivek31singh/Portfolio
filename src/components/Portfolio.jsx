import React from "react";
import codeIt from "../assets/codeIt.png";
import Proptzo from "../assets/proptzo.png";
import spotify from "../assets/spotify.png";
import Weather_forcast from "../assets/portfolio/reactWeather.png";
import Cosmic_Reactors from "../assets/Clouds_Milky_Way.jpg";
import WhatsApp_Clone from "../assets/WhatsApp_Clone.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: codeIt,
      title: "codeIt (online coding platform)",
      href1: "https://www.linkedin.com/posts/vivek-singh05_nextjs-webrtc-graphql-activity-7310269514946867201-3WBq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD74NAkBZg7JkQ_15rxTY1S-2bAtiV_0Ako",
      href2: "https://github.com/vivek31singh/codeIt",
      
    },
    {
      id: 2,
      src: Proptzo,
      title: "Proptzo (real estate platform)",
      
    },
    {
      id: 3,
      src: spotify,
      title: "spotify redesign",
      href2: "https://github.com/vivek31singh/Spotify_Clone",
      
    },

    {
      id: 4,
      src: Weather_forcast,
      title: "Weather forcast application",
      href1: "https://react-weatherforcast.netlify.app/",
      href2: "https://github.com/vivek31singh/Weather-forcast-application.git",
    },


    {
      id: 5,
      src: Cosmic_Reactors,
      title: "Cosmic wikipedia application",
      href2: "https://github.com/vivek31singh/Cosmos_Reactors",
    },

    {
      id: 6,
      src: WhatsApp_Clone,
      title: "WhatsApp redesign",
      href2: "https://github.com/vivek31singh/WhatsApp-Clone-Full-Stack",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen grid place-items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, src, href1, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-48"
              />
              <div className="flex items-center justify-center py-2">
                <p className="font-bold capitalize">{title}</p>
              </div>
              <div className="flex items-center justify-center">
               {href1 && <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {" "}
                  <a href={href1} target="_blank" rel="noreferrer">Demo</a>
                </button>}
{href2 &&                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {" "}
                  <a href={href2} target="_blank" rel="noreferrer">Code</a>
                </button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
