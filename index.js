const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(req.body);
  res.json({
    name: 'Test response jenkins',
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server was started on port: ${PORT}`);
});
