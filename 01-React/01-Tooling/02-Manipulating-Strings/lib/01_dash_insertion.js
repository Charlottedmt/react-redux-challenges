const isConsonant = (letter) => {
  return !letter.match(/[aeiouy\s]/i);
};

const insertDash = (word) => {
  // TODO: implement the method and return word with dashes
  if (!word || word.length === 0) {
    return "";
  }
  const wordArray = word.split("");
  const dashWord = wordArray.map((letter, i, letters) => {
    if (i > 0 && isConsonant(letters[i - 1]) && isConsonant(letter)) {
      return `-${letter}`;
    }
    return letter;
  });
  return dashWord.join("");
};

module.exports = insertDash;

