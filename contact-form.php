<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "Mysqlpassword@123";
$dbname = "contact_form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data with isset checks
$name = isset($_POST['user_name']) ? $_POST['user_name'] : '';
$email = isset($_POST['user_email']) ? $_POST['user_email'] : '';
$mobile = isset($_POST['user_mobile']) ? $_POST['user_mobile'] : '';
$subject = isset($_POST['subject']) ? $_POST['subject'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';


// Prepare and bind
$stmt = $conn->prepare("INSERT INTO submissions (name, email, mobile, subject, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $mobile, $subject, $message);

// Execute the query
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>
