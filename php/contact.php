<?php
$servername = "localhost";
$username = "root";
$password = ""; // default XAMPP password
$database = "edtech_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check DB connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// === Input Sanitization ===
function sanitizeInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

$name = sanitizeInput(isset($_POST['name']) ? $_POST['name'] : '');
$email = sanitizeInput(isset($_POST['email']) ? $_POST['email'] : '');
$phone = sanitizeInput(isset($_POST['phone']) ? $_POST['phone'] : '');
$course = sanitizeInput(isset($_POST['course']) ? $_POST['course'] : '');
$message = sanitizeInput(isset($_POST['message']) ? $_POST['message'] : '');

// === Basic Validation ===
if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid form submission.");
}

// === Prepared Statement to prevent SQL injection ===
$stmt = $conn->prepare("INSERT INTO contact_form (name, email, phone, course, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $phone, $course, $message);

if ($stmt->execute()) {
    echo "<script>alert('Message sent successfully!'); window.location.href = '../contact.html';</script>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>
