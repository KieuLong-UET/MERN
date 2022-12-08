const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    //   useCreateIndex: true
    })
    .then((data) => {
      console.log(`ket noi db voi server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;