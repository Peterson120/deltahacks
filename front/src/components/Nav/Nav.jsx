import {Navbar} from "@material-tailwind/react";
import "./Nav.css";
import {ReactComponent as Rocket} from "./rocketship.svg";
import {name} from "../../consts";
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
		<Navbar className="absolute -top-2 md:top-2 pl-[5%] self-start border-0 bg-darkBg">
			<button
				className="flex flex-row top-2 left-20 items-center justify-items-center"
				onClick={animate}
				onAnimationEnd={reset}
			>
				<Rocket
          id="rocket"
          width={60}
					className="float cursor-pointer transform-[30deg] left-[-50%] w-[5vw] -top-2"
				/>
				<div className="md:pl-2 tracking-wide drop-shadow-2xl cursor-pointer font-extrabold text-white text-lg md:text-6xl pt-4vh">
					{name}
				</div>
			</button>
		</Navbar>
  );
}
