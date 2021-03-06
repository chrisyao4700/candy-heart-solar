function init_map() {
    let mapOptions = {
        center: new google.maps.LatLng(34.0900, -117.8903),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
    let marker = new google.maps.Marker({
        position: {lat: 34.1057817, lng: -117.8590719},
        map: map
    });
}

const clickNav = (item) => {
    $('html, body').animate({
        scrollTop: $(item).offset().top
    }, 1000);
};


const clickHeaderBtn = () => {
    $('html, body').animate({
        scrollTop: $('#menu').offset().top
    }, 1000);
    toggleOnlineChatting();
};


function toggleOnlineChatting() {
    Tawk_API.toggle();
}