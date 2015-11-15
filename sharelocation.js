/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

// for more info see:
// https://developers.google.com/web/fundamentals/native-hardware/user-location/obtain-location?hl=en#testing-geolocation-with-your-site

function shareLocation() {
    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
        window.onload = function () {
            var startPos;
            var geoOptions = {
                timeout: 10 * 1000
            };

            var geoSuccess = function (position) {
                startPos = position;
                document.getElementById('startLat').innerHTML = startPos.coords.latitude;
                document.getElementById('startLon').innerHTML = startPos.coords.longitude;
            };
            var geoError = function (error) {
                console.log('Error occurred. Error code: ' + error.code);
                // error.code can be:
                //   0: unknown error
                //   1: permission denied
                //   2: position unavailable (error response from location provider)
                //   3: timed out
            };

            navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
        };
    }
    else {
        console.log('Geolocation is not supported for this Browser/OS version yet.');
    }
}

shareLocation();