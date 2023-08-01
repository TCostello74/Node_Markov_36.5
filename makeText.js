/** Command-line tool to generate Markov text. */
const fs = require('fs');
const axios = require('axios');
const MarkovMachine = require('./markov');

async function generateText(inputType, source) {
  let text;

  if (inputType === "file") {
    try {
      text = fs.readFileSync(source, 'utf8');
    } catch (err) {
      console.error(`Error reading file: ${source}`);
      process.exit(1);
    }
  } else if (inputType === "url") {
    try {
      let resp = await axios.get(source);
      text = resp.data;
    } catch (err) {
      console.error(`Error fetching URL: ${source}`);
      process.exit(1);
    }
  } else {
    console.error(`Invalid input type: ${inputType}`);
    process.exit(1);
  }

  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

let inputType = process.argv[2];
let source = process.argv[3];

generateText(inputType, source);


