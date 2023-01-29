import "./styles.css";

import { Homepage } from "./components/homepage/Homepage";
import { InfoPage } from "./components/infopage/Infopage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
