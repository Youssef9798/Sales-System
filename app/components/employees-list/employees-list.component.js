angular.module('appModule').component('employeesList', {
  templateUrl: 'components/employees-list/employees-list.html',
  controller: EmployeesListComponent,
  controllerAs: 'EmployeesListComponentVm',
  bindings: {
    employeesList: '<',
    searchVal: '<',
  },
});

angular.module('appModule').filter('highlight', function ($sce) {
  return function (text, phrase) {
    // console.log(text, phrase);
    if (phrase) {
      text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="highlighted">$1</span>');
    }
    return $sce.trustAsHtml(text);
  };
});

function EmployeesListComponent() {
}
