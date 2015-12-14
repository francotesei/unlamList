angular.module('app')

.controller('homeCtrl',['$state',function($state){

this.goto = function(ste){
   $state.go(ste,{ reload:true });
};

}]);
