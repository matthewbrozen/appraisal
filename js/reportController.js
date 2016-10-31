angular.module('EappraiseApp')
    .controller('ReportController', ReportController);

//injecting http
ReportController.$inject = ['$http'];
// main function
function ReportController($http) {
  var self = this;
  self.all = {};
  self.data=[];
  self.newReport={};
  self.addReport= addReport;

//get all method needs to be turned into get last post or current user or session post
function getReport(){
 $http
   .get('https://frozen-gorge-77961.herokuapp.com/reports/')
   .then(function(response){
     self.all = response.data.allReports;
    //  console.log(self.all);
 });
}

//calling the method at runtime to have data
getReport();

//post report method need to store _id from response
function addReport(){
 $http
   .post('https://frozen-gorge-77961.herokuapp.com/reports', self.newReport)
   .success(function(response){
    //  console.log(self.all[self.all.length-1]);
 });
}


//patch to report but _id is undefined, need to track it from post
function updateReport(){
  getReport();
 $http
   .patch('https://frozen-gorge-77961.herokuapp.com/reports/')
   .then(function(response){
 });
}

}
