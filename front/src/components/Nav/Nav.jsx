import { Navbar } from "@material-tailwind/react";
import "./Nav.css";
import { ReactComponent as Rocket } from "./rocketship.svg";
import { name } from "../../consts";

export default function Nav() {
  const reset = () => {
    const infoContainer = document.getElementById("info-page");
    const homeContainer = document.getElementById("home-container");
    const fadeDown = document.querySelectorAll(".fade-down");
    const fadeUp = document.querySelector(".fade-up");

    infoContainer.classList.add("hidden");
    homeContainer.classList.remove("absolute");
    homeContainer.classList.remove("animate__backOutUp");
    fadeDown.forEach((element) => {
      element.classList.remove("animate__fadeOutDown");
    });
    fadeUp.classList.remove("animate__backOutUp");
  };

  return (
    <Navbar className="self-start py-1 lg:py-2 flex flex-row mt-5">
      <Rocket className="rocket" />
      <button
        onMouseDown={reset}
        className="title tracking-wide drop-shadow-2xl cursor-pointer pt-8 font-extrabold"
      >
        <span>{name}</span>
      </button>
    </Navbar>
  );
}
