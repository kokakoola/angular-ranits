define(['app'], function(app)
{
    app.controller('addPortfolioDialog', ['$scope', '$mdDialog', 'serverCallService',
        function($scope, $mdDialog, serverCallService) {
    		// get educational contexts
    		serverCallService.makeGet("rest/learningMaterialMetadata/educationalContext", {}, getEducationalContextSuccess, getEducationalContextFail);

    		function getEducationalContextSuccess(data) {
                if (isEmpty(data)) {
                	getEducationalContextFail();
                } else {
                	$scope.educationalContexts = data;
                	$scope.educationalContexts.sort(function(context1, context2) {
                		return context1.id - context2.id;
                	})
                }
        	}

        	function getEducationalContextFail() {
                console.log('Failed to get educational contexts.')
        	}

            $scope.cancel = function() {
                $mdDialog.hide();
            };

            $scope.portfolio = {
            	educationalContext: null,
                tags: ['Tag1', 'Tag2']
            };
        }
    ]);

    app.directive('dopAddPortfolio', [
        function() {
            return {
                scope: true,
                templateUrl: 'directives/addPortfolio/addPortfolio.html',
                controller: function ($scope, $mdDialog) {

                    $scope.ShowAddPortfolioDialog = function() {
                        $mdDialog.show({
                            controller: 'addPortfolioDialog',
                            templateUrl: 'directives/addPortfolio/addPortfolioDialog.html'
                        });
                    };
                }
            };
        }
    ]);

    return app;
});
