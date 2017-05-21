<html>

<body>
 <div id="suggestions">   
    <form action="suggestion.php" method="post">
        <div class="form-group">  
                    <label for="title">Miejsce:</label>
                    <input type="text" class="form-control" id="title" name="title">
                    <label for="TextArea">Opis:</label>
                    <textarea class="form-control" id="TextArea" rows="5" name="description"></textarea>
                    <label for="email">Adres e-mail:</label>
                    <input type="email" class="form-control" id="email" name="email">
                    <br>
                    <button type="submit" class="btn btn-default">Wyślij</button>
                </div>
    </form>
    <?php 
        $connection = @mysql_connect('mysql.ct8.pl', 'm2913_Przemek', 'Uek123') 
        or die('Brak połączenia z serwerem MySQL'); 
        mysql_query("SET NAMES 'utf8'");
        $db = @mysql_select_db('m2913_uekmap', $connection) 
        or die('Nie mogę połączyć się z bazą danych'); 

        $wynik = mysql_query("SELECT * FROM Sugestie") 
        or die('Błąd zapytania'); 

        if(mysql_num_rows($wynik) > 0) { 
            echo "<div class='container'>";
            echo "<h3>Ostatnio dodane sugestie:</h3>";
            echo "<table class='table table-striped'>";
            echo "<thead>";
            echo "<tr>";
            echo "<th>Miejsce</th>";
            echo "<th>Opis</th>";
            echo "<th>Adres e-mail</th>";
            echo "</tr>";
            echo "</thead>";
            echo "<tbody>";
            while($r = mysql_fetch_assoc($wynik)) { 
                echo "<tr>"; 
                echo "<td>".$r['title']."</td>"; 
                echo "<td>".$r['description']."</td>";  
                echo "<td>".$r['mail']."</td>";
                echo "</tr>"; 
                } 
            echo "</tbody>";
            echo "</table>"; 
            echo "</div>"; 
        } 
    ?>

 </div>
</body>
 
</html>