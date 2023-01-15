import rocket from "./rocketship.png";
import smoke from "./smoke.png";
import stars from "./stars.png";
import Button from "react-bootstrap/Button";
import React from "react";
import "./HomePage.css";
import { Consts } from "../../consts";

export function Homepage(prop) {
  const goAnimate = () => {
    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeUp = document.querySelector(".fade-up");
    fadeDown.forEach((element) => {
      element.classList.add("animate__fadeOutDown");
    });
    fadeUp.classList.add("animate__backOutUp");
    document.getElementById("info-page").classList.add("fadeIn");
  };

  const hide = () => {
    const infoPage = document.getElementById("info-page");
    document.getElementById("home-container").classList.add("hide");
    infoPage.classList.remove("hidden");
    infoPage.classList.add("block");
  };

  const hiddenFileInput = React.useRef(null);

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    prop.handleFile(fileUploaded);
  };

  return (
    <div className="relative flex flex-col items-center h-full">
      <div className="text-center flex flex-col items-center relative h-full">
        <div className="flex flex-col items-center h-full">
          <img
            className="animate__animated fade-up object-contain rocket-1"
            src={rocket}
            alt="rocket ship"
            draggable="false"
          ></img>
          <img
            className="animate__animated fade-down object-contain smoke"
            src={smoke}
            alt="smoke"
            draggable="false"
          ></img>
          <img
            className="object-contain absolute top-1/2"
            src={stars}
            alt="stars"
            draggable="false"
          ></img>
        </div>
        <div className="animate__animated fade-down head-text">
          {Consts.name}
        </div>
      </div>
      <div className="button animate__animated fade-down text-white text-2xl">
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <input className="text-[black]" type="text"></input>
      </div>
      <div className="launch">
        <button
          id="launch"
          onMouseDown={goAnimate}
          onAnimationEnd={hide}
          className="animate__animated fade-down text-white border-3 px-9 py-4 mt-5 text-xl font-bold transition-colors duration-150 border border-blue rounded-lg focus:shadow-outline hover:bg-blueBg"
        >
          Launch!
        </button>
      </div>
    </div>
  );
}
