'use strict';

angular.module('indigoelnApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


