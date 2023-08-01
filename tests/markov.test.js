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
    // Additional tests as necessary...
  });
  