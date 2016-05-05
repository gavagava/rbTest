/**
 * Created by lebedevm on 05.05.2016.
 */

angular.module('rbTest.mailbox', [])
    .directive('emailEditor', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'emailEditor.html',
            controller: 'MailboxCtrl'
        }
    })
    .controller('MailboxCtlr', function () {});
