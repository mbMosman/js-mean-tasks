const app = angular.module('ToDoApp', []);

app.controller('ToDoController', ['$http', function($http) {
  var self = this;
  self.display = { 
    tasks: [],
  }
  self.newTask = { name: '', completed: false };

  self.getAllTasks = function() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then( (response) => {
      self.display.tasks = response.data;
    }).catch( (error) => {
      console.log('Error getting tasks');
    })
  }

  self.addTask = function() {
    console.log('About to add a task...');
    console.log('Task', self.newTask);
    $http({
      method: 'POST',
      url: '/tasks',
      data: { newTask: self.newTask }
    }).then( (response) => {
      self.getAllTasks();
      self.newTask.name = '';
    }).catch( (error) => {
      console.log('Error adding tasks');
    })
  }

  self.getAllTasks();

}]);