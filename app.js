const express = require("express");
const axios = require("axios");
const app = express();
const path = require('path');

const publicDirectorypath = path.join(__dirname, "/client");
app.use(express.static(publicDirectorypath));

app.get('/', (req,res)=>{
  res.render('index')
})

app.get('/data', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const firstTenValues = Object.values(data).slice(0, 10);
    res.status(200).send(firstTenValues);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
