(function () {
    var httpRequest;

    // Call makeRequest on page load
    window.onload = makeRequest;

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'https://restapi.amap.com/v3/weather/weatherInfo?key=8fce3198c708a252e3a74d8b05a8639d&city=361002');
        httpRequest.send();
        document.querySelector("#weatherText").innerText = "";
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let CityWeather = JSON.parse(httpRequest.responseText);
                if (CityWeather['status'] != 1) {
                    alert('获取信息失败！');
                    return;
                }
                let msg = "我的家乡：" + CityWeather.lives[0].province + "省" + CityWeather.lives[0].city + "；天气：" + CityWeather.lives[0].weather + "；气温：" + CityWeather.lives[0].temperature + "℃";
                document.querySelector("#weatherText").innerText = msg;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
})();