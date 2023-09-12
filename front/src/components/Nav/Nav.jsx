import {Navbar} from "@material-tailwind/react";
import "./Nav.css";
import {ReactComponent as Rocket} from "./rocketship.svg";
import {Consts} from "../../consts";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

export default function Nav() {
  const animate = () => {
    document.getElementById("rocket").classList.remove("float");
    document.getElementById("rocket").classList.add("exit");
  };

  const navigate = useNavigate();
  const reset = useCallback(() => navigate("/", {replace: true}), [navigate]);

  return (
      <Navbar className="fixed pl-[5%] self-start border-0 bg-darkBg">
        <button
            className="flex flex-row my-1 lg:my-2 items-center pt-[1%]"
            onClick={animate}
            onAnimationEnd={reset}
        >
          <Rocket id="rocket" className="col-2 float cursor-pointer transform-[30deg] w-[5vw] mt-[-10%] mx-0 px-0"/>
          <div
              className="col-2 tracking-wide drop-shadow-2xl cursor-pointer font-extrabold text-white text-[2.5vw] pt-4vh">
            {Consts.name}
          </div>
        </button>
      </Navbar>
  );
}
