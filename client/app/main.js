'use strict'

angular
  .module('mean101', ['ngRoute'])
  .config($routeProvider => 
    $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .when('/chat', {
      controller: 'ChatCtrl',
      templateUrl: 'partials/chat.html'
    }))
  .controller('MainCtrl', function($scope, $http){
    $http.get('/api/title')
    .then((data) => $scope.title = data.data.title)
  })
  .controller('ChatCtrl', function($scope, $http){
<<<<<<< HEAD
    $scope.sendMessage = () => {
      const msg = {
        author: $scope.author,
        content: $scope.content
      }
    

    $http
        .post('/api/messages', msg)
        .then(msg => $scope.messages.push(msg))
        .catch(console.error)
    }

=======
>>>>>>> d74fe5888e1ef428b9e02aeb03de5b3ec4c59994
    $http.get('/api/messages')
    .then(({data: {messages}}) => $scope.messages = messages)
  })