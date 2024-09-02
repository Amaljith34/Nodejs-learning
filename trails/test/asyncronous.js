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



// const fs = require('fs').promises;

// async function readFiles() {
//   try {
//     const [file1, file2] = await Promise.allSettled([
//       fs.readFile('file2.txt', 'utf8'),
//       fs.readFile('file1.txt', 'utf8'),
//     ]);
//     console.log('File 1 content:', file1);
//     console.log('File 2 content:', file2);
//   } catch (err) {
//     console.error('Error reading files:', err);
//   }
// }
// console.log('hhelllokmmgjhcg');


// readFiles();



// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://127.0.0.1:3000/');
// });

const dotenv=require('dotenv')

const express = require('express');
const app = express();
dotenv.config()

// Access environment variables
const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log(DB_USER);
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


