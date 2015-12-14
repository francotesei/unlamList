angular.module('grid')

.controller('gridCtrl',['$scope',function($scope){

    $scope.data = [];
    $scope.gridOptions = {

      enableGridMenu: true, // mueestra menu
      enableColumnResizing: true, // deja editar en largo de la row
      enableCellEditOnFocus : true,//deja editar las rows
      data: 'data',
      importerDataAddCallback: function ( grid, newObjects ) {
        $scope.data = $scope.data.concat( newObjects );
      }

   };






}]);// end Ctrl
