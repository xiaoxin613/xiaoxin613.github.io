//加载天气查询插件
AMap.plugin('AMap.Weather', function () {
    //创建天气查询实例
    var weather = new AMap.Weather();

    //执行实时天气信息查询
    weather.getLive('杭州市', function (err, data) {
        console.log(err, data);
    });
});