// const fs = require('fs');

// // Asynchronous file read
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });

// console.log('This message is printed first.');



// const fs = require('fs').promises;

// // Using Promises
// fs.readFile('example.txt', 'utf8')
//   .then((data) => {
//     console.log('File content:', data);
//   })
//   .catch((err) => {
//     console.error('Error reading file:', err);
//   });

// console.log('This message is printed first.');



// const fs = require('fs').promises;

// // Using async/await
// async function readFileAsync() {
//   try {
//     const data = await fs.readFile('example.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileAsync();

// console.log('This message is printed first.');


// const fs = require('fs').promises;

// // Using async/await
// async function readFileAsync() {
//   try {
//     const data = await fs.readFile('example.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileAsync();

// console.log('This message is printed first.');

const fs = require('fs').promises;

async function readFiles() {
  try {
    const [file1, file2] = await Promise.allSettled([
      fs.readFile('file2.txt', 'utf8'),
      fs.readFile('file1.txt', 'utf8'),
    ]);
    console.log('File 1 content:', file1);
    console.log('File 2 content:', file2);
  } catch (err) {
    console.error('Error reading files:', err);
  }
}
console.log('hhelllokmmgjhcg');


readFiles();


