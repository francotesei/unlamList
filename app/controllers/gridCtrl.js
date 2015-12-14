angular.module('grid')

.controller('gridCtrl',['$scope',function($scope){
    that = this;
    this.data = [];
    this.gridOptions = {};

    this.gridOptions.enableGridMenu = true;
    this.gridOptions.enablePaginationControls = false;
    this.gridOptions.importerDataAddCallback = function ( grid, newObjects ) {
                                                that.data = that.data.concat( newObjects );
                                                that.afterImport(that.data);
                                              };

    this.afterImport = function(data){
      this.gridOptions.data = data;

    //  this.gridOptions.columnDefs[0].enableCellEditOnFocus = true;
    }





    /*
    $scope.gridOptions = {

      enableGridMenu: true, // mueestra menu
      enableColumnResizing: true, // deja editar en largo de la row
      enableCellEditOnFocus : true,//deja editar las rows
      data: 'data',
      importerDataAddCallback: function ( grid, newObjects ) {
        $scope.data = $scope.data.concat( newObjects );
      }

   };
*/





}]);// end Ctrl
