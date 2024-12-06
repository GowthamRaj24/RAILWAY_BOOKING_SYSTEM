const getClient = require("../db");

const createStation = async () =>{
    const client = getClient;
    const createStationQuery = `CREATE TABLE stations(
        station_id SERIAL PRIMARY KEY,
        station_name VARCHAR(50) NOT NULL,
        location VARCHAR(50) NOT NULL
    )`;
    await client.query(createStationQuery);
}

module.exports = createStation;
