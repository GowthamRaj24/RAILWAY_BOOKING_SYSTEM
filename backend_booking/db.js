const { Client } = require('pg');
const { SQL_USERNAME, SQL_HOST_NAME, SQL_PASSWORD } = require("./private");


const URL = `postgresql://${SQL_USERNAME}:${SQL_PASSWORD}@${SQL_HOST_NAME}:5432/Railway_Booking_System`;
const getClient = async () => {
    const client = new client(URL);
    return client;
}


module.exports = getClient;