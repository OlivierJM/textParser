function parseText(text) {
  if (typeof text !== "string") throw new TypeError("Expected a string");
  
    let filterSpace = item => item.length > 1;
    let spacedWords = text
      .split(" ")
      .filter(filterSpace)
      .map(word => `${word} `);
  
    spacedWords.map((word, i) => {
      if (!word.indexOf("_")) {
        let newWord = `<span style="color: blue">${word.substring(1)}</span>`;
        spacedWords[i] = newWord;
      }
      if (!word.indexOf("*")) {
        let starredWord = (
          `<span style="color: red ">${word.substring(1)}</span>`
        );
        spacedWords[i] = starredWord;
      }
    });
    return spacedWords;
  }

  module.exports = parseText
  