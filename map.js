
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

    var placeMarkers = [
        ['Biblioteka Główna UEK', 50.068585, 19.955923, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/yellow_MarkerB.png', libraryContentString],
        ['Pawilon A', 50.069200, 19.954701, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerA.png', pavilionAContentString],
        ['Pawilon B', 50.068835, 19.955398, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerB.png', pavilionBContentString],
        ['Pawilon C', 50.069205, 19.955204, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerC.png', pavilionCContentString],
        ['Pawilon D', 50.069348, 19.954290, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerD.png', pavilionDContentString],
        ['Pawilon E', 50.069069, 19.955859, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerE.png', pavilionEContentString],
        ['Pawilon F', 50.068399, 19.956556, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerF.png', pavilionFContentString],
        ['Pawilon G', 50.069521, 19.953867, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerG.png', pavilionGContentString],
        ['Pawilon Ustronie', 50.067984, 19.955589, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerU.png', pavilionUstronieContentString],
        ['Pawilon Sportowo-dydaktyczny', 50.068066, 19.956422, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerS.png', pavilionSContentString]
    ];

    var infoWindow = [];
    for (var i = 0; i < placeMarkers.length; i++) {
        var placeMarker = placeMarkers[i];
        var marker = new google.maps.Marker({
            position: { lat: placeMarker[1], lng: placeMarker[2] },
            map: map,
            icon: placeMarker[3],
            title: placeMarker[0]
        });
        infoWindow[i] = new google.maps.InfoWindow({
            content: placeMarker[4],
            maxWidth: 400
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow[i].open(map, marker);
            }
        })(marker, i));


    }

}




