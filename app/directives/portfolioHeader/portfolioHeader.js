define(['app'], function(app)
{
    app.directive('portfolioHeader', ['translationService', '$location', 'searchService', '$mdDialog',
     function(translationService, $location, searchService, $mdDialog) {
        return {
            scope: true,
            templateUrl: 'directives/portfolioHeader/portfolioHeader.html',
            controller: function ($scope, $location) {
                //TODO: PORTFOLIO HEADER LOGIC
            }
        };
    }]);

    return app;
});
