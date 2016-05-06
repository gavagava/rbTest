/**
 * Created by lebedevm on 05.05.2016.
 */

angular.module('rbTest.mailbox', [])
    .directive('emailEditor', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'emailEditor/emailEditor.html',
            controller: 'MailboxCtrl',
            controllerAs: 'ctrl'
        }
    })
    .controller('MailboxCtrl', ['$scope', function ($scope) {
        function makeBlocks (text) {
            if (text) {
                text = text.toString().replace(/,$/, '');
                var newMails = text.split(',');
                newMails.forEach(function (mail) {
                   if ($scope.mails.indexOf(mail) === -1)
                       $scope.mails.push(mail);
                });
            }
        }

        function processInput () {
            makeBlocks($scope.userInput);
            $scope.userInput = '';
        }

        $scope.mails = [];
        $scope.userInput = '';

        $scope.onUserInputChange = function () {
            if ($scope.userInput.indexOf(',') !== -1)
                processInput();
        };

        $scope.onUserInputBlur = processInput;

        $scope.removeMail = function (index) {
          $scope.mails.splice(index, 1);
        };

        $scope.isEmail = function (value) {
            return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(value);
        };

        this.makeBlocks = makeBlocks;
        this.getMailsCount = function () {
          return $scope.mails.length;
        };
    }]);
