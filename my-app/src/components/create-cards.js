import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

const CreateCards = () => {
	let jsonOutput;
	const chatgptrequest = async (e) => {
		try {
			await fetch(`https://api.openai.com/v1/completions`, {
				body: JSON.stringify({
					model: "text-davinci-003",
					prompt: userInput,
					temperature: 0, //0.3
					max_tokens: 7, //2000
				}),
				method: "POST",
				headers: {
					"content-type": "application/json",
					Authorization:
						"Bearer " + "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",
				},
			}).then((response) => {
				console.log(response); //If you want to check the full response
				if (response.ok) {
					response.json().then((json) => {
						console.log(json); //If you want to check the response as JSON
						console.log(json.choices[0].message.content); //HERE'S THE CHATBOT'S RESPONSE
						jsonOutput = json.choices[0].message.content;
						// e.preventDefault(); // prevent from refreshing
						// try {
						// 	const body = { jsonOutput };
						// 	fetch("http://localhost:8080", {
						// 		method: "POST",
						// 		headers: { "Content-Type": "application/json" },
						// 		body: JSON.stringify(body),
						// 	});
						// 	window.location = "/chatGPT";
						// } catch (error) {
						// 	console.error(error.message);
						// }
					});
				}
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	const [userInput, setUserInput] = useState("");

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	return (
		<div className="Component">
			<h2>Make Flash Cards!</h2>
			<p>
				Paste the text you want questions and answers to be generated from. Ex.
				Apples are colored red.
			</p>
			<input
				onChange={handleChange}
				placeholder="Enter text here"
				value={userInput}
			/>
			<button onClick={chatgptrequest}>Generate Flash cards </button>
			<p>{jsonOutput}</p>
		</div>
	);
};

export default CreateCards;
