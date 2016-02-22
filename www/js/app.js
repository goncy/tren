// Ionic ConsulTren App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ConsulTren' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ConsulTren', ['ionic'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.icon('ion-chevron-left');
  $ionicConfigProvider.backButton.text('');

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.facts3', {
      url: "/facts3",
      views: {
        'home-tab': {
          templateUrl: "templates/facts3.html"
        }
      }
    })
    .state('tabs.facts4', {
      url: "/facts4",
      views: {
        'home-tab': {
          templateUrl: "templates/facts4.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html",
          controller: "FavoritosTabCtrl"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


  $urlRouterProvider.otherwise("/tab/home");

})

.controller('FavoritosTabCtrl', function ($scope) {
  $scope.ramales = ['Mitre', 'San Martin', 'Urquiza', 'Roca'];

  $scope.behaviours = {
    showDelete: false
  };

  $scope.deleteFavorite = function(item) {
    $scope.ramales.splice($scope.ramales.indexOf(item), 1);
  };
});
