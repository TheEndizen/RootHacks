import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function MakeRequest(prompt){
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }
  try {
    const completion = await createCompletion({
      model: "gpt-3.5-turbo",
      prompt: "create simple questions and answers separated by a new line using the text 'Apples are fruits that are red.' with at most 1 pairs of questions and answers",
      temperature: 0.6,
      apiKey: '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'
    });
    console.log("response:", completion)
  
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
  // console.log(prompt)
}


function CreateCards() {
  const [prompt, setPrompt] = useState()
  const chatgptrequest = () => {
    // make chatgpt request
    MakeRequest(prompt)
  }
  const change = event => {
    // alert(event)
    setPrompt (event.target.value)
  }
  return (
    <div className = "CreateCards">
      <input onChange = {change} placeholder="Enter text here"
      value = {prompt}/>
      <button onClick = {chatgptrequest}>Generate Flash cards </button>
    </div>
  )
}

export default CreateCards;
  