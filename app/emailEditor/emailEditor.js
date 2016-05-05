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
            controllerAs: 'ctrl',
            link: function (scope, el, attrs, ctrl) {
                scope.$watch('text', function (newText) {
                    ctrl.makeBlocks(newText);
                });
            }
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

        this.makeBlocks = makeBlocks;
        this.getMailsCount = function () {
          return $scope.mails.length;
        };
    }]);
