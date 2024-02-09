import React from "react";
import { useNavigate } from "react-router-dom";
import { name, inputTypes } from "../../consts";
import rocket from "./rocketship.png";
import smoke from "./smoke.png";
import stars from "./stars.png";

export function Homepage(props) {
	const [data, setData] = React.useState('');
	const [type, setType] = React.useState(0);
	const [dropdown, setDropdown] = React.useState(false);
	const navigate = useNavigate();

	const setInfo = () => {
		const formData = new FormData();
		formData.append("type", type);
		formData.append(type === 2 ? "file" : "data", data);
		props.setForm(formData);
	};

	const goAnimate = (e) => {
		e.preventDefault();
		setInfo();
		document.querySelectorAll(".fade-down").forEach((element) => {
			element.classList.add("animate__fadeOutDown");
		});
		document.querySelector(".fade-up").classList.add("animate__backOutUp");
	};

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
						{name}
					</div>
					<form
						method="POST"
						onSubmit={goAnimate}
						onAnimationEnd={() => navigate("/info")}
						className="mt-5 absolute top-[60vh] animate__animated fade-down flex flex-col space-y-5 items-center"
					>
						<input
							className="py-2 px-4 rounded-lg text-black text-xl text-center focus:caret-transparent font-bold border border-white transition-colors duration-150 hover:bg-blueBg hover:border-blueBg hover:cursor-pointer w-[10vw]"
							name="type"
							onClick={() => {
								setDropdown(!dropdown);
							}}
							required={true}
							value={dropdown ? "Input Type" : inputTypes[type]}
							onChange={(e) => {}}
						/>
						{dropdown && (
							<div className="absolute bg-white flex flex-col w-[10vw] !mt-0 top-[25%]">
								{inputTypes.map((type, index) => {
									return (
										<div
											key={"type_" + index}
											onClick={() => {
												setType(index);
												setDropdown(false);
												setData("");
											}}
											className="px-10 py-2 text-xl font-bold transition-colors duration-150 hover:cursor-pointer hover:bg-blueBg hover:text-white"
										>
											{type}
										</div>
									);
								})}
							</div>
						)}
						{type === 2 ? (
							<>
								<input
									type="file"
									name="file"
									id="file"
									className="hidden"
									onChange={(e) => setData(e.target.files[0])}
									accept=".csv,.txt,.json"
									required={true}
								/>
								<label
									htmlFor="file"
									className="text-white border-3 px-9 py-4 mt-5 text-xl font-bold transition-colors duration-150 border border-blue rounded-lg focus:shadow-outline hover:bg-blueBg hover:cursor-pointer"
								>
									Upload
								</label>
							</>
						) : (
							<input
								name="data"
								className="my-0 py-2 px-4 rounded-full mx-auto text-[black] min-w-[15vw]"
								type="text"
								value={data}
								onChange={(e) => setData(e.target.value)}
								required={true}
							/>
						)}
						<input
							id="launch"
							value={"Launch!"}
							type="submit"
							className="hover:cursor-pointer text-white border-3 px-9 py-4 mt-5 text-xl font-bold transition-colors duration-150 border border-blue rounded-lg focus:shadow-outline hover:bg-blueBg"
						/>
						{type === 2 && (
							<p className="text-white !mt-1 text-lg font-bold">
								{data.name}
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}
