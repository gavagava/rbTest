'use strict';

angular.module('myApp', ['rbTest.mailbox'])
    .controller('MyAppBaseCtrl', ['$scope', function ($scope) {

        function getRandomEmail (nameLength, domainLength, zone) {
            var zones = ['com', 'org', 'ru'],
                startCh = 'qwertyuiopasdfghjklzxcvbnm',
                randomName = (+new Date() * Math.random()).toString(36).substring(0, (nameLength || 5) - 1),
                randomDomain = (+new Date() * Math.random()).toString(36).substring(0, (domainLength || 5) - 1);

            randomName = startCh.charAt(Math.floor(Math.random() * startCh.length)) + randomName;
            randomDomain = startCh.charAt(Math.floor(Math.random() * startCh.length)) + randomDomain;

            return randomName + '@' + randomDomain + '.' + (zone || zones[Math.floor(Math.random() * zones.length)]);
        }

      $scope.addEmails = function () {
        var ctrl = angular.element(document.querySelector('#ee1')).controller('emailEditor');
        ctrl.makeBlocks(getRandomEmail());
      };

      $scope.getEmailsCount = function () {
        var ctrl = angular.element(document.querySelector('#ee1')).controller('emailEditor');
        alert(ctrl.getMailsCount());
      };
    }]);
