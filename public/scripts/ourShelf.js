var myApp = angular.module('myApp', []);

myApp.controller('UserController', function (shelfService){
  console.log('in user controller');

  var vm = this;
  vm.loggingIn= true;
  vm.registeredUser = false;

  vm.logIn = function(){
    console.log('in login');
    var userInfo = {
      username: vm.usernameInput,
      password: vm.passwordInput
    }; // end user info

    if(vm.usernameInput == '' || vm.passwordInput ==''){
      alert('No username entered');
    }
    else{
      shelfService.sendLogIn(userInfo).then(function() {
        vm.name = vm.usernameInput;
        vm.usernameInput = '';
        vm.passwordInput = '';
      // Allows for shelf form to show when logged in
        vm.hasName = shelfService.loggedIn;
        vm.registeredUser = shelfService.registeredUser;
        // Allows toggle to show user is logged in
  }); // end shelfService
  }
  }; //end login

  //logout
  vm.logOut= function(){
    console.log('logging out:', vm.name);
    vm.registeredUser=!vm.registeredUser;
vm.username= '';
  };
  //end logout

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

// start toggleLogin
vm.toggleLogin=function(){
  vm.loggingIn=!vm.loggingIn;
};

}); // end controller
