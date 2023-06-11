const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

mongoose.set('strictQuery', true);

const { PORT, MONGO_DB_HOST } = process.env;

mongoose
  .connect(MONGO_DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database connection successful. Server started on port ${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(`Database connection failed -> ${err.message}`);
    process.exit(1);
  });
