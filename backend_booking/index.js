const express = require("express");
const cors = require("cors");
const { getClient } = require("./db");
const app = express();

const port = 4001;
app.use(cors({origin : "*"}));


const connectToDatabase = async () => {
    const client = await getClient;
    return client;
};

connectToDatabase().then((client) => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
})


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});