angular.module('EappraiseApp')
    .controller('EmailController', EmailController);

//injecting http
EmailController.$inject = ['$http', '$filter'];
// main function
function EmailController($http, $filter) {
  var self = this;
  self.newEmail={};
  self.addEmail= addEmail;
  $filter('shortNumber');

  //post report method need to store _id from response
  function addEmail(){
   $http
     .post('http://localhost:3000/emails', self.email)
     .success(function(response){
   });
  }

}
