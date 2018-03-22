const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use( express.static('server/public') );
app.use( bodyParser.urlencoded({ extended: true }) );

// This line is super important!!! w/out body is empty with angular client!
app.use( bodyParser.json() ); 
// ----------------------------

// MONGODB CODE - START
// const mongoose = require('mongoose');
// const databaseName = 'mongo-todo'
// const databaseUrl = `mongodb://localhost:27017/${databaseName}`;

// mongoose.connect(databaseUrl);
// mongoose.connection.on('connected', () => {
//     console.log('Connected to mongodb!!');
// });
// mongoose.connection.on('error', (err) => {
//     console.log('Error connecting to mongodb', err);
// });
// MONGODB CODE - END

// Routers
const taskRouter = require('./routes/task.router');
app.use('/tasks', taskRouter);

// Start Server
const port = 5000;
app.listen(port, () => {
    console.log('Server is running on port', port);
});