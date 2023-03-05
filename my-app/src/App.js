import logo from "./logo.svg";
import "./App.css";
import CreateCards from "./components/create-cards";
import Study from "./components/study";
import InputTest from "./components/input-test";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h1>
					{" "}
					Study Efficiently. Let us generate flash cards based off your text!
				</h1>
				<p>
					<CreateCards />
					{/* <Study /> */}
					<InputTest />
          
				</p>
			</header>
		</div>
	);
}

export default App;
