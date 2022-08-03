angular.module('appModule').controller('homeController', homePageController);

function homePageController(Employees, $scope) {
  const homePageVm = this;
  $scope.parentVar = '';
  $scope.$on('changeVar', function (e, nv) {
    $scope.parentVar = nv;
    homePageVm.parentVar = $scope.parentVar;
  });

  homePageVm.employees = [];
  homePageVm.currentPage = '';
  homePageVm.totalPages = '';
  homePageVm.loading = false;
  activate();
  function activate() {
    Employees.getEmployees().then(({ data }) => {
      homePageVm.currentPage = data.current_page;
      homePageVm.totalPages = data.pages;
      homePageVm.employees = homePageVm.employees.concat(data.employees);
    });
  }
  $scope.loadMore = function () {
    if (homePageVm.currentPage <= homePageVm.totalPages) {
      homePageVm.loading = true;
      homePageVm.currentPage += 1;
      Employees.loadMoreEmployees(homePageVm.currentPage).then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        if ((homePageVm.currentPage === homePageVm.totalPages)) {
          homePageVm.loading = true;
        }
        homePageVm.loading = false;
      });
    } else {
      homePageVm.loading = true;
    }
  };
}
// .filter('highlight', function ($sce) {
//   return function (text, phrase) {
//     if (phrase) {
//       text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '$1');
//     }
//     return $sce.trustAsHtml(text);
//   };
// });
