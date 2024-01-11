import rocket from "./rocketship.png";
import smoke from "./smoke.png";
import stars from "./stars.png";

import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Consts } from "../../consts";

export function Homepage(props) {
  const getInfo = () => {
    const info = document.getElementById("input-info").value;
    fetch("/acceptData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: info,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        props.setData(res);
      })
      .catch((err) => console.log(err));
  };

  const goAnimate = (e) => {
    e.preventDefault();

    getInfo();

    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeUp = document.querySelector(".fade-up");
    fadeDown.forEach((element) => {
      element.classList.add("animate__fadeOutDown");
    });
    fadeUp.classList.add("animate__backOutUp");
    props.setData({});
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
              className="absolute animate__animated fade-up object-contain top-[12vh]"
              src={rocket}
              alt="rocket ship"
              draggable="false"
            ></img>
            <img
              className="animate__animated fade-down object-contain mb-0 mt-auto"
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
          <div className="absolute animate__animated fade-down text-white top-[45vh] text-8xl font-bold">
            {Consts.name}
          </div>
          <form
            onSubmit={goAnimate}
            onAnimationEnd={change}
            className="absolute top-[70vh]"
          >
            <div className=" justify-center animate__animated fade-down text-white text-2xl">
              <input
                name="data-info"
                id="input-info"
                className="my-0 mx-auto text-[black]"
                type="text"
              />
            </div>
            <div>
              <button
                id="launch"
                className="animate__animated fade-down text-white border-3 px-9 py-4 mt-5 text-xl font-bold transition-colors duration-150 border border-blue rounded-lg focus:shadow-outline hover:bg-blueBg"
              >
                Launch!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
