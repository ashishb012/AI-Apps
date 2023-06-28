import { adPrompt } from "./adPrompt.js";
import { fetchAdPromptReply } from "./adFetch.js";

import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY, ORGANIZATION_KEY } from "../../api_key";
const configuration = new Configuration({
  organization: ORGANIZATION_KEY,
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

document.getElementById("submit-btn").addEventListener("click", () => {
  const productName = document.getElementById("name").value;
  const productDesc = document.getElementById("desc").value;
  const productTarget = document.getElementById("target").value;
  getCopySuggestion(productName, productDesc, productTarget);
});

async function getCopySuggestion(productName, productDesc, productTarget) {
  const prompt = adPrompt(productName, productDesc, productTarget);
  const response = await fetchAdPromptReply(prompt, 100, 0.5);
  document
    .getElementById("ad-output")
    .insertAdjacentText("beforeend", response.data.choices[0].text);
  document.getElementById("ad-input").style.display = "none";
  document.getElementById("ad-output").style.display = "block";
  console.log(response);
}
