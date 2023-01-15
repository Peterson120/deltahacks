import { Navbar } from "@material-tailwind/react";
import "./Nav.css";
import { ReactComponent as Rocket } from "./rocketship.svg";
import { Consts } from "../../consts";

export default function Nav() {
  const reset = () => {
    const infoContainer = document.getElementById("info-page");
    const homeContainer = document.getElementById("home-container");
    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeUp = document.querySelector(".fade-up");

    infoContainer.classList.add("hidden");
    homeContainer.classList.remove("absolute");
    homeContainer.classList.remove("animate__backOutUp");
    homeContainer.classList.remove("hide");
    fadeDown.forEach((element) => {
      element.classList.remove("animate__fadeOutDown");
    });
    fadeUp.classList.remove("animate__backOutUp");
    homeContainer.classList.remove("hide");
  };

  return (
    <Navbar className="self-start py-1 lg:py-2 flex flex-row ml-10 mt-5 border-0">
      <Rocket className="rocket" />
      <button
        onMouseDown={reset}
        className="title tracking-wide drop-shadow-2xl cursor-pointer pt-8 font-extrabold"
      >
        <span>{Consts.name}</span>
      </button>
    </Navbar>
  );
}
