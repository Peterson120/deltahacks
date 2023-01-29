import { Navbar } from "@material-tailwind/react";
import "./Nav.css";
import { ReactComponent as Rocket } from "./rocketship.svg";
import { Consts } from "../../consts";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function Nav() {
  const animate = () => {
    document.getElementById("rocket").classList.remove("float");
    document.getElementById("rocket").classList.add("exit");
  };

  const navigate = useNavigate();
  const reset = useCallback(() => navigate("/", { replace: true }), [navigate]);

  return (
    <Navbar className="self-start border-0 bg-darkBg">
      <button
        className="flex flex-row my-1 lg:my-2 mt-5"
        onClick={animate}
        onAnimationEnd={reset}
      >
        <Rocket id="rocket" className="rocket float cursor-pointer" />
        <span className="title tracking-wide drop-shadow-2xl cursor-pointer font-extrabold">
          {Consts.name}
        </span>
      </button>
    </Navbar>
  );
}
