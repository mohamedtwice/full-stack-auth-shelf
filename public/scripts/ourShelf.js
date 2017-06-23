var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/partials/shelf.html',
    controller:'UserController as uc'
  }).when('/submit', {
    templateUrl: 'views/partials/submit.html',
  }); //end submit
}); //end config

myApp.controller('UserController', function (shelfService, addItemService){
  console.log('in user controller');

  var vm = this;
  vm.loggingIn= false;
  vm.registeredUser = false;
// if (vm.name == undefined){
//   vm.name = '';
// }



  vm.shelfObjects = [];

  vm.logIn = function(){
    console.log('in login');
    var userInfo = {
      username: vm.usernameInput,
      password: vm.passwordInput
    }; // end user info

    if(vm.usernameInput  == undefined || vm.passwordInput == undefined || vm.usernameInput  == '' || vm.passwordInput == '' ){
      alert('No username or password entered');
    } //end if
    else{
      shelfService.sendLogIn(userInfo).then(function() {
        vm.name = vm.usernameInput;
        console.log(vm.name, vm.usernameInput);
        vm.usernameInput = '';
        vm.passwordInput = '';
        console.log(vm.name, vm.usernameInput);
        // Allows for shelf form to show when logged in
        vm.hasName = shelfService.loggedIn;
        vm.registeredUser = shelfService.registeredUser;
        // Allows toggle to show user is logged in
        addItemService.nameIntake(vm.name);
      }); // end shelfService
    } //end else
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

  vm.addItem = function(){
    console.log('in add item', vm.usernameInput);

    var objectToSend = {
      name: addItemService.name,
      itemName: vm.itemName,
      description: vm.description,
      imgUrl: vm.imageUrl
    };

    addItemService.sendAddItem(objectToSend).then(function(){
      console.log('back in addItem from server');
    });
  }; //end addItem

}); // end controller













//spacer
