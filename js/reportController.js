angular.module('EappraiseApp')
    .controller('ReportController', ReportController);

//injecting http
ReportController.$inject = ['$http', '$filter'];
// main function
function ReportController($http, $filter) {
  var self = this;
  self.newReport={};
  self.addReport= addReport;
  self.currentDate = new Date();
  $filter('shortNumber');

  //post report method need to store _id from response
  function addReport(){
   $http
     .post('https://frozen-gorge-77961.herokuapp.com/reports', self.newReport)
     .success(function(response){
   });
  }

}

