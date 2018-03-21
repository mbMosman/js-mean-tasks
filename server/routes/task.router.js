const router = require('express').Router();

const taskList = [
  {name: 'Groceries'},
  {name: 'Laundry'}
];

router.get('/', (req, res) => {
  console.log('Getting tasks...');
  res.send(taskList);
});


module.exports = router;