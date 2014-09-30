var phoneApp = angular.module('phoneApp', []);

phoneApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {
    	'name': 'Nexus S',
     	'snippet': 'Fast just got faster with Nexus S.',
     	'showMe': true;
    },
    {
    	'name': 'Motorola XOOM™ with Wi-Fi',
     	'snippet': 'The Next, Next Generation tablet.'
     	'showMe': true;
    },
    {
    	'name': 'MOTOROLA XOOM™',
     	'snippet': 'The Next, Next Generation tablet.'
     	'showMe': true;
     }
  ];
  
 
}
);