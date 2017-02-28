angular.module('myApp').controller('mainCtrl', function($scope, $http) {
    var getGoogleLocation = function() {
        return $http({
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=32.7863301,-96.79625279999999&key=AIzaSyBZj7pF8D1r85QEwNwTKYm0H5jDDXeQDo8'
        }).then(function(googleCall) {
            console.log(googleCall)
            var googleCity = googleCall.data.results[0].address_components[3].long_name;
            var googleState = googleCall.data.results[0].address_components[5].short_name;
            var zip = googleCall.data.results[0].address_components[7].short_name;
            var cc = googleCall.data.results[0].address_components[6].short_name;
            console.log(googleCity);
            console.log(googleState);
            var myLocation = {
                city: googleCity,
                state: googleState,
                zip: zip,
                cc: cc,
            }
            console.log(myLocation)
        })
    }
    getGoogleLocation();

    var getSteamApi = function() {
        return $http({
            method: 'GET',
            url:
        }).then(function(result) {
            console.log(result)
            }

        }

    getSteamApi();
})
