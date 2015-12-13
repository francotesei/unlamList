
angular.module('app',[
  'ui.router',
  'ngResource'
])

.controller('mainCtrl',function($state){

})

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider // define los estados de mi aplicacion
      .state("home", { // le asocio propiedades a cada state
          url: "/home", // ruta
          templateUrl: "views/homeTemp.html", // template a usar
          controller: "homeCtrl", // controller a usar
          controllerAs : "home"// alias para el controller, para utilizar el this
      });
      $urlRouterProvider.otherwise("/home");
    });
