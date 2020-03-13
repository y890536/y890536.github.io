//確認是否能利用Geolocation API
if (navigator.geolocation) {
    // 可以利用API
    navigator.geolocation.getCurrentPosition(geoMap, altMap);
} else {
    // 不能利用API
    altMap();
}

/**
 * GeoLocation的顯示
 */
function geoMap(geo) {
    var coord = geo.coords;
    setGoogleMap(coord.latitude, coord.longitude);
};

/**
 * GeoLocation的替代處理
 */
function altMap() {
    //使手動輸入有效
    $('#start').addClass('hide');
    $('#input').removeClass('hide');

    // 透過點選按鈕取得輸入好之經度緯度
    $('#button').on('click', function (event) {
        var lat = $('#latitude').val();
        var lon = $('#longitude').val();
        lat = Number(lat);
        lon = Number(lon);

        if (isNaN(lat) === false && isNaN(lon) === false)
        {
            setGoogleMap(lat, lon);
        }
    });
};

/**
 * 顯示 Google Map
 */
function setGoogleMap(lat, lng) {
    //顯示地圖
    $('#start').addClass('hide');
    $('#input').addClass('hide');
    $('#map').removeClass('hide');

    var point = new google.maps.LatLng(lat, lng);
    var mapOption = {
        center: point,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOption);

    //設定標誌
    var markerOption = {
        position: point,
        map: map,
        draggable: true,
        animation: google.maps.Animation.BOUNCE
    };
    var marker = new google.maps.Marker(markerOption);
}
