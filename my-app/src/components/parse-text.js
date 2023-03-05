// Parse text from ChatGPT AI
// Assumptions: string will be in the following format:

/* Example format
Q: What are apples?
A: Apples are fruits.
*/

// Input: string
// Adds question and answer to data base

function parseText(output) {
    // Question substring
    delim = "?\n"; // Gets index of first character in delim
    delimLength = delim.length;
    output.find(delim);

    question = output.substring(0, delim) // Everything before the deliminator
    answer = output.substring(delim + delimLength -1) // Everything after the deliminator

    return question, answer
    // Put the return strings into the database
}