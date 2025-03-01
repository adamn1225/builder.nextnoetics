// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/fetch-url', async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Failed to fetch the URL');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});