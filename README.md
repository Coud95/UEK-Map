# UEK Map

Aplikacja informacyjna zrealizowana przez studentów trzeciego roku Informatyki Stosowanej na Uniwersytecie Ekonomicznym w Krakowie przydatna szczególnie nowym studentom UEKu, której zadaniem jest dostarczenie informacji o wszystkich ważnych miejscach na uczelni umiejscowionych na mapie kampusu UEKu. Wykorzystane zostało API Google Maps oraz API openweathermap.

## Funkcje

- naniesione na mapę markery informujące o konkretnych miejscach znajdujących się na terenie UEKu
- przypisane do markerów zdjęcia oraz opisy istotnych miejsc na terenie kampusu. 
- możliwość wyboru przez użytkownika rodzaju miejsca, skutkujące wyświetleniem elementów z tej kategorii na mapie (np. tylko pawilony)
- wyszukiwarka konkretnych miejsc na terenie kampusu podana przez użytkownika (pawilon, siłownia, biblioteka)
- aktualna pogoda dla miasta Kraków ponad mapą. (API Google Maps nie wspiera już layera związanego z pogodą, użyto API openweathermap)
- wyświetlanie trasy do poszczególnych miejsc na UEKu oraz do ważniejszych punktów w okolicy (np. trasa od pawilonu F do dworca autobusowego)
- pole propozycji od użytkowników aplikacji. Miejsce oraz jego opis będą trafiać do bazy danych, dzięki czemu autorzy aplikacji będą mogli dodać nowe miejsca. 

## Autorzy 

Przemysław Nikiel 187598 KrDZIs3011Io
Rafał Kwiecień 187161 KrDZIs3011Io

## Instrukcja

Aplikacja zawiera 3 główne moduły.

### Mapa

Mapa jest domyślnie zlokalizowana na Uniwersytet Ekonomiczny w Krakowie. Znajdują się na niej markery dotyczące ważniejszych miejsc na UEKu.

##### Markery na mapie
W momencie nakierowania kursora na marker wyświetla się nazwa miejsca z nim skojarzonego. Po kliknięciu na marker wyświetla się okno informacyjne dotyczące miejsca przypisanego do markera. Zawiera ono nazwę miejsca, zdjęcie oraz opis miejsca.
##### Wyszukiwarka
Wyszukiwarka służy do wyszukiwania konkretnych markerów(miejsc) na mapie. Po wpisaniu pełnej frazy (np. "pawilon", "parking") lub nawet niepełnej (np. "skle", "bibli") i wciśnieciu klawisza Enter(lub kliknięcia na znajdującą się obok ikonkę lupy) na mapie pozostaną wyszukane przez użytkownika miejsca.
##### Kategorie miejsc
Pole wyboru kategorii miejsc znajdujące się pod etykietą "Wybierz rodzaj miejsca:" umożliwia poprzez kliknięcie na daną nazwę kategorii 
wyświetlenie jedynie interesujących użytkownika lokacji.(np. wyboór kategorii "Sport" wyświetli tylko miejsca związane ze sportem na UEKu)
##### Trasy
Użytkownik ma do dyspozycji dwa pola wyboru, jedno zawiera początek trasy, a drugie jej koniec. Po wybraniu punktu początkowego z pierwszego menu oraz punktu końcowego wyświetli się trasa.

### Sugestie

Ta część aplikacji umożliwia użytkownikowi wysłanie sugestii do autorów. 
Użytkownik wypełnia pola z nazwą miejsca, opisem miejsca oraz podaje swój e-mail. Po kliknięcie przycisku "Wyślij" użytkownik zostaje przekierowany do mapy, a sugestia zostaje wysłana do bazy danych i umieszczona jako ostatnio dodana sugestia w tymże module,  

### O stronie

Zawiera krótki opis aplikacji oraz dane autorów.

