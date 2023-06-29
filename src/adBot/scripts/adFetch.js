import { OPENAI_API_KEY, ORGANIZATION_KEY } from "../../../api_key";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: ORGANIZATION_KEY,
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const model = "text-davinci-003";

async function fetchAdPromptReply(prompt, max_tokens, temperature) {
  const response = await openai.createCompletion({
    model: model,
    prompt: prompt,
    max_tokens: max_tokens,
    temperature: temperature,
  });
  return response;
}

export { fetchAdPromptReply };
