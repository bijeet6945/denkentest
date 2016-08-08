routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      template: require('./dashboard/dashboard.html'),
      controller: 'DashboardController',
      controllerAs: 'vm'
    })

    .state('pricing', {
      url: '/pricing',
      template: require('./pricing/pricing.html'),
      controller: 'PricingController',
      controllerAs: 'vm'
    })

    .state('products', {
      url: '/products',
      template: require('./product/product.html'),
      controller: 'ProductController',
      controllerAs: 'vm'
    })

    .state('discounts', {
      url: '/discounts',
      template: require('./discounts/discounts.html'),
      controller: 'DiscountsController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/dashboard');
}
