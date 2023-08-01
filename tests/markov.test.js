const MarkovMachine = require('../markov');

  test('test makeChains', () => {
    let mm = new MarkovMachine("the cat in the hat");
    expect(mm.chains).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]});
  });
  
  test('test makeText', () => {
    let mm = new MarkovMachine("the cat in the hat");
    let text = mm.makeText(5);
    let words = text.split(' ');
  
    expect(words.length).toBeLessThanOrEqual(5);
  
    for (let i = 0; i < words.length - 1; i++) {
      let word = words[i];
      let nextWord = words[i + 1];
      let possibleNextWords = mm.chains[word];
  
      // Check that nextWord is a possible 'next word' for the current word
      expect(possibleNextWords).toContain(nextWord);
    }
  });
  
  
  
  
  
  
  