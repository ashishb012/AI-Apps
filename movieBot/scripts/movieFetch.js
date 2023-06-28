import { OPENAI_API_KEY, ORGANIZATION_KEY } from "../../api_key";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: ORGANIZATION_KEY,
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const model = "text-davinci-003";

async function fetchPromptReply(prompt, max_tokens, temperature) {
  const response = await openai.createCompletion({
    model: model,
    prompt: prompt,
    max_tokens: max_tokens,
    temperature: temperature,
  });
  return response;
}

async function fetchImage(prompt, n, size, response_format) {
  const response = await openai.createImage({
    prompt: prompt,
    n: n,
    size: size,
    response_format: response_format,
  });
  return response;
}

export { fetchPromptReply, fetchImage };

// temperature range 0 - 1
// // 0 - deterministic output
// // 1 - introduces randomness into the output
