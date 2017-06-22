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
    } //end logged in
    else {
      sv.loggedIn = false;
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
