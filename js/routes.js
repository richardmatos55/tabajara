angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.empresa', {
    url: '/empresa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/empresa.html',
        controller: 'empresaCtrl'
      }
    }
  })

  .state('produto', {
    url: '/produto',
    templateUrl: 'templates/produto.html',
    controller: 'produtoCtrl'
  })

  .state('contato', {
    url: '/contato',
    templateUrl: 'templates/contato.html',
    controller: 'contatoCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});