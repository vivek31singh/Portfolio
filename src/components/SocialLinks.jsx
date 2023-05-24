import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import resume from "../assets/vivek_resume.pdf"
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com/in/vivek-singh05/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/vivek31singh",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:vickydigari6154@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
         Instagram <FaInstagram size={25} />
        </>
      ),
      href: "https://www.instagram.com/veloxy_playz/",
    },

    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: resume,
      style: "rounded:br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ child, id, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-36 h-14 px-4 ml-[-100px] hover:ml-[-10px] bg-gray-500 hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
