/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {};
  
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null; // If there's no next word, set it to null
  
      if (chains[word]) {
        chains[word].push(nextWord);
      } else {
        chains[word] = [nextWord];
      }
    }
  
    this.chains = chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let output = [];
    let word = this.words[Math.floor(Math.random() * this.words.length)];
  
    while (output.length < numWords && word !== null) {
      output.push(word);
      let nextWords = this.chains[word];
      word = nextWords[Math.floor(Math.random() * nextWords.length)];
    }
  
    return output.join(' ');
  }
}
