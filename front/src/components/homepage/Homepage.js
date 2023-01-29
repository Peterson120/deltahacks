import rocket from "./rocketship.png";
import smoke from "./smoke.png";
import stars from "./stars.png";
import React from "react";
import "./HomePage.css";
import { Consts } from "../../consts";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function Homepage() {
  const goAnimate = () => {
    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeUp = document.querySelector(".fade-up");
    fadeDown.forEach((element) => {
      element.classList.add("animate__fadeOutDown");
    });
    fadeUp.classList.add("animate__backOutUp");
  };

  const navigate = useNavigate();
  const change = useCallback(
    () => navigate("/info", { replace: true }),
    [navigate]
  );

  return (
    <div id="home-container" className="h-screen fadeIn bg-darkBg">
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
          <input className="text-[black]" type="text"></input>
        </div>
        <div className="launch">
          <button
            to="/info"
            id="launch"
            onMouseDown={goAnimate}
            onAnimationEnd={change}
            className="animate__animated fade-down text-white border-3 px-9 py-4 mt-5 text-xl font-bold transition-colors duration-150 border border-blue rounded-lg focus:shadow-outline hover:bg-blueBg"
          >
            Launch!
          </button>
        </div>
      </div>
    </div>
  );
}
