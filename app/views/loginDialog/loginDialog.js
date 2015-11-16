define(['app'], function(app)
{
    app.controller('loginController', ['$scope', '$mdDialog', 'authenticationService', '$location', 'translationService',
        function($scope, $mdDialog, authenticationService, $location, translationService) {
			$scope.mobileId = {};
			$scope.validation = {
				error: {}
			};

            $scope.hideLogin = function() {
            	$mdDialog.hide();
            }

			$scope.idCardAuth = function() {
				authenticationService.loginWithIdCard();
			};

			$scope.taatAuth = function() {
				authenticationService.loginWithTaat();
			};

			$scope.mobileIdAuth = function() {
				var idCodeValid = validateIdCode();
				var phoneNumberValid = validatePhoneNumber();

				if (idCodeValid && phoneNumberValid) {
					language = translationService.getLanguage();
					authenticationService.loginWithMobileId($scope.mobileId.phoneNumber, $scope.mobileId.idCode, language,
					mobileIdSuccess, mobileIdFail, mobileIdReceiveChallenge);
				}
			};

			function mobileIdSuccess() {
				$scope.mobileIdChallenge = null;
				$scope.mobileId.idCode = null;
				$scope.mobileId.phoneNumber = null;
			}

			function mobileIdFail() {
				$scope.mobileIdChallenge = null;
			}

			function mobileIdReceiveChallenge(challenge) {
				$scope.mobileIdChallenge = challenge;
			}

			function validateIdCode() {
				$scope.validation.error.idCode = null;

				var isValid = false;

				if (isEmpty($scope.mobileId.idCode)) {
					$scope.validation.error.idCode = "required";
				} else {
					isValid = isIdCodeValid($scope.mobileId.idCode);

					if (!isValid) {
						$scope.validation.error.idCode = "invalid";
					}
				}

				return isValid;
			}

			function validatePhoneNumber() {
				$scope.validation.error.phoneNumber = null;

				var isValid = false;

				if (isEmpty($scope.mobileId.phoneNumber)) {
					$scope.validation.error.phoneNumber = "required";
				} else {
					isValid = isPhoneNumberEstonian($scope.mobileId.phoneNumber);

					if (!isValid) {
						$scope.validation.error.phoneNumber = "notEstonian";
					}
				}

				return isValid;
			}

			function isPhoneNumberEstonian(phoneNumber) {
				return !phoneNumber.startsWith("+") || phoneNumber.startsWith("+372");
			}
        }
    ]);

    return app;
});
