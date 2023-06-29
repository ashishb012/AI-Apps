import {
  botReplyPrompt,
  titlePrompt,
  synopsisPrompt,
  imagePrompt,
  imageUrlPrompt,
} from "./moviePrompts.js";
import { fetchPromptReply, fetchImage } from "./movieFetch.js";

const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

document.getElementById("send-btn").addEventListener("click", () => {
  const setupTextarea = document.getElementById("setup-textarea");
  if (setupTextarea.value) {
    const userInput = setupTextarea.value;
    setupInputContainer.style.display = "none";
    document.getElementById("loading").style.display = "flex";
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
    botReply(userInput);
    movieSynopsis(userInput);
    setupTextarea.value = "";
  }
});

async function botReply(userPrompt) {
  const prompt = botReplyPrompt(userPrompt);
  const response = await fetchPromptReply(prompt, 50, 0.5);
  movieBossText.innerText = response.data.choices[0].text.trim();
  console.log(response);
}

async function movieSynopsis(userPrompt) {
  const prompt = synopsisPrompt(userPrompt);
  const response = await fetchPromptReply(prompt, 200, 0.5);
  const synopsis = response.data.choices[0].text.trim();
  document.getElementById("output-text").innerText = synopsis;
  console.log(response);
  movieTitle(synopsis);
}

async function movieTitle(synopsis) {
  const prompt = titlePrompt(synopsis);
  const response = await fetchPromptReply(prompt, 15, 0.5);
  console.log(response);
  const title = response.data.choices[0].text.trim();
  document.getElementById("output-title").innerText = title;
  movieImagePrompt(title, synopsis);
}

async function movieImagePrompt(title, synopsis) {
  const prompt = imagePrompt(title, synopsis);
  const response = await fetchPromptReply(prompt, 50, 0.8);
  console.log(response);
  movieImageUrl(response.data.choices[0].text.trim());
}

async function movieImageUrl(imgPrompt) {
  const prompt = imageUrlPrompt(imgPrompt);
  const response = await fetchImage(prompt, 1, "512x512", "url");
  console.log(response);
  document.getElementById(
    "output-img-container"
  ).innerHTML = `<img src="${response.data.data[0].url}">`;
  setupInputContainer.style.display = "none";
  document.getElementById("loading").style.display = "none";
  document.getElementById("view-pitch-btn").style.display = "block";
  document.getElementById("view-pitch-btn").addEventListener("click", () => {
    document.getElementById("view-pitch-btn").style.display = "none";
    document.getElementById("setup-container").style.display = "none";
    document.getElementById("output-container").style.display = "flex";
  });
  document.getElementById("reset-btn").addEventListener("click", () => {
    document.getElementById("output-container").style.display = "none";
    document.getElementById("setup-container").style.display = "block";
    setupInputContainer.style.display = "flex";
  });
}
