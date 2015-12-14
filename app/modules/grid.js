angular.module('grid', [
  'ui.grid', 'ui.grid.importer','ui.grid.exporter','ui.grid.resizeColumns',
  'ui.grid.edit', 'ui.grid.cellNav'])

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider // define los estados de mi aplicacion
      .state("home.grid", { // le asocio propiedades a cada state
          url: "/grid", // ruta
          templateUrl: "views/gridTemp.html", // template a usar
          controller: "gridCtrl", // controller a usar
      //  controllerAs : "grid"// alias para el controller, para utilizar el this
      })

    });


// http://ui-grid.info/docs/#/tutorial
