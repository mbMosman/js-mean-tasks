const express = require( 'express' );
const router = express.Router();

const Task = require('../modules/task');


router.get('/', (req, res) => {
  console.log('Getting tasks...');
  Task.find( {}, (error, taskList) => {
    if (error){
      console.log('error getting tasks:', error);
      response.sendStatus(500);
    } else {
      res.send(taskList);
    }
  });
});

router.post( '/', ( req, res ) => {
  const task = new Task(req.body.newTask);
  console.log('Adding a task', task);
  task.save( (error, result) => {
    if (error){
      console.log('error adding task:', error);
      res.sendStatus(500);
    } else {
      res.sendStatus(201); // Created
    }
  });
});

router.put('/complete/:id', (request, response) => {
  const id = request.params.id;
  Task.findByIdAndUpdate(
    {"_id": id} ,
    {$set: {completed: true} },
    (error, result) => {
      if (error){
        console.log('error task completion:', error);
        response.sendStatus(500);
      } else {
        response.sendStatus(204); // OK (no content)
      }
    }
  )
})

router.delete('/:id', (request, response) => {
  const id = request.params.id;
  Task.findByIdAndRemove(
    {"_id": id} ,
    (error, result) => {
      if (error){
        console.log('error task deletion:', error);
        response.sendStatus(500);
      } else {
        response.sendStatus(204); // OK (no content)
      }
    }
  )
})

module.exports = router;