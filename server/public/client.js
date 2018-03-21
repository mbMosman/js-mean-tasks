const app = angular.module('ToDoApp', []);

app.controller('ToDoController', ['$http', function($http) {
  var self = this;
  self.display = { 
    tasks: [],
    newTask: { name: '' },
  };

  getAllTasks = function() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then( (response) => {
      self.display.tasks = response.data;
    }).catch( (error) => {
      console.log('Error getting tasks');
    })
  }


  getAllTasks();

}]);