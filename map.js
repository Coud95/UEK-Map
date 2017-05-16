var markers = [];
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
    google.maps.event.addDomListener(window, 'resize', function () {
        var center = map.getCenter();
        map.setCenter(center);
    });
    google.maps.event.trigger(map, "resize");



    var infoWindowStyle = '<style>a{text-decoration: none; color: red; font-weight: bold} a:hover {color: blue; text-decoration: none; font-weight: bold} #bodyContent{margin-top: 10px; margin-top: 10px; margin-left: auto; margin-right: auto} .firstHeading{text-align: center; background: #2B2B2B; color: #F6F6F6} .placeImage{width: 80%; height: 80%; display: block; margin-left: auto; margin-right: auto; padding:1px; border:1px solid #000; background-color:#000;} </style>';
    var infoWindowStyleLargePicture = '<style>a{text-decoration: none; color: red; font-weight: bold} a:hover {color: blue; text-decoration: none; font-weight: bold}#content {}#bodyContent{margin-top: 10px; margin-left: auto; margin-right: auto} .firstHeading{text-align: center; background: #2B2B2B; color: #F6F6F6} .placeImage{width: 60%; height: 60%; display: block; margin-left: auto; margin-right: auto;padding:1px; border:1px solid #000; background-color:#000;} </style>';
    var infoWindowStyleVeryLargePicture = '<style>a{text-decoration: none; color: red; font-weight: bold} a:hover {color: blue; text-decoration: none; font-weight: bold}#content {}#bodyContent{margin-top: 10px; margin-left: auto; margin-right: auto} .firstHeading{text-align: center; background: #2B2B2B; color: #F6F6F6} .placeImage{width: 40%; height: 40%; display: block; margin-left: auto; margin-right: auto; padding:1px; border:1px solid #000; background-color:#000;} </style>';

    // Name of the place, description, image, image style
    var contents = [
        ['Biblioteka Główna UEK', 'międzywydziałowa jednostka prowadzącą działalność usługową, dydaktyczną i naukową. Służy także całemu środowisku naukowemu Krakowa i Małopolski. Jest to trzecia co do wielkości biblioteka akademicka Krakowa i druga co do wielkości biblioteka ekonomiczna w Polsce. Zakres tematyczny zbiorów odpowiada profilowi wydziałów Uczelni i obejmuje: nauki ekonomiczne, finanse, zarządzanie, towaroznawstwo oraz nauki społeczne i humanistyczne, a także niektóre nauki techniczne i informatykę.', '<img class="placeImage" src="http://kangur.uek.krakow.pl/sites/default/files/biblioteka_0.jpg" />', infoWindowStyle],
        ['Pawilon A', 'jest pawilonem posiadającym 4 piętra, na których znajduje się duża ilość laboratoriów komputerowych.', '<img class="placeImage" src="http://i.imgur.com/a9S7BHu.png" />', infoWindowStyleLargePicture],
        ['Pawilon B', '...', '<img class="placeImage" src="http://i.imgur.com/4TZylVo.png" />', infoWindowStyleLargePicture],
        ['Pawilon C', '...', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20C/uek_pawilon_c_27.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon D', '...', '<img class="placeImage" src="http://i.imgur.com/jVBEcw9.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon E', '...', '<img class="placeImage" src="http://i.imgur.com/GQmyqL2.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon F', '...', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Akademia_Ekonomiczna_w_Krakowie_Pawilon_F.JPG" />', infoWindowStyleLargePicture],
        ['Pawilon G', '...', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/wybrane_zdjecia_uek/Nowy%20Pawilon%20G%20UEK.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon Ustronie', '...', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20Ustronie/uek_pawilon_ustronie06.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon Sportowo-dydaktyczny', '...', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Akademia_Ekonomiczna_w_Krakowie_Basen.JPG" />', infoWindowStyleLargePicture],
        ['Przystanek autobusowy Uniwersytet Ekonomiczny', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=VW5pd2Vyc3l0ZXQgRWtvbm9taWN6bnkeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', infoWindowStyleVeryLargePicture],
        ['Przystanek autobusowy Uniwersytet Ekonomiczny', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=VW5pd2Vyc3l0ZXQgRWtvbm9taWN6bnkeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', infoWindowStyleVeryLargePicture],
        ['Przystanek autobusowy Rondo Mogilskie', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=Um9uZG8gTW9naWxza2ll" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', infoWindowStyleVeryLargePicture],
        ['Przystanek autobusowy Rondo Mogilskie', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=Um9uZG8gTW9naWxza2ll" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', infoWindowStyleVeryLargePicture],
        ['Przystanek autobusowy Brodowicza', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=QnJvZG93aWN6YQeEeeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', infoWindowStyleVeryLargePicture],
        ['Przystanek tramwajowy Uniwersytet Ekonomiczny', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=VW5pd2Vyc3l0ZXQgRWtvbm9taWN6bnkeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Znak_D-17.svg/820px-Znak_D-17.svg.png" />', infoWindowStyleVeryLargePicture],
        ['Przystanek tramwajowy Uniwersytet Ekonomiczny', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=VW5pd2Vyc3l0ZXQgRWtvbm9taWN6bnkeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Znak_D-17.svg/820px-Znak_D-17.svg.png" />', infoWindowStyleVeryLargePicture],
        ['Budynek Główny', '...', '<img class="placeImage" src="http://www.kpaz.uek.krakow.pl/wp-content/uploads/2014/04/g3.jpg" />', infoWindowStyleLargePicture],
        ['Pawilon Księżówka', '...', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Akademia_Ekonomiczna_w_Krakowie_Pawilon_K_Ksiezowka.JPG/250px-Akademia_Ekonomiczna_w_Krakowie_Pawilon_K_Ksiezowka.JPG" />', infoWindowStyle],
        ['Klub Grota', '...', '<img class="placeImage" src="http://i.imgur.com/ZgpTdlS.jpg" />', infoWindowStyleLargePicture],
        ['zaUEK', '...', '<img class="placeImage" src="http://i.imgur.com/oHoOqF5.jpg" />', infoWindowStyleLargePicture],
        ['Pokusa', '...', '<img class="placeImage" src="http://i.imgur.com/kjlp1dN.jpg" />', infoWindowStyle],
        ['Bułka z makiem', '...', '<img class="placeImage" src="http://i.imgur.com/baw8myl.jpg" />', infoWindowStyleLargePicture],
        ['Sklep', '...', '<img class="placeImage" src="http://i.imgur.com/UK08wzn.jpg" />', infoWindowStyleLargePicture],
        ['Kort tenisowy', '...', '<img class="placeImage" src="http://i.imgur.com/0lorrXx.jpg" />', infoWindowStyleLargePicture],
        ['Basen UEK', '...', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20Sportowy/uek_basen01.jpg" />', infoWindowStyleLargePicture],
        ['Dworzec autobusowy Kraków', '...', '<img class="placeImage" src="http://mda.malopolska.pl/upload/_PUL4247%20kopia(1).jpg" />', infoWindowStyleLargePicture],
        ['Dworzec PKP Kraków', '...', '<img class="placeImage" src="http://pkpsa.pl/images/miasta/940x653xIMG_0246_1.jpg.pagespeed.ic.ClnT-eEpxG.jpg" />', infoWindowStyleLargePicture],
        ['Dom Ogrodnika', '...', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Akademia_Ekonomiczna_w_Krakowie_Pawilon_H.JPG/250px-Akademia_Ekonomiczna_w_Krakowie_Pawilon_H.JPG" />', infoWindowStyle],
        ['Pętla autobusowa Dworzec Główny Wschód', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=RHdvcnplYyBHxYLDs3dueSBXc2Now7Nk" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="http://kgnat.pl/album56_mpk2014/mpk2014/25_dworzec.jpg" />', infoWindowStyle],
        ['Galeria Krakowska', '...', '<img class="placeImage" src="http://www.galeriakrakowska.pl/thumbs/resize/900x0/i/filemanager/obiekty/picture/obiekt_457/STA_5737.JPG" />', infoWindowStyleLargePicture]
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
            '<p><b>' + content[0] + '</b> ' + content[1] +
            '</div>' +
            '</div>';
    }
    // title, position, icon, content for Infowindow
    var placeMarkers = [
        ['Biblioteka Główna UEK', 50.068585, 19.955923, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/yellow_MarkerB.png', placeContent[0], 'pavilion'],
        ['Pawilon A', 50.069200, 19.954701, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerA.png', placeContent[1], 'pavilion'],
        ['Pawilon B', 50.068835, 19.955398, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerB.png', placeContent[2], 'pavilion'],
        ['Pawilon C', 50.069205, 19.955204, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerC.png', placeContent[3], 'pavilion'],
        ['Pawilon D', 50.069348, 19.954290, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerD.png', placeContent[4], 'pavilion'],
        ['Pawilon E', 50.069069, 19.955859, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerE.png', placeContent[5], 'pavilion'],
        ['Pawilon F', 50.068399, 19.956556, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerF.png', placeContent[6], 'pavilion'],
        ['Pawilon G', 50.069521, 19.953867, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerG.png', placeContent[7], 'pavilion'],
        ['Pawilon Ustronie', 50.067984, 19.955589, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerU.png', placeContent[8], 'pavilion'],
        ['Pawilon Sportowo-dydaktyczny', 50.068066, 19.956422, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerS.png', placeContent[9], 'pavilion'],
        ['Przystanek autobusowy Uniwersytet Ekonomiczny', 50.067702, 19.953028, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[10], 'stop'],
        ['Przystanek autobusowy Uniwersytet Ekonomiczny', 50.068333, 19.951752, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[11], 'stop'],
        ['Przystanek autobusowy Rondo Mogilskie', 50.067087, 19.957855, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[12], 'stop'],
        ['Przystanek autobusowy Rondo Mogilskie', 50.067122, 19.959740, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[13], 'stop'],
        ['Przystanek autobusowy Brodowicza', 50.069095, 19.961083, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[14], 'stop'],
        ['Przystanek tramwajowy Uniwersytet Ekonomiczny', 50.068377, 19.952605, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/tramway.png', placeContent[15], 'stop'],
        ['Przystanek tramwajowy Uniwersytet Ekonomiczny', 50.067611, 19.952288, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/tramway.png', placeContent[16], 'stop'],
        ['Budynek Główny', 50.068410, 19.954111, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/orange_MarkerB.png', placeContent[17], 'pavilion'],
        ['Pawilon Księżówka', 50.069163, 19.954131, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerK.png', placeContent[18], 'pavilion'],
        ['Klub Grota', 50.069213, 19.953986, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/bar.png', placeContent[19], 'food'],
        ['zaUEK', 50.069027, 19.955828, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/coffee.png', placeContent[20], 'food'],
        ['Pokusa', 50.069299, 19.954807, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/restaurant.png', placeContent[21], 'food'],
        ['Bułka z makiem', 50.068340, 19.956864, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/restaurant.png', placeContent[22], 'food'],
        ['Sklep', 50.068956, 19.954402, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/conveniencestore.png', placeContent[23], 'shop'],
        ['Kort tenisowy', 50.068087, 19.954615, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/tenniscourt.png', placeContent[24], 'sport'],
        ['Basen UEK', 50.067861, 19.956895, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/swimming2.png', placeContent[25], 'sport'],
        ['Dworzec autobusowy Kraków', 50.067809, 19.949147, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/bus.png', placeContent[26], 'transport'],
        ['Dworzec PKP Kraków', 50.067941, 19.947838, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/train.png', placeContent[27], 'transport'],
        ['Dom Ogrodnika', 50.069095, 19.953464, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/police.png', placeContent[28], 'pavilion'],
        ['Pętla autobusowa Dworzec Główny Wschód', 50.068590, 19.949332, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[29], 'stop'],
        ['Galeria Krakowska', 50.067239, 19.946073, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/mall.png', placeContent[30], 'shop']
    ];

    var infoWindow = [];
    
    for (var i = 0; i < placeMarkers.length; i++) {
        var placeMarker = placeMarkers[i];
        var marker = new google.maps.Marker({
            position: { lat: placeMarker[1], lng: placeMarker[2] },
            map: map,
            icon: placeMarker[3],
            title: placeMarker[0],
            id: placeMarker[5]
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
        markers.push(marker);

    }
    
    console.log(markers);

   
    return markers;
    
    

}

function showPavilion() {
         for (var i = 0; i < markers.length; i++) {
            markers[i].setVisible(false);
        }
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].id === "pavilion") {
                markers[i].setVisible(true);
            }
        }
    }

function showFood() {
         for (var i = 0; i < markers.length; i++) {
            markers[i].setVisible(false);
        }
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].id === "food") {
                markers[i].setVisible(true);
            }
        }
    }
function showAll() {
         for (var i = 0; i < markers.length; i++) {
            markers[i].setVisible(true);
        }
        
    }
function showStops() {
         for (var i = 0; i < markers.length; i++) {
            markers[i].setVisible(false);
        }
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].id === "stop") {
                markers[i].setVisible(true);
            }
        }
        
    }
function showSportObjects() {
         for (var i = 0; i < markers.length; i++) {
            markers[i].setVisible(false);
        }
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].id === "sport") {
                markers[i].setVisible(true);
            }
        }
        
    }




