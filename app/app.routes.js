angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: false,
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/not-found');
    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state('team-performance', {
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state('not-found', {
        url: '/not-found',
        template: '<v-not-found-page></v-not-found-page>',
      });
  });
