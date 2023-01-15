import "./styles.css";
import Box from "./components/Box/Box";
import Nav from "./components/Nav/Nav";
import { Homepage } from "./components/homepage/Homepage";

function App() {
  return (
    // <div className="h-screen bg-darkBg">
    //   <Homepage />
    // </div>
    <div className="h-screen w-screen flex items-center">
        <Nav/>
        <div className="main flex flex-row">
              <Box title='Positive'>
                  <p>Hi</p>
            </Box>
              <Box id='b2' title='Negative'>
                  <p>Bye</p>
            </Box>
        </div>
    </div>
  );
}

export default App;
