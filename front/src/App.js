import "./styles.css";
import Box from "./components/Box/Box";
import Nav from "./components/Nav/Nav";
import { Homepage } from "./components/homepage/Homepage";

function App() {
  return (
    <div>
      <div id="home-container" className="h-screen bg-darkBg">
        <Homepage />
      </div>
      <div id="info-page" className="hidden h-screen">
        <Nav />
        <div>
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
