import "./styles.css";
import Box from "./components/Box/Box";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <div className="">
            <Nav />
            <div className="grid">
                <div className="main flex flex-row self-center justify-self-center">
                    <Box>

                    </Box>
                    <Box>

                    </Box>
                </div>
            </div>
        </div>
    );
}

export default App;