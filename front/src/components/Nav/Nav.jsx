import { Navbar } from "@material-tailwind/react";
import "./Nav.css";
import { ReactComponent as Rocket } from "./rocketship.svg";
import { Consts } from "../../consts";

export default function Nav() {
  const animate = () => {
    document.getElementById("rocket").classList.remove("float");
    document.getElementById("rocket").classList.add("exit");
  };
  const reset = () => {
    const homeContainer = document.getElementById("home-container");
    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeUp = document.querySelector(".fade-up");

    document.getElementById("rocket").classList.remove("exit");
    document.getElementById("rocket").classList.add("float");
    document.getElementById("info-page").classList.add("hidden");
    homeContainer.classList.remove("absolute");
    homeContainer.classList.remove("animate__backOutUp");
    homeContainer.classList.remove("hidden");
    fadeDown.forEach((element) => {
      element.classList.remove("animate__fadeOutDown");
    });
    fadeUp.classList.remove("animate__backOutUp");
    homeContainer.classList.remove("hidden");
  };

  return (
    <Navbar className="self-start border-0 bg-darkBg">
      <a className="flex flex-row my-1 lg:my-2 mt-5">
        <Rocket
          id="rocket"
          className="rocket float cursor-pointer"
          onMouseDown={animate}
          onAnimationEnd={reset}
        />
        <span
          onMouseDown={animate}
          onAnimationEnd={reset}
          className="title tracking-wide drop-shadow-2xl cursor-pointer font-extrabold"
        >
          {Consts.name}
        </span>
      </a>
    </Navbar>
  );
}
