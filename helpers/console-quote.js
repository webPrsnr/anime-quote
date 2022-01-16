import { prepareOutput, tab, splitQuote } from "./construct-quote.js";

export function consoleImage(response) {
  const { asciImage, average, mainString, secondString } = prepareOutput();
  const quoteArray = splitQuote(response);

  asciImage.forEach((el, index, array) => {
    if (index === average) {
      quoteArray.forEach((arrayEl, arrayInd, quoteArray) => {
        array[index + arrayInd] += tab.repeat(mainString);
        array[index + arrayInd] += arrayEl;
      });
    } else if (index === average + quoteArray.length) {
      array[index] += tab.repeat(secondString);
      array[index] += response.character;
    }
  });

  asciImage.forEach((el) => {
    console.log(el);
  });
}
