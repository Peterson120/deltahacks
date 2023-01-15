import {Navbar} from "@material-tailwind/react";
import "./Nav.css";
import {ReactComponent as Rocket} from "./rocketship.svg";
import {Consts} from "../../consts";

export default function Nav() {
	const reset = () => {
		const homeContainer = document.getElementById("home-container");
		const fadeDown = document.querySelectorAll(".fade-down");
		const fadeUp = document.querySelector(".fade-up");

		document.getElementById("info-page").classList.add("hidden");
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
			<Navbar className="self-start border-0">
				<a className="flex flex-row my-1 lg:my-2 mt-5">
					<Rocket className="rocket cursor-pointer" onClick={reset} />
					<span onMouseDown={reset} className="title tracking-wide drop-shadow-2xl pt-8 cursor-pointer font-extrabold">{Consts.name}</span>
				</a>
			</Navbar>
	);
}
