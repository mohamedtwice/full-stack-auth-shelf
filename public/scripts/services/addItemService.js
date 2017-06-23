myApp.service('addItemService', function($http){
  console.log('in addItemService');
  var sv = this;
  sv.name = '';

sv.sendAddItem = function(data){
  console.log('in sendAddItem', data);

  return $http({
    method: 'POST',
    url:'/shelf',
    data: data
  }).then(function(response){
    console.log('back from add item post', response);
  });//end then function

};//end sendAddItem

sv.nameIntake = function (data){
  sv.name = data;
  console.log('in nameintake', sv.name);
};

}); //end addItemService
