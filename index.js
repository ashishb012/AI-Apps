import api_key from "./api_key";
const setupTextarea = document.getElementById("setup-textarea");
const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
  }
});

const api = api_key;
const url = "https://api.openai.com/v1/completions";
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${api}`,
  },
  body: JSON.stringify({
    model: "text-davinci-003",
    prompt: "",
  }),
})
  .then((response) => response.json())
  .then((data) => (movieBossText.innerText = data.choices[0].text));
