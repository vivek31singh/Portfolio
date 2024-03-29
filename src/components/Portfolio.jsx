import React from "react";
import spotify from "../assets/spotify.png";
import Weather_forcast from "../assets/portfolio/reactWeather.png";
import Cosmic_Reactors from "../assets/Clouds_Milky_Way.jpg";
import Instagram_Clone from "../assets/instagram_Clone.png";
import WhatsApp_Clone from "../assets/WhatsApp_Clone.png";
import YouTube_Clone from "../assets/YouTube_Clone.png";
import Dashboard from "../assets/E-dashboard.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: spotify,
      href1: "https://github.com/vivek31singh/Spotify_Clone",
      href2: "https://github.com/vivek31singh/Spotify_Clone",
      
    },

    {
      id: 2,
      src: Weather_forcast,
      href1: "https://react-weatherforcast.netlify.app/",
      href2: "https://github.com/vivek31singh/Weather-forcast-application.git",
    },
    {
      id: 3,
      src: YouTube_Clone,
      href1: "https://github.com/vivek31singh/YouTube-Web-Application-Clone",
      href2: "https://github.com/vivek31singh/YouTube-Web-Application-Clone",
    },
    {
      id: 4,
      src: Instagram_Clone,
      href1: "https://github.com/vivek31singh/Instagram-Clone",
      href2: "https://github.com/vivek31singh/Instagram-Clone"
    },
    {
      id: 5,
      src: Cosmic_Reactors,
      href1: "https://cosmos-reactor.netlify.app/",
      href2: "https://github.com/vivek31singh/Cosmos_Reactors",
    },
    {
      id: 6,
      src: Dashboard,
      href1: "https://github.com/vivek31singh/E-Dashboard",
      href2: "https://github.com/vivek31singh/E-Dashboard"
    },
    {
      id: 7,
      src: WhatsApp_Clone,
      href1: "https://github.com/vivek31singh/WhatsApp-Clone-Full-Stack",
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
          {portfolios.map(({ id, src, href1, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {" "}
                  <a href={href1} target="_blank" rel="noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {" "}
                  <a href={href2} target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
