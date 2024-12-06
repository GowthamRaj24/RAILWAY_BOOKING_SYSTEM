const { getClient } = require('../db');

const userTrainSchema = async () => {
    const client = getClient;
    const createUserTrainQuery = `CREATE TABLE user_train(
        user_train_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        train_id INT NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(user_id),
        FOREIGN KEY(train_id) REFERENCES trains(train_id)
    )`;
    await client.query(createUserTrainQuery);
}

exports.userTrainSchema = userTrainSchema;