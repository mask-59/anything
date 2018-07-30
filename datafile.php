<?php



$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "ovca";

  // Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


if(isset($_GET["speed"])){
    $sql = "select ovca.updatespeed('".$_GET['car']."', '".$_GET['speed']."');";
    $result = $conn->query($sql);
}elseif(isset($_GET['oloc'])){
    $sql = "select ovca.updatelocation('".$_GET['oloc']."', '".$_GET['sloc']."', '".$_GET['floc']."');";
    $result = $conn->query($sql);  };
    $sql = "SELECT * FROM cars";
    $result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo '{';
    while($row = $result->fetch_assoc()) {
        echo   '"'.$row["carname"]. '":'.json_encode($row).',';
    }
    echo '"dead":{}}';
} else {
    echo "0 results";
}



$conn->close();



?>