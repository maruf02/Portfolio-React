import React from "react";
import "./IconAnime.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
const IconAnime = () => {
  return (
    <div>
      <div className="mx-auto pt-6  container lg:-ml-28 text-center justify-center flex gap-4 ">
        <ul className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <a href="#">
              <BsFacebook className="text-2xl"></BsFacebook>
            </a>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <a href="#">
              <BsInstagram className="text-2xl"></BsInstagram>
            </a>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <a href="#">
              <BsTwitter className="text-2xl"></BsTwitter>
            </a>
          </li>
          <li className="icon linkedin">
            <span className="tooltip">Linkedin</span>
            <a href="#">
              <BsLinkedin className="text-2xl"></BsLinkedin>
            </a>
          </li>
          <li className="icon github">
            <span className="tooltip">Github</span>
            <a href="#">
              <BsGithub className="text-2xl"></BsGithub>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconAnime;
