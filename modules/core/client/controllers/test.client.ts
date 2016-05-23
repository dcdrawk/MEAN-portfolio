namespace module {
    'use strict';

    export class ControllerController {
        static $inject: Array<string> = ['$http'];
        constructor(private $http: dependency1Type) {}

    }

    angular
        .module('Module')
        .controller('ControllerController', ControllerController);
}
