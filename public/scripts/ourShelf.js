var myApp = angular.module('myApp', []);

myApp.controller('UserController', function (shelfService){
  console.log('in user controller');

  var vm = this;


  vm.logIn = function(){
    console.log('in login');
    var userInfo = {
      username: vm.usernameInput,
      password: vm.passwordInput
    }; // end user info

    shelfService.sendLogIn(userInfo).then(function() {
      vm.name = vm.usernameInput;
    vm.usernameInput = '';
    vm.passwordInput = '';
    // Allows for shelf form to show when logged in
    vm.hasName = shelfService.loggedIn;
        }); // end shelfService
  }; //end login

  vm.register =  function(){
    console.log('in regiter');
    var userInfo = {
      username: vm.usernameRegister,
      password: vm.passwordRegister
    }; // end user info

    shelfService.sendRegister(userInfo).then(function() {
          vm.usernameRegister = '';
          vm.passwordRegister = '';
    }); // end shelfService
  }; // end register

}); // end controller
