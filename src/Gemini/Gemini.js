let apiKey = "AIzaSyC9JHa1KB_tQYIwFXIWf2J_tXqGyaUhK-Q"
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"


const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};




async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const promptString = String(prompt);
    console.log(String(promptString) , "yae prompt chala gaya");
    const result = await chatSession.sendMessage(promptString);
    console.log(result.response.text());
    return result.response.text();
}


export default run;