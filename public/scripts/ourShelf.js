var myApp = angular.module('myApp', []);

myApp.controller('UserController', function (shelfService){
  console.log('in user controller');

  var vm = this;

  vm.logIn = function(){
    console.log('in login');
    var userInfo = {
      username: vm.usernameInput,
      password: vm.passwordInput
    };

    console.log(userInfo);

  };//end login

});
