
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

    // Name of the place, description, image, image style
    var contents = [
        ['Biblioteka Główna UEK', 'międzywydziałowa jednostka prowadzącą działalność usługową, dydaktyczną i naukową. Służy także całemu środowisku naukowemu Krakowa i Małopolski. Jest to trzecia co do wielkości biblioteka akademicka Krakowa i druga co do wielkości biblioteka ekonomiczna w Polsce. Zakres tematyczny zbiorów odpowiada profilowi wydziałów Uczelni i obejmuje: nauki ekonomiczne, finanse, zarządzanie, towaroznawstwo oraz nauki społeczne i humanistyczne, a także niektóre nauki techniczne i informatykę.', '<img class="placeImage" src="http://kangur.uek.krakow.pl/sites/default/files/biblioteka_0.jpg" />', infoWindowStyle],
        ['Pawilon A', 'jest pawilonem posiadającym 4 piętra, na których znajduje się duża ilość laboratoriów komputerowych.', '<img class="placeImage" src="http://i.imgur.com/a9S7BHu.png" />', infoWindowStyleLargePicture],
        ['Pawilon B', '...', '<img class="placeImage" src="http://i.imgur.com/4TZylVo.png" />', infoWindowStyleLargePicture],
        ['Pawilon C', '...', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20C/uek_pawilon_c_27.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon D', '...', '<img class="placeImage" src="http://i.imgur.com/a9S7BHu.png" />', infoWindowStyleLargePicture],
        ['Pawilon E', '...', '<img class="placeImage" src="http://i.imgur.com/a9S7BHu.png" />', infoWindowStyleLargePicture],
        ['Pawilon F', '...', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Akademia_Ekonomiczna_w_Krakowie_Pawilon_F.JPG" />', infoWindowStyleLargePicture],
        ['Pawilon G', '...', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/wybrane_zdjecia_uek/Nowy%20Pawilon%20G%20UEK.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon Ustronie', '...', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20Ustronie/uek_pawilon_ustronie06.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon Sportowo-dydaktyczny', '...', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Akademia_Ekonomiczna_w_Krakowie_Basen.JPG" />', infoWindowStyleLargePicture],
    ];
    var placeContent = [];
    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        placeContent[i] = content[3] + '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + content[0] + '</h1>' +
            '<div id="image">' +
            content[2] +
            '</div>' +
            '<div id="bodyContent">' +
            '<p><b>' + content[0] +'</b> ' + content[1]  +
            '</div>' +
            '</div>';
    }
    // title, position, icon, content for Infowindow
    var placeMarkers = [
        ['Biblioteka Główna UEK', 50.068585, 19.955923, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/yellow_MarkerB.png', placeContent[0]],
        ['Pawilon A', 50.069200, 19.954701, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerA.png', placeContent[1]],
        ['Pawilon B', 50.068835, 19.955398, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerB.png', placeContent[2]],
        ['Pawilon C', 50.069205, 19.955204, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerC.png', placeContent[3]],
        ['Pawilon D', 50.069348, 19.954290, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerD.png', placeContent[4]],
        ['Pawilon E', 50.069069, 19.955859, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerE.png', placeContent[5]],
        ['Pawilon F', 50.068399, 19.956556, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerF.png', placeContent[6]],
        ['Pawilon G', 50.069521, 19.953867, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerG.png', placeContent[7]],
        ['Pawilon Ustronie', 50.067984, 19.955589, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerU.png', placeContent[8]],
        ['Pawilon Sportowo-dydaktyczny', 50.068066, 19.956422, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerS.png', placeContent[9]]
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




