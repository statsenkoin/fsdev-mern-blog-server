const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(
  morgan('combined', {
    stream: fs.createWriteStream(path.join(process.cwd(), 'server.log'), {
      flags: 'a',
    }),
  })
);

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Test GET' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
