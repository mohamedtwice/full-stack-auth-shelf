myApp.service('shelfService', function($http){
  console.log('in shelfService');

  var sv = this;

sv.sendLogIn = function(data){
  console.log('in sendlogin', data);
  return $http({
    method: 'POST',
    url: '/',
    data: data
  }).then(function(response) {
    console.log('back from register attempt:', response);
    if (response.data == 'hooray') {
      console.log('logged in');
      sv.loggedIn = true;
      sv.registeredUser = !sv.registeredUser;
      console.log('registeredUser in service', sv.registeredUser);
      return sv.registeredUser;
    } //end logged in
    else {
      sv.loggedIn = false;
      return sv.error;

    }
  }); // end http
};

sv.sendRegister = function(data){
  console.log('in sendRegister', data);
  return $http({
    method: 'POST',
    url: '/register',
    data: data
  }).then(function(response) {
    console.log('back from register attempt:', response);
  }); // end http
};

});
