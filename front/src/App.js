import "./styles.css";

import { Homepage } from "./components/homepage/Homepage";
import { InfoPage } from "./components/infopage/Infopage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [bigData, setBigData] = useState({});

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage setData={setBigData} />} />
        <Route path="/info" element={<InfoPage data={bigData} />} />
      </Routes>
    </div>
  );
}

export default App;
