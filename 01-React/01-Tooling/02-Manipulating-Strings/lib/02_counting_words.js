const occurrences = (text, word) => {
  const textSplit = text.split(" ");
  let num = 0;
  textSplit.forEach((textWord) => {
    if (textWord.toLowerCase() === word.toLowerCase()) {
      num += 1;
    }
  });
  return num;
};

module.exports = occurrences;
