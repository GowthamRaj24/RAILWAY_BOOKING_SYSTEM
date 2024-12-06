const getClient = require("../db");

const createTrain = async () =>{
    const client = getClient;
    const createTrainQuery = `CREATE TABLE trains(
        train_id SERIAL PRIMARY KEY,
        train_name VARCHAR(50) NOT NULL,
        source VARCHAR(50) NOT NULL,
        destination VARCHAR(50) NOT NULL,
        departure_time TIME NOT NULL,
        arrival_time TIME NOT NULL,
        fare INT NOT NULL
    )`;
    await client.query(createTrainQuery);
}

module.exports = createTrain;