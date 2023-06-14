require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');

//const { routes } = require('./api/routes');

app.use(cors());

// Read the contents of the "api" folder
const apiPath = path.join(__dirname, 'mocks');
const apiFolders = fs.readdirSync(apiPath);

// Dynamically create routes for each folder
apiFolders.forEach(folder => {
  const route = folder.toLowerCase();
  const jsonPath = path.join(apiPath, folder, 'index.json');

  app.get(`/mocks/${route}`, (req, res) => {
    try {
      const jsonData = require(jsonPath);
      res.json(jsonData);
    } catch (error) {
      res.status(500).json({ error: { message: 'Unable to parse the response [200]' } });
    }
  });
});

// Read the contents of the "api/pages" directory
// const pagePath = path.join(__dirname, 'api/pages');
// const pageFolders = fs.readdirSync(pagePath);

// // Dynamically create routes for each page folder
// pageFolders.forEach(folder => {
//   const route = folder.toLowerCase();
//   const jsonPath = path.join(pagePath, folder, 'index.json');

//   app.get(`/api/pages/${route}`, (req, res) => {
//     try {
//       const jsonData = require(jsonPath);
//       res.json(jsonData);
//     } catch (error) {
//       res.status(500).json({ error: { message: 'Unable to parse the response [200]' } });
//     }
//   });
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

console.log(`/////////////////////////////////////////////////`);
console.log(`Server Directory`);
// console.log({pageFolders: pageFolders, apiFolders : apiFolders});
console.log(`/////////////////////////////////////////////////`);