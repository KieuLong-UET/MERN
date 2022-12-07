const app = require("./app");

const dotenv = require("dotenv")
const connectDatabase = require("./config/database")


//Config
dotenv.config({path:"BE/config/config.env"})

//ConnectinDB
connectDatabase();


app.listen(process.env.PORT, () => {
    console.log(`Server dang chay tai http://localhost:${process.env.PORT}`);
})