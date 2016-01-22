 'use strict';

angular.module('indigoelnApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-indigoelnApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-indigoelnApp-params')});
                }
                return response;
            }
        };
    });
