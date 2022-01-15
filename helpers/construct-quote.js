import { image } from "./ascii-image.js";
const tab = `\t`;

function calculateTabulation(asciiImage, averageMain) {
  let longest = asciiImage.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  const tabulation = {};
  if (asciiImage[averageMain].length >= longest.length) {
    tabulation.mainString = 1;
    tabulation.secondString = 3;
  } else {
    tabulation.mainString = 2;
    tabulation.secondString = 3;
  }
  return tabulation;
}

function prepareOutput() {
  const asciImage = image.split("\n");
  const average = Math.round(asciImage.length / 2);
  const { mainString, secondString } = calculateTabulation(asciImage, average);
  return { asciImage, average, mainString, secondString };
}

function consoleImage() {
  const { asciImage, average, mainString, secondString } = prepareOutput();
  asciImage.forEach((el, index) => {
    if (index === average) {
      el += tab.repeat(mainString);
      el += "Some amazing quote saying something special";
    } else if (index === average + 2) {
      el += tab.repeat(secondString);
      el += "Nice to meet you";
    }
    console.log(el);
  });
}

consoleImage();
