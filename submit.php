<?php
$servername = "localhost";
$username = "rachit"; // replace with your MySQL username
$password = "rachit"; // replace with your MySQL password
$dbname = "rachit"; // replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['username']);
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
    $state = htmlspecialchars($_POST['state']);
    $city = htmlspecialchars($_POST['city']);
    $pass = htmlspecialchars($_POST['password']);
    $confpass = htmlspecialchars($_POST['confirmPassword']);
    $enquiry = isset($_POST['enquiry']) ? htmlspecialchars($_POST['enquiry']) : '';

    $sql = "INSERT INTO info (name, email, phone, state, city, pass, confpass, enquiry)
            VALUES ('$name', '$email', '$phone', '$state', '$city', '$pass', '$confpass', '$enquiry')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
