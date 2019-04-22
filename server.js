const express = require('express');
const path = require('path');
require('dotenv').config()

const port = process.env.SERVER_PORT

const app = express();

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, () => console.log(`Serving on port ${port}`))


