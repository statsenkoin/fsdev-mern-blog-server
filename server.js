const express = require('express');
const cors = require('cors');
const logger = require('morgan');

require('dotenv').config();
const { logToFile, connectDataBase } = require('./config/server');

const { authRouter, postsRouter } = require('./routes');
const { handleRouteNotFound, handleError } = require('./middlewares');

const server = express();

// middlewares
server.use(cors());
server.use(express.json());
server.use(logger('dev'));
server.use(logger('combined', logToFile));

// routes
server.use('/api/users', authRouter);
server.use('/api/posts', postsRouter);

// handle errors
server.use(handleRouteNotFound);
server.use(handleError);

connectDataBase();

const { PORT } = process.env;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
