(function(angular, undefined) {
  angular.module("ngwhatididApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);