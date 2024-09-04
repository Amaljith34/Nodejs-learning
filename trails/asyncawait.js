const fs = require('fs').promises

async function readFileAsync() {
  try {
    const data = await fs.readFile('./test.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  console.log('helo');
  
}

readFileAsync();
