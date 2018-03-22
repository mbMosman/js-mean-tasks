const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use( express.static('server/public') );
app.use( bodyParser.urlencoded({ extended: true }) );

// This line is super important!!! w/out body is empty with angular client!
app.use( bodyParser.json() ); 

// Routers
const taskRouter = require('./routes/task.router');
app.use('/tasks', taskRouter);

// Start Server
const port = 5000;
app.listen(port, () => {
    console.log('Server is running on port', port);
});