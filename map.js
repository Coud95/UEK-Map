
function initMap() {
    var uek = { lat: 50.0685492, lng: 19.9549886 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uek,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "poi",
                "stylers": [
                    { "visibility": "off" }
                ]
            }
        ]
    });

    var infoWindowStyle = '<style>#bodyContent{margin-top: 10px; margin-top: 10px; margin-left: auto; margin-right: auto} .firstHeading{text-align: center; background: #2B2B2B; color: #F6F6F6} .placeImage{width: 80%; height: 80%; display: block; margin-left: auto; margin-right: auto} </style>';
    var infoWindowStyleLargePicture = '<style>#content {}#bodyContent{margin-top: 10px; margin-left: auto; margin-right: auto} .firstHeading{text-align: center; background: #2B2B2B; color: #F6F6F6} .placeImage{width: 60%; height: 60%; display: block; margin-left: auto; margin-right: auto;padding:1px; border:1px solid #000; background-color:#000;} </style>';
    var infoWindowStyleVeryLargePicture = '<style>#content {}#bodyContent{margin-top: 10px; margin-left: auto; margin-right: auto} .firstHeading{text-align: center; background: #2B2B2B; color: #F6F6F6} .placeImage{width: 40%; height: 40%; display: block; margin-left: auto; margin-right: auto} </style>';
    // Biblioteka
    var libraryPosition = { lat: 50.068585, lng: 19.955923 };

    var libraryContentString = infoWindowStyle + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Biblioteka Główna Uniwersytetu Ekonomicznego w Krakowie</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="http://kangur.uek.krakow.pl/sites/default/files/biblioteka_0.jpg" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Biblioteka Główna Uniwersytetu Ekonomicznego w Krakowie</b> międzywydziałowa jednostka prowadzącą działalność usługową, dydaktyczną i naukową. Służy także całemu środowisku naukowemu Krakowa i Małopolski. Jest to trzecia co do wielkości biblioteka akademicka Krakowa i druga co do wielkości biblioteka ekonomiczna w Polsce. Zakres tematyczny zbiorów odpowiada profilowi wydziałów Uczelni i obejmuje: nauki ekonomiczne, finanse, zarządzanie, towaroznawstwo oraz nauki społeczne i humanistyczne, a także niektóre nauki techniczne i informatykę.' +
        '</div>' +
        '</div>';
    var libraryIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/yellow_MarkerB.png';
    var ikona = 'http://maps.google.com/mapfiles/kml/pal3/icon20.png';

    var libraryMarker = new google.maps.Marker({
        position: libraryPosition,
        map: map,
        icon: libraryIcon,
        title: 'Biblioteka UEK'
    });
    libraryMarker.addListener('click', function () {
        libraryInfowindow.open(map, libraryMarker);
    });

    var libraryInfowindow = new google.maps.InfoWindow({
        content: libraryContentString,
        maxWidth: 400
    });
    // Pawilon A
    var pavilionAPosition = { lat: 50.069200, lng: 19.954701 };

    var pavilionAContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon A</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="http://i.imgur.com/a9S7BHu.png" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon A</b> jest pawilonem posiadającym 4 piętra, na kórych znajduje się duża ilość laboratoriów komputerowych. ' +
        '</div>' +
        '</div>';
    var pavilionAIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerA.png';

    var pavilionAMarker = new google.maps.Marker({
        position: pavilionAPosition,
        map: map,
        icon: pavilionAIcon,
        title: 'Pawilon A'
    });
    pavilionAMarker.addListener('click', function () {
        pavilionAInfowindow.open(map, pavilionAMarker);
    });

    var pavilionAInfowindow = new google.maps.InfoWindow({
        content: pavilionAContentString,
        maxWidth: 400
    });

    // Pawilon C
    var pavilionCPosition = { lat: 50.069205, lng: 19.955204 };

    var pavilionCContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon C</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20C/uek_pawilon_c_27.jpg" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon C</b> ... ' +
        '</div>' +
        '</div>';
    var pavilionCIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerC.png';

    var pavilionCMarker = new google.maps.Marker({
        position: pavilionCPosition,
        map: map,
        icon: pavilionCIcon,
        title: 'Pawilon C'
    });
    pavilionCMarker.addListener('click', function () {
        pavilionCInfowindow.open(map, pavilionCMarker);
    });

    var pavilionCInfowindow = new google.maps.InfoWindow({
        content: pavilionCContentString,
        maxWidth: 400
    });
    // Pawilon D
    var pavilionDPosition = { lat: 50.069348, lng: 19.954290 };

    var pavilionDContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon D</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="http://i.imgur.com/a9S7BHu.png" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon D</b> ... ' +
        '</div>' +
        '</div>';
    var pavilionDIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerD.png';

    var pavilionDMarker = new google.maps.Marker({
        position: pavilionDPosition,
        map: map,
        icon: pavilionDIcon,
        title: 'Pawilon D'
    });
    pavilionDMarker.addListener('click', function () {
        pavilionDInfowindow.open(map, pavilionDMarker);
    });

    var pavilionDInfowindow = new google.maps.InfoWindow({
        content: pavilionDContentString,
        maxWidth: 400
    });
    // Pawilon B
    var pavilionBPosition = { lat: 50.068835, lng: 19.955398 };

    var pavilionBContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon B</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="http://i.imgur.com/4TZylVo.png" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon B</b> ... ' +
        '</div>' +
        '</div>';
    var pavilionBIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerB.png';

    var pavilionBMarker = new google.maps.Marker({
        position: pavilionBPosition,
        map: map,
        icon: pavilionBIcon,
        title: 'Pawilon B'
    });
    pavilionBMarker.addListener('click', function () {
        pavilionBInfowindow.open(map, pavilionBMarker);
    });

    var pavilionBInfowindow = new google.maps.InfoWindow({
        content: pavilionBContentString,
        maxWidth: 400
    });
    // Pawilon G
    var pavilionGPosition = { lat: 50.069521, lng: 19.953867 };

    var pavilionGContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon G</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/wybrane_zdjecia_uek/Nowy%20Pawilon%20G%20UEK.jpg" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon G</b> ... ' +
        '</div>' +
        '</div>';
    var pavilionGIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerG.png';

    var pavilionGMarker = new google.maps.Marker({
        position: pavilionGPosition,
        map: map,
        icon: pavilionGIcon,
        title: 'Pawilon G'
    });
    pavilionGMarker.addListener('click', function () {
        pavilionGInfowindow.open(map, pavilionGMarker);
    });

    var pavilionGInfowindow = new google.maps.InfoWindow({
        content: pavilionGContentString,
        maxWidth: 400
    });
    // Pawilon E
    var pavilionEPosition = { lat: 50.069069, lng: 19.955859 };

    var pavilionEContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon E</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="http://i.imgur.com/a9S7BHu.png" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon E</b> ... ' +
        '</div>' +
        '</div>';
    var pavilionEIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerE.png';

    var pavilionEMarker = new google.maps.Marker({
        position: pavilionEPosition,
        map: map,
        icon: pavilionEIcon,
        title: 'Pawilon E'
    });
    pavilionEMarker.addListener('click', function () {
        pavilionEInfowindow.open(map, pavilionEMarker);
    });

    var pavilionEInfowindow = new google.maps.InfoWindow({
        content: pavilionEContentString,
        maxWidth: 400
    });
    // Pawilon F
    var pavilionFPosition = { lat: 50.068399, lng: 19.956556 };

    var pavilionFContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon F</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Akademia_Ekonomiczna_w_Krakowie_Pawilon_F.JPG" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon F</b> ... ' +
        '</div>' +
        '</div>';
    var pavilionFIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerF.png';

    var pavilionFMarker = new google.maps.Marker({
        position: pavilionFPosition,
        map: map,
        icon: pavilionFIcon,
        title: 'Pawilon F'
    });
    pavilionFMarker.addListener('click', function () {
        pavilionFInfowindow.open(map, pavilionFMarker);
    });

    var pavilionFInfowindow = new google.maps.InfoWindow({
        content: pavilionFContentString,
        maxWidth: 400
    });
    // Pawilon Ustronie
    var pavilionUstroniePosition = { lat: 50.067984, lng: 19.955589 };

    var pavilionUstronieContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon Ustronie</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20Ustronie/uek_pawilon_ustronie06.jpg" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon Ustronie</b> ... ' +
        '</div>' +
        '</div>';
    var pavilionUstronieIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerU.png';

    var pavilionUstronieMarker = new google.maps.Marker({
        position: pavilionUstroniePosition,
        map: map,
        icon: pavilionUstronieIcon,
        title: 'Pawilon Ustronie'
    });
    pavilionUstronieMarker.addListener('click', function () {
        pavilionUstronieInfowindow.open(map, pavilionUstronieMarker);
    });

    var pavilionUstronieInfowindow = new google.maps.InfoWindow({
        content: pavilionUstronieContentString,
        maxWidth: 400
    });
    // Pawilon Sportowo-dydaktyczny
    var pavilionSPosition = { lat: 50.068066, lng: 19.956422 };

    var pavilionSContentString = infoWindowStyleLargePicture + '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Pawilon Sportowo-dydaktyczny</h1>' +
        '<div id="image">' +
        '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Akademia_Ekonomiczna_w_Krakowie_Basen.JPG" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Pawilon Sportowo-dydaktyczny</b> ... ' +
        '</div>' +
        '</div>';
    var pavilionSIcon = 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerS.png';

    var pavilionSMarker = new google.maps.Marker({
        position: pavilionSPosition,
        map: map,
        icon: pavilionSIcon,
        title: 'Pawilon Sportowo-dydaktyczny'
    });
    pavilionSMarker.addListener('click', function () {
        pavilionSInfowindow.open(map, pavilionSMarker);
    });

    var pavilionSInfowindow = new google.maps.InfoWindow({
        content: pavilionSContentString,
        maxWidth: 400
    });

}




