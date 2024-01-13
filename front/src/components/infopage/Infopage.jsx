import { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";
import Box from "./Box/Box";
import { MdOutlineClose } from "react-icons/md";

export function InfoPage(props) {
	const [loading, setLoading] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [title, setTitle] = useState(props.title);

	useEffect(() => {
		async function loadTable() {
			let posArr = [];
			let negArr = [];
			const len = props.data.PositiveList
				? props.data.PositiveList.length
				: 0;
			for (let i = 0; i < len; i++) {
				let dataObjPos = {};
				let dataObjNeg = {};
				dataObjPos["name"] = props.data.PositiveList[i][0];
				dataObjPos["count"] = props.data.PositiveList[i][1];
				posArr.push(dataObjPos);

				dataObjNeg["name"] = props.data.NegativeList[i][0];
				dataObjNeg["count"] = props.data.NegativeList[i][1];
				negArr.push(dataObjNeg);
			}
			setPosData(posArr);
			setNegData(negArr);
			setPosSent(props.data.PositiveInput);
			setNegSent(props.data.NegativeInput);
		}

		setLoading(true);
		loadTable()
			.then(() => setLoading(false))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, [props.data]);

	const infoRef = useRef(null);

	const [posData, setPosData] = useState({
		PositiveList: [],
	});

	const [negData, setNegData] = useState({
		NegativeList: [],
	});

	const [posSent, setPosSent] = useState({
		positiveSent: [],
	});

	const [negSent, setNegSent] = useState({
		positiveSent: [],
	});

	const [modalText, setModalText] = useState("");

	return (
		<div ref={infoRef} id="info-page" className="fadeIn">
			<Nav />
			<div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex main flex-col md:flex-row space-y-2 md:space-x-2">
					{modalOpen ? (
						<>
							<div className="modal md:w-[35vw] md:h-[35vw] w-[80vw] h-[40vh] flex items-center">
								<div className="border-2 border-solid border-[#FFD178] w-full h-full m-auto box flex justify-center">
									<div className="gradient self-start flex items-center">
										<span className="float-right font-bold text-[#FFD178] hover:text-[#FFD178] hover:no-underline hover:cursor-pointer ml-10 absolute">
											<MdOutlineClose
												onClick={() =>
													setModalOpen(false)
												}
												className="w-14 h-14"
											/>
										</span>
										<h2 className="title-text mx-auto">
											{title}
										</h2>
									</div>
									<h1
										id="info"
										className="p-[20px] text-[#FFD178] text-center h-full w-full overflow-y-scroll whitespace-pre-line"
									>
										{modalText}
									</h1>
								</div>
							</div>
						</>
					) : (
						<>
							<Box
								title="Positive"
								data={posData}
								sents={posSent}
								loading={loading}
								setModalOpen={setModalOpen}
								setTitle={setTitle}
								setModalText={setModalText}
							/>
							<Box
								id="b2"
								title="Negative"
								data={negData}
								sents={negSent}
								loading={loading}
								setModalOpen={setModalOpen}
								setTitle={setTitle}
								setModalText={setModalText}
							/>
						</>
					)}
				</div>
			</div>
	);
}
