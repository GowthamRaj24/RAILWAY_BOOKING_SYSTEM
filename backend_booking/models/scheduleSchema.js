const e = require("express");
const getClient = require("../db");

const createSchedule = async () =>{
    const client = getClient;
    const createScheduleQuery = `CREATE TABLE schedules(
        schedule_id SERIAL PRIMARY KEY,
        train_id INT REFERENCES trains(train_id),
        station_id INT REFERENCES stations(station_id),
        arrival_time TIME NOT NULL,
        departure_time TIME NOT NULL
    )`;
    await client.query(createScheduleQuery);
}

exports.createSchedule = createSchedule;