const app = require("./app");

const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

//Handling uncaught exception
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log(`Tat server vi ly do bat ngo Uncaught exception`);

    process.exit(1);
})



//Config
dotenv.config({path:"BE/config/config.env"})

//ConnectinDB
connectDatabase();

// console.log(yout);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server dang chay tai http://localhost:${process.env.PORT}`);
})

//Unhandled promise rejection

process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log(`Tat server vi ly do bat ngo Unhandle promise rejection`);

    server.close(() => {
        process.exit(1);
    });
})