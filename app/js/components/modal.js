﻿(function () {
    'use strict';

    angular.module('notes').component('modal', {
        templateUrl: 'templates/modal.html',
        bindings: {
            modalTitle: '@?',
            modalId: '@',
            modalType: '@?',
            onConfirm: '&'
        },
        transclude: true,
        controllerAs: 'modal',
        controller: ['$scope', function ($scope) {
            var modal = this;

            modal.hideModal = function ($event) {
                modal.modalIsVisible = !$event.target.classList.contains('overlay');
            };

            modal.showModal = function () {
                modal.modalIsVisible = true;
            }

            $scope.$on('showmodal', function ($event, data) {
                if (data && data.id === modal.modalId) {
                    modal.showModal();
                }
            });

            $scope.$on('hidemodal', function ($event) {
                $event.target = {
                    classList: {
                        contains: function () { return true; }
                    }
                };
                modal.hideModal($event);
            });
        }]
    });
}());