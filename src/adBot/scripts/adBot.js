import { adPrompt } from "./adPrompt.js";
import { fetchAdPromptReply } from "./adFetch.js";

document.getElementById("submit-btn").addEventListener("click", () => {
  const productName = document.getElementById("name").value;
  const productDesc = document.getElementById("desc").value;
  const productTarget = document.getElementById("target").value;
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("loading").style.display = "flex";
  document.getElementById("name").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("target").value = "";
  getCopySuggestion(productName, productDesc, productTarget);
});

async function getCopySuggestion(productName, productDesc, productTarget) {
  const prompt = adPrompt(productName, productDesc, productTarget);
  const response = await fetchAdPromptReply(prompt, 100, 0.5);
  document.getElementById("ad-content").innerText =
    response.data.choices[0].text.trim();
  document.getElementById("ad-input").style.display = "none";
  document.getElementById("ad-output").style.display = "block";
  console.log(response);
  document.getElementById("reset-btn").addEventListener("click", () => {
    document.getElementById("ad-input").style.display = "flex";
    document.getElementById("ad-output").style.display = "none";
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("loading").style.display = "none";
  });
}
