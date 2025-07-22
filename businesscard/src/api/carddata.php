<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "business_card_db";
$port = 8889;

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error);
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed."]);
    exit;
}

$sql = "SELECT * FROM cards LIMIT 1";
$result = $conn->query($sql);

$card_data = [];

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();

    $card_data = [
        "name" => $row['name'],
        "title" => $row['title'],
        "profilePicture" => $row['profile_picture'],
        "about" => $row['about'],
        "developerPortfolioUrl" => $row['developer_portfolio_url'],
        "personalTrainingUrl" => $row['personal_training_url'],
        "email" => $row['email'],
        "emailSubject" => $row['email_subject'],
        "emailBody" => $row['email_body'],
        "emailButtonText" => $row['email_button_text'],
        "developerPortfolioButtonText" => $row['developer_portfolio_button_text'],
        "personalTrainingButtonText" => $row['personal_training_button_text'],
        "socials" => [
            "instagram" => $row['instagram_url'],
            "tiktok" => $row['tiktok_url'],
            "github" => $row['github_url'],
            "linkedin" => $row['linkedin_url']
        ],
        "location" => $row['location']
    ];
} else {
    http_response_code(404);
    echo json_encode(["message" => "No business card data found."]);
    $conn->close();
    exit;
}

$conn->close();

echo json_encode($card_data);

?>