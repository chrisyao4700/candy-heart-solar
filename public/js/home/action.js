function init_map() {
    let mapOptions = {
        center: new google.maps.LatLng(34.0900, -117.8903),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
    let marker = new google.maps.Marker({
        position: {lat: 34.0900, lng: -117.8903},
        map: map
    });
}