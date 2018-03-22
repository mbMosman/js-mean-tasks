const express = require( 'express' );
const router = express.Router();

const taskList = [
  {name: 'Groceries', completed: false },
  {name: 'Laundry', completed: true }
];

router.get('/', (req, res) => {
  console.log('Getting tasks...');
  res.send(taskList);
});

router.post( '/', ( req, res ) => {
  const task = req.body.newTask;
  console.log('Adding a task', task)
  taskList.push(task);
  res.sendStatus(201);
});

module.exports = router;