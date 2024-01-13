import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import { InfoPage } from "./components/infopage/Infopage";
import "./styles.css";

function App() {
	const [bigData, setBigData] = useState({});

	return (
		<Routes>
			<Route path="/" element={<Homepage setData={setBigData} />} />
			<Route path="/info" element={<InfoPage data={bigData} />} />
		</Routes>
	);
}

export default App;
