import { image } from "./ascii-image.js";
export const tab = ` `;

function calculateTabulation(asciiImage, averageMain) {
  let longest = asciiImage.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  const tabulation = {};
  if (asciiImage[averageMain].length >= longest.length) {
    tabulation.mainString = 4;
    tabulation.secondString = 16;
  } else {
    tabulation.mainString = 8;
    tabulation.secondString = 25;
  }
  return tabulation;
}

export function prepareOutput() {
  const asciImage = image.split("\n");
  const average = Math.round(asciImage.length / 2);
  const { mainString, secondString } = calculateTabulation(asciImage, average);
  return { asciImage, average, mainString, secondString };
}

export function splitQuote(data) {
  const quoteLength = data.quote;
  const average = Math.round(image.split("\n").length / 2);
  const mocha = calculateTabulation(image.split("\n"), average);
  const rowLength = image.split("\n")[average] + tab.repeat(mocha.mainString);
  const remain = process.stdout.columns - rowLength.length;
  const quoteArray = wordWrapToStringList(quoteLength, remain);
  return quoteArray;
}

function wordWrapToStringList(text, maxLength) {
  let result = [],
    line = [];
  let length = 0;
  text.split(" ").forEach(function (word) {
    if (length + word.length >= maxLength) {
      result.push(line.join(" "));
      line = [];
      length = 0;
    }
    length += word.length + 1;
    line.push(word);
  });
  if (line.length > 0) {
    result.push(line.join(" "));
  }
  return result;
}
