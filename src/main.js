const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const apiRouter = require('./routers/api');

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;
