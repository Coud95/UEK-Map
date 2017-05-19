var markers = [];
var placeMarkers = [[]];
function initMap() {
    var uek = { lat: 50.0685492, lng: 19.9549886 };
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
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
    directionsDisplay.setMap(map);

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
    google.maps.event.addDomListener(window, 'resize', function () {
        var center = map.getCenter();
        map.setCenter(center);
    });
    google.maps.event.trigger(map, "resize");

    var infoBoxStyle = 'a{text-decoration: none; color: red; font-weight: bold} a:hover {color: blue; text-decoration: none; font-weight: bold} #bodyContent{margin-top: 10px; margin-top: 10px; margin-left: auto; margin-right: auto} .firstHeading{text-align: center; background: #2B2B2B; color: #F6F6F6} .placeImage{width: 80%; height: 80%; display: block; margin-left: auto; margin-right: auto; padding:1px; border:1px solid #000; background-color:#000;}';
    var normalImage = '<style>' + infoBoxStyle + '.placeImage{width: 80%; height: 80%; display: block; margin-left: auto; margin-right: auto; padding:1px; border:1px solid #000; background-color:#000;} </style>';
    var largeImage = '<style>' + infoBoxStyle + ' placeImage{width: 60%; height: 60%; display: block; margin-left: auto; margin-right: auto;padding:1px; border:1px solid #000; background-color:#000;} </style>';
    var veryLargeImage = '<style>' + infoBoxStyle + ' .placeImage{width: 40%; height: 40%; display: block; margin-left: auto; margin-right: auto; padding:1px; border:1px solid #000; background-color:#000;} </style>';

    // Name of the place, description, image, image style
    var contents = [
        ['Biblioteka Główna UEK', '- międzywydziałowa jednostka prowadzącą działalność usługową, dydaktyczną i naukową. Służy także całemu środowisku naukowemu Krakowa i Małopolski. Jest to trzecia co do wielkości biblioteka akademicka Krakowa i druga co do wielkości biblioteka ekonomiczna w Polsce. Zakres tematyczny zbiorów odpowiada profilowi wydziałów Uczelni i obejmuje: nauki ekonomiczne, finanse, zarządzanie, towaroznawstwo oraz nauki społeczne i humanistyczne, a także niektóre nauki techniczne i informatykę.', '<img class="placeImage" src="http://kangur.uek.krakow.pl/sites/default/files/biblioteka_0.jpg" />', normalImage],
        ['Pawilon A', '- jest pawilonem posiadającym 4 piętra, na których znajduje się duża ilość laboratoriów komputerowych.', '<img class="placeImage" src="http://i.imgur.com/a9S7BHu.png" />', largeImage],
        ['Pawilon B', '- mieści się pomiędzy pawilonem C oraz E. Posiada osobne wejście.', '<img class="placeImage" src="http://i.imgur.com/4TZylVo.png" />', largeImage],
        ['Pawilon C', '- jest pawilonem, który posiada 7 sal wykładowych. Na poziomie -1 znajduje się szatnia, ksero, kawiarnia \"Kawka i mleczko\" oraz bar \"Pokusa\", a także siłownia.', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20C/uek_pawilon_c_27.jpg" />', largeImage],
        ['Pawilon D', '- mieszczą się w nim 4 sale wykładowe oraz 2 pracownie mikrobiologiczne.', '<img class="placeImage" src="http://i.imgur.com/jVBEcw9.jpg" />', largeImage],
        ['Pawilon E', '- jest to niewielki pawilon, w którego skład wchodzą 3 salę wykładowe, mieści się pomiędzy pawilonem C oraz Biblioteką Główną.', '<img class="placeImage" src="http://i.imgur.com/GQmyqL2.jpg" />', largeImage],
        ['Pawilon F', '- jest to pawilon Finansów. Na poziomie 0 znajduje się szatnia, ksero, bankomat przy wejściu, a także bar \"Bułka z makiem\". ', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Akademia_Ekonomiczna_w_Krakowie_Pawilon_F.JPG" />', largeImage],
        ['Pawilon G', '- jest pawilonem 2 piętrowym. Na poziomie -1 znajduje się szatnia.', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/wybrane_zdjecia_uek/Nowy%20Pawilon%20G%20UEK.jpg" />', largeImage],
        ['Pawilon Ustronie', '- posiada 4 piętra, na dolnym piętrze znajduje się szatnia oraz stołówka.', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20Ustronie/uek_pawilon_ustronie06.jpg" />', largeImage],
        ['Pawilon Sportowo-dydaktyczny', '- jest pawilonem 2 piętrowym. Na poziomie 0 znajduje się szatnia oraz wejście na basen. Na poziomie -1 znajduje się hala sportowa oraz szatnie.', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Akademia_Ekonomiczna_w_Krakowie_Basen.JPG" />', largeImage],
        ['Przystanek autobusowy Uniwersytet Ekonomiczny', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=VW5pd2Vyc3l0ZXQgRWtvbm9taWN6bnkeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', veryLargeImage],
        ['Przystanek autobusowy Uniwersytet Ekonomiczny', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=VW5pd2Vyc3l0ZXQgRWtvbm9taWN6bnkeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', veryLargeImage],
        ['Przystanek autobusowy Rondo Mogilskie', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=Um9uZG8gTW9naWxza2ll" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', veryLargeImage],
        ['Przystanek autobusowy Rondo Mogilskie', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=Um9uZG8gTW9naWxza2ll" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', veryLargeImage],
        ['Przystanek autobusowy Brodowicza', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=QnJvZG93aWN6YQeEeeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Znak_D-15.svg/820px-Znak_D-15.svg.png" />', veryLargeImage],
        ['Przystanek tramwajowy Uniwersytet Ekonomiczny', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=VW5pd2Vyc3l0ZXQgRWtvbm9taWN6bnkeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Znak_D-17.svg/820px-Znak_D-17.svg.png" />', veryLargeImage],
        ['Przystanek tramwajowy Uniwersytet Ekonomiczny', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=VW5pd2Vyc3l0ZXQgRWtvbm9taWN6bnkeEe" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Znak_D-17.svg/820px-Znak_D-17.svg.png" />', veryLargeImage],
        ['Budynek Główny', '- budynek w którym znajdują się m.in. dziekanaty, Dział Sprawy Bytowych Studentów i Doktorantów. Budynek Główny jest Siedzibą Władz Uczelni i Wydziałów oraz administracji centralnej i wydziałowej.  <h5>Historia</h5>Budynek pochodzący z końca XIX wieku (1893 rok), który początkowo pełnił rolę Schroniska dla Chłopców Księcia Aleksandra Lubomirskiego (funkcjonowało w latach 1893-1950). Schronisko miało przyjmować chłopców religii katolickiej z całej Galicji. Pierwotnie schronisko było przeznaczone na 120 osób, ale w wyniku dużego zapotrzebowania zwiększono je na 160 osób. W czasie I wojny światowej i tuż po niej w budynku funkcjonował szpital. W czasie II wojny światowej w budynku stacjonowały wojska niemieckie. Od 1952 roku właścicielem gmachu jest Uniwersytet Ekonomiczny w Krakowie, a budynek pełni funkcję gmachu reprezentacyjnego (tzw. budynek główny Uniwersytetu Ekonomicznego w Krakowie).', '<img class="placeImage" src="http://www.kpaz.uek.krakow.pl/wp-content/uploads/2014/04/g3.jpg" />', largeImage],
        ['Pawilon Księżówka', '- w tym budynku znajduje się sala seminaryjna, a w podziemiach klub Grota.', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Akademia_Ekonomiczna_w_Krakowie_Pawilon_K_Ksiezowka.JPG/250px-Akademia_Ekonomiczna_w_Krakowie_Pawilon_K_Ksiezowka.JPG" />', normalImage],
        ['Klub Grota', '- mieście się w podziemiach budynku \"Księżówka\" blisko pawilonów G oraz D. ', '<img class="placeImage" src="http://i.imgur.com/ZgpTdlS.jpg" />', largeImage],
        ['zaUEK', '- klub studencki, wejście do niego znajduje się od zewnątrz w pawilonie E. <br>Godziny otwarcia<br>poniedziałek-sobota: 8:00 - 22:00<br>niedziela: 8:00 - 16:00', '<img class="placeImage" src="http://i.imgur.com/oHoOqF5.jpg" />', largeImage],
        ['Pokusa', '- bar mieszczący się na poziomie -1 pawilonu C.', '<img class="placeImage" src="http://i.imgur.com/kjlp1dN.jpg" />', normalImage],
        ['Bułka z makiem', '- bar mieści się na 0 poziomie w pawilonie F. Wejście do baru można bezpośrednio z pawilonu F lub z zewnątrz. <br>Godziny otwarcia:<br>poniedziałek–sobota: 8:00 – 19:00<br>niedziela: 8:00 – 16:00', '<img class="placeImage" src="http://i.imgur.com/baw8myl.jpg" />', largeImage],
        ['Sklep', '- dostępne są w nim artykuł spożywcze, papiercznie oraz inne rzeczy, które znajdziemy w większości kiosków.', '<img class="placeImage" src="http://i.imgur.com/UK08wzn.jpg" />', largeImage],
        ['Kort tenisowy', '- znajduje się pomiędzy pawilonem Ustronie a Budynek Głównym.', '<img class="placeImage" src="http://i.imgur.com/0lorrXx.jpg" />', largeImage],
        ['Basen UEK', '- jest dostępny dla studentów w ramach zajęć WF lub odpłatnie. Wejście znajduje się na wprost od wejścia do pawilonu Sportowo-dydaktycznego. ', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20Sportowy/uek_basen01.jpg" />', largeImage],
        ['Dworzec autobusowy Kraków', '- zlokalizowany jest przy ul. Bosackiej 18 w samym centrum miasta. Posiada 39 stanowisk na konstrukcji dwupoziomowej. Infrastruktura dworca składa się łącznie z 37 stanowisk odjazdowych na których realizowane są odprawy pasażerskie, 2 stanowisk wysiadkowych oraz budynku dworca stanowiącego zaplecze usługowo – biurowe. Dworzec został oddany do użytku w listopadzie 2005 r., zastępując dotychczasowy, w miejscu którego powstało centrum handlowe Galeria Krakowska. Budowa dworca stanowiła realizację części przedsięwzięcia koncepcyjno-architektonicznego pod nazwą Krakowskie Centrum Komunikacyjne.', '<img class="placeImage" src="http://mda.malopolska.pl/upload/_PUL4247%20kopia(1).jpg" />', largeImage],
        ['Dworzec PKP Kraków', '- stacja kolejowa w Krakowie, będąca jedną z najważniejszych w południowej Polsce, obsługująca połączenia lokalne i dalekobieżne w ruchu krajowym i międzynarodowym. Według kategoryzacji PKP ma najwyższą kategorię A.', '<img class="placeImage" src="http://pkpsa.pl/images/miasta/940x653xIMG_0246_1.jpg.pagespeed.ic.ClnT-eEpxG.jpg" />', largeImage],
        ['Dom Ogrodnika', '- znajduje się przy wyjeździe z UEK.', '<img class="placeImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Akademia_Ekonomiczna_w_Krakowie_Pawilon_H.JPG/250px-Akademia_Ekonomiczna_w_Krakowie_Pawilon_H.JPG" />', normalImage],
        ['Pętla autobusowa Dworzec Główny Wschód', '<br><br><a href="http://rozklady.mpk.krakow.pl/?lang=PL&akcja=przystanek&rozklad=20170513&przystanek=RHdvcnplYyBHxYLDs3dueSBXc2Now7Nk" target="_blank">Rozkład jazdy</a>', '<img class="placeImage" src="http://kgnat.pl/album56_mpk2014/mpk2014/25_dworzec.jpg" />', normalImage],
        ['Galeria Krakowska', '- galeria handlowa w Krakowie, zlokalizowana przy ul. Pawiej, po zachodniej stronie Dworca Głównego, z którym jest połączona podziemnym tunelem. Galeria Krakowska to jedna z kilku budowli, znajdujących się w projekcie tzw. Nowego Miasta. Budowę rozpoczęto 12 października 2004 roku, a otwarcie nastąpiło 28 września 2006 r.[1]. Na otwarciu galerii pojawiło się około 53 tys. osób. Wraz z galerią wybudowano hotel Andel. Znajduje się on obok głównego wejścia i ma charakterystyczny geometryczny kształt.', '<img class="placeImage" src="http://www.galeriakrakowska.pl/thumbs/resize/900x0/i/filemanager/obiekty/picture/obiekt_457/STA_5737.JPG" />', largeImage],
        ['Stróżówka', '- mieści się w rogu kampusu UEK, po prawej stronie od wejścia od ulicy Rakowickiej.', '<img class="placeImage" src="http://i.imgur.com/oIuRSUk.png" />', largeImage],
        ['Paczkomat InPost', '- mieści się przy pawilonie G, blisko wyjazdu z terenu kampusu.', '<img class="placeImage" src="http://i.imgur.com/o1suqVD.jpg" />', largeImage],
        ['Parking podziemny UEK', '- można dojechać do niego od strony aleji Pułkownika Władysława Beliny-Prażmowskiego', '<img class="placeImage" src="http://i.imgur.com/tLC3Ldq.jpg" />', largeImage],
        ['SJO UEK', '- mieści się w pok 207 paw. Finansów.', '<img class="placeImage" src="https://cj.uek.krakow.pl/sjo_uek.jpg" />', normalImage],
        ['Wejście na UEK', 'od strony ulicy Aleksandra Lubomirskiego', '<img class="placeImage" src="http://i.imgur.com/qB7BCWX.jpg" />', largeImage],
        ['Wejście na UEK', 'od strony ulicy Rakowickiej', '<img class="placeImage" src="http://i.imgur.com/U0qToNv.png" />', largeImage],
        ['Wejście na UEK', 'od strony ulicy Rakowickiej', '<img class="placeImage" src="http://i.imgur.com/zDk1Iic.jpg" />', largeImage],
        ['Wejście na UEK', 'od strony aleji Pułkownika Władysława Beliny-Prażmowskiego', '<img class="placeImage" src="http://i.imgur.com/5ZqZWAe.jpg" />', largeImage],
        ['Stołówka', '- znajduje się w pawilonie Ustronie na poziomie 0.', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20Ustronie/uek_pawilon_ustronie10.jpg" />', largeImage],
        ['Boisko', '- znajduje się pomiędzy pawilonem Ustronie a Budynek Głównym. Jest często zajęte przez rozkładane namioty związane z różnymi wydarzeniami na UEK.', '<img class="placeImage" src="http://i.imgur.com/1kuSCOt.jpg" />', largeImage],
        ['Kawka i mleczko', '- kawiarnia mieszcząca się na poziomie -1 pawilonu C.', '<img class="placeImage" src="http://i.imgur.com/tf00z0m.jpg" />', largeImage],
        ['Parking pod Budynkiem Głównym', '- znajduje się blisko Budynku Głównego. Jest przeznaczony dla pracowników UEK. Parkuje tam kilkadziesiąt samochodów.', '<img class="placeImage" src="http://i.imgur.com/u5laHyd.jpg" />', largeImage],
        ['Parking pod pawilonem sportowo-dydaktycznym', '- znajduje się blisko pawilonu Sportowo-dydaktycznego. Jest przeznaczony dla pracowników UEK. Parkuje tam kilkadziesiąt samochodów.', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20Ustronie/uek_pawilon_ustronie10.jpg" />', largeImage],
        ['Siłownia', '- znajduje się na poziomie -1 pawilonu C, po prawej stronie od szatni.', '<img class="placeImage" src="http://i.imgur.com/wImx5MW.jpg" />', largeImage],
        ['Wejście', '- można dostać się nim do pawilonów C, A, E oraz B.', '<img class="placeImage" src="http://ftppromocja.uek.krakow.pl/Zdjecia%20UEK/pawilon%20C/uek_pawilon_c_27.jpg" />', largeImage]
    ];
    var placeContent = [];
    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        placeContent[i] = content[3] + '<div id="infoContent">' +
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
    placeMarkers = [
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
        ['Przystanek autobusowy Uniwersytet Ekonomiczny', 50.067702, 19.953028, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[10], 'transport'],
        ['Przystanek autobusowy Uniwersytet Ekonomiczny', 50.068333, 19.951752, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[11], 'transport'],
        ['Przystanek autobusowy Rondo Mogilskie', 50.067087, 19.957855, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[12], 'transport'],
        ['Przystanek autobusowy Rondo Mogilskie', 50.067122, 19.959740, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[13], 'transport'],
        ['Przystanek autobusowy Brodowicza', 50.069095, 19.961083, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[14], 'transport'],
        ['Przystanek tramwajowy Uniwersytet Ekonomiczny', 50.068377, 19.952605, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/tramway.png', placeContent[15], 'transport'],
        ['Przystanek tramwajowy Uniwersytet Ekonomiczny', 50.067611, 19.952288, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/tramway.png', placeContent[16], 'transport'],
        ['Budynek Główny', 50.068505, 19.953935, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/orange_MarkerB.png', placeContent[17], 'pavilion'],
        ['Pawilon Księżówka', 50.069163, 19.954131, 'http://v-ie.uek.krakow.pl/~s187161/Google%20Maps%20Markers/darkgreen_MarkerK.png', placeContent[18], 'pavilion'],
        ['Klub Grota', 50.069213, 19.953986, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/bar.png', placeContent[19], 'food'],
        ['zaUEK', 50.069027, 19.955828, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/coffee.png', placeContent[20], 'food'],
        ['Pokusa', 50.069299, 19.954807, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/restaurant.png', placeContent[21], 'food'],
        ['Bułka z makiem', 50.068340, 19.956864, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/restaurant.png', placeContent[22], 'food'],
        ['Sklep', 50.068956, 19.954402, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/conveniencestore.png', placeContent[23], 'other'],
        ['Kort tenisowy', 50.068087, 19.954615, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/tenniscourt.png', placeContent[24], 'sport'],
        ['Basen UEK', 50.067861, 19.956895, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/swimming2.png', placeContent[25], 'sport'],
        ['Dworzec autobusowy Kraków', 50.067811, 19.949707, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/bus.png', placeContent[26], 'transport'],
        ['Dworzec PKP Kraków', 50.067941, 19.947838, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/train.png', placeContent[27], 'transport'],
        ['Dom Ogrodnika', 50.069095, 19.953464, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/garden.png', placeContent[28], 'other'],
        ['Pętla autobusowa Dworzec Główny Wschód', 50.068590, 19.949332, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/busstop.png', placeContent[29], 'transport'],
        ['Galeria Krakowska', 50.067239, 19.946073, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/mall.png', placeContent[30], 'other'],
        ['Stróżówka', 50.068327, 19.952883, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/police.png', placeContent[31], 'other'],
        ['Paczkomat InPost', 50.069316, 19.953608, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/post.png', placeContent[32], 'other'],
        ['Parking podziemny UEK', 50.068623, 19.957292, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/parking.png', placeContent[33], 'other'],
        ['SJO UEK', 50.068445, 19.956759, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/sjo.png', placeContent[34], 'other'],
        ['Wejście na UEK', 50.067567, 19.955650, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/entrance.png', placeContent[35], 'entrance'],
        ['Wejście na UEK', 50.068738, 19.953106, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/entrance.png', placeContent[36], 'entrance'],
        ['Wejście na UEK', 50.069211, 19.953500, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/entrance.png', placeContent[37], 'entrance'],
        ['Wejście na UEK', 50.068541, 19.958013, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/entrance.png', placeContent[38], 'entrance'],
        ['Stołówka', 50.068126, 19.955666, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/restaurant.png', placeContent[39], 'food'],
        ['Boisko', 50.068350, 19.954848, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/basketballfield.png', placeContent[40], 'sport'],
        ['Kawka z mleczkiem', 50.069133, 19.955172, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/coffee.png', placeContent[41], 'food'],
        ['Parking pod Budynkiem Głównym', 50.068054, 19.954270, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/parking.png', placeContent[42], 'other'],
        ['Parking pod pawilonem sportowo-dydaktycznym', 50.068008, 19.955988, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/parking.png', placeContent[43], 'other'],
        ['Siłownia', 50.069213, 19.955450, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/gym.png', placeContent[44], 'sport'],
        ['Wejście', 50.068976, 19.955066, 'http://v-ie.uek.krakow.pl/~s187161/CustomMarkers/entrance.png', placeContent[45], 'entrance']
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
function showTransport() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setVisible(false);
    }
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id === "transport") {
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
function showEntrances() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setVisible(false);
    }
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id === "entrance") {
            markers[i].setVisible(true);
        }
    }

}
function showOther() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setVisible(false);
    }
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id === "other") {
            markers[i].setVisible(true);
        }
    }

}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
        origin: {lat: placeMarkers[start][1], lng: placeMarkers[start][2]},
        destination: {lat: placeMarkers[end][1], lng: placeMarkers[end][2]},
        travelMode: 'WALKING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function findPlace(){
    var place = document.getElementById('find').value;
    var placeUpperCase = place.toUpperCase();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setVisible(false);
    }
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].title.toUpperCase().includes(placeUpperCase)) {
            markers[i].setVisible(true);
        }
    }


}


