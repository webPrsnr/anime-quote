import axios from "axios";

const URL = "https://animechan.vercel.app/api/random";

export async function getAnimeQuote() {
  try {
    const quote = await axios.get(URL);
    return quote.data;
  } catch (error) {
    console.log(error);
  }
}
