import { useState } from "react";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);


async function MakeRequest(prompt){
  if (!configuration.apiKey) {
    alert("OpenAI API key not configured, please follow instructions in README.md")
    return;
  }
  try {
    const completion = await openai.createCompletion({
      'model': "gpt-3.5-turbo",
      'messages': [
        {"role": "system", "content": "You are a helpful assistant that generates questions and answers from a text"},
        {"role": "user", "content": "create simple questions and answers separated by a new line using the text 'Apples are fruits that are red.' with at most 1 pairs of questions and answers"},
      ],
        'temperature': 0.6,
        
    });
    console.log("response:", completion.data.choices[0].text)
  
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      
      };
    }
  }
  // console.log(prompt)



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
    <div className = "Component">
      <h2>Make Flash Cards!</h2>
      <p>Paste the text you want questions and answers to be generated from. Ex. Apples are colored red.</p>
      prompt is {prompt}
      <input onChange = {change} placeholder="Enter text here"
      value = {prompt}/>
      <button onClick = {chatgptrequest}>Generate Flash cards </button>
    </div>
  )
}

export default CreateCards;
  