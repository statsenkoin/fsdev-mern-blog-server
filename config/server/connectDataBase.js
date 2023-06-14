const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDataBase = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_DB_HOST);
    console.log(
      `Database is connected. Name: ${db.connection.name}. Port: ${db.connection.port}. Host: ${db.connection.host}`
    );
  } catch (error) {
    console.log(`Database connection failed -> ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDataBase;
