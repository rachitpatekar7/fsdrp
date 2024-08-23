<?php

$servername = "localhost"; 
$username = "rachit";
$password = "rachit";
$dbname = "rachit"; 


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $pass = $_POST['pass'];
    $confpass = $_POST['confpass'];
    $enquiry = $_POST['enquiry'];

  
    $sql = "INSERT INTO info (namee, email, phone, statee, city, pass, confpass, enquiry) VALUES ($name, $email, $phone, $state, $city, $pass, $confpass, $enquiry)");

   
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }

   

}


$conn->close();
?>

