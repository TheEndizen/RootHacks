import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let jsonOutput;

const onSubmitForm = async (e) => {
	e.preventDefault(); // prevent from refreshing
	try {
		const body = { jsonOutput };
		await fetch("http://localhost:8080", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});
		window.location = "/ChatGPT";
	} catch (error) {
		console.error(error.message);
	}
};

const CreateCards = () => {
	const chatgptrequest = async (e) => {
		e.preventDefault(); // prevent from refreshing
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
