// import { Pipe } from '@angular/core';
// console.log(Pipe);
angular
  .module('appModule')
  .component('searchFilter', {
    templateUrl: 'components/search-filter/search-filter.html',
    controller: SearchFilterComponent,
    controllerAs: 'SearchFilterComponentVm',
  });
function SearchFilterComponent($scope, $location) {
  let edata = '';
  $scope.emitToParent = function (data) {
    edata = data;
    $location.search('filter=', data);
    $scope.$emit('changeVar', edata);
  };
  $scope.restAll = function () {
    edata = '';
    $location.url('/');
    $scope.$emit('changeVar', edata);
  };
}
