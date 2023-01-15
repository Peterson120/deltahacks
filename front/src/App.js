import "./styles.css";
import Box from "./components/Box/Box";
import Nav from "./components/Nav/Nav";
import {Homepage} from "./components/homepage/Homepage";
import {useRef} from "react";

function App() {
	const infoRef = useRef(null);

	return (
			<div>
				<div id="home-container" className="h-screen bg-darkBg">
					<Homepage scrollTo={infoRef}/>
				</div>
				<div ref={infoRef} id="info-page" className="hidden">
					<Nav/>
					<div className="flex justify-center items-center">
						<div className="main flex flex-row items-center">
							<Box title='Positive'>
								<p>Hi</p>
							</Box>
							<Box id='b2' title='Negative'>
								<p>Bye</p>
							</Box>
						</div>
					</div>
				</div>
			</div>
	);
}

export default App;
