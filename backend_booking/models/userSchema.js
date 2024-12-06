const getClient = require("../db");

const createUser = async () =>{
    const client = getClient;
    const createUserQuery = `CREATE TABLE users(
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        phone_number VARCHAR(50) NOT NULL
    )`;
    await client.query(createUserQuery);
}

module.exports = createUser;