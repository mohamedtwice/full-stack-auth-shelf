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

    shelfService.sendLogIn(userInfo);
    vm.usernameInput = '';
    vm.passwordInput = '';
  };//end login

  vm.register =  function(){
    console.log('in regiter');
    var userInfo = {
      username: vm.usernameRegister,
      password: vm.passwordRegister
    };

    shelfService.sendRegister(userInfo);
    vm.usernameRegister = '';
    vm.passwordRegister = '';
  };

});
