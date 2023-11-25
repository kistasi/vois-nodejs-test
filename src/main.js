const express = require('express');
const path = require('path');
const cors = require('cors');
const apiRouter = require('./routers/api');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
