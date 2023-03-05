import React from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

import React from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

function FrontCard() {
	// get question from db
	return <div>front card</div>;
}

function BackCard() {
	// get answer from db
	return "back card";
}

function FlipCard() {
	const [flip, setFlip] = useState(false);
	return (
		<div className="Card">
			<ReactCardFlip isFlipped={flip} flipDirection="vertical">
				<div
					style={{
						width: "300px",
						height: "200px",
						background: "#d7fbda",
						fontSize: "40px",
						color: "green",
						margin: "20px",
						borderRadius: "4px",
						textAlign: "center",
						padding: "20px",
					}}
				>
					<FrontCard />
					<br />
					<br />
					<button
						style={{
							width: "150px",
							padding: "10px",
							fontSize: "20px",
							background: "#f5d9fa",
							fontWeight: "bold",
							borderRadius: "5px",
						}}
						onClick={() => setFlip(!flip)}
					>
						Flip
					</button>
				</div>
				<div
					style={{
						width: "300px",
						height: "200px",
						background: "#fbd7f8",
						fontSize: "40px",
						color: "blue",
						margin: "20px",
						borderRadius: "4px",
						textAlign: "center",
						padding: "20px",
					}}
				>
					<BackCard />
					<br />
					<button
						style={{
							width: "150px",
							padding: "10px",
							fontSize: "20px",
							background: "#f5d9fa",
							fontWeight: "bold",
							borderRadius: "5px",
						}}
						onClick={() => setFlip(!flip)}
					>
						Flip
					</button>
				</div>
			</ReactCardFlip>
		</div>
	);
}
const Study = () => {
	return (
		<div className="Component">
			<h2>Study your cards!</h2>
			<FlipCard />
		</div>
	);
};

export default Study;
