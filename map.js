
function initMap() {
    var uek = { lat: 50.0685492, lng: 19.9549886 };
    var biblioteka = { lat: 50.068485, lng: 19.955803 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uek
    });
    var contentString = '<style>#bodyContent{} img{width: 80%; height: 80%; display: block; margin-left: auto; margin-right: auto} #image{}</style><div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Biblioteka Główna Uniwersytetu Ekonomicznego w Krakowie</h1>' +
        '<div id="image">' +
        '<img id="tw" src="http://kangur.uek.krakow.pl/sites/default/files/biblioteka_0.jpg" />' +
        '</div>' +
        '<div id="bodyContent">' +
        '<p><b>Biblioteka Główna Uniwersytetu Ekonomicznego w Krakowie</b> międzywydziałowa jednostka prowadzącą działalność usługową, dydaktyczną i naukową. Służy także całemu środowisku naukowemu Krakowa i Małopolski. Jest to trzecia co do wielkości biblioteka akademicka Krakowa i druga co do wielkości biblioteka ekonomiczna w Polsce. Zakres tematyczny zbiorów odpowiada profilowi wydziałów Uczelni i obejmuje: nauki ekonomiczne, finanse, zarządzanie, towaroznawstwo oraz nauki społeczne i humanistyczne, a także niektóre nauki techniczne i informatykę.' +
        '</div>' +
        '</div>';

    var biblioteka = new google.maps.Marker({
        position: biblioteka,
        map: map,
        title: 'Biblioteka UEK'
    });
    biblioteka.addListener('click', function () {
        infowindow.open(map, biblioteka);
    });

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });
}


