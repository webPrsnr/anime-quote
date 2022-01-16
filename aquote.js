import { getAnimeQuote } from "./services/api.services.js";
import { consoleImage } from "./helpers/console-quote.js";

async function getRandomQuote() {
  const data = await getAnimeQuote();
  return data;
}

async function initCLI() {
  consoleImage(await getRandomQuote());
}

initCLI();
