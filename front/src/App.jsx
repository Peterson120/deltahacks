import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/homepage/Homepage";
import { InfoPage } from "./components/infopage/Infopage";
import "./styles.css";

function App() {
	const [form, setForm] = useState(new FormData());

	return (
		<Routes>
			<Route path="/" element={<Homepage setForm={setForm} />} />
			<Route path="/info" element={<InfoPage form={form} />} />
		</Routes>
	);
}

export default App;
