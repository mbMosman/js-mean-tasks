const mongoose = require('mongoose');

const databaseName = 'mongo-todo'
const databaseUrl = `mongodb://localhost:27017/${databaseName}`;

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb!!');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongodb', err);
});

module.exports = mongoose;
