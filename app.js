const express = require("express");
const axios = require("axios");
const app = express();
const path = require('path');

const publicDirectorypath = path.join(__dirname, "/client");
app.use(express.static(publicDirectorypath));

app.get('/', (request,response)=>{
  response.render('index')
})

app.get('/data', async (reqest, response) => {
  try {
    const { data } = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const firstTenValues = Object.values(data).slice(0, 10);
    response.status(200).send(firstTenValues);
  } catch (err) {
    response.status(500).send(err);
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
