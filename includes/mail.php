<?php
// Simple mail handler for NeexQ landing forms

header('Content-Type: text/plain');

// Allow only POST (but always return 200 so frontend AJAX success handler runs)
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo 'failer';
    exit;
}

// Helper: safe field getter
function field($key, $default = '')
{
    return isset($_POST[$key]) ? trim((string)$_POST[$key]) : $default;
}

$company   = field('company_name') ?: field('full_name') ?: field('your_name');
$email     = field('email');
$phone     = field('phone');
$location  = field('location');
$comments  = field('comments');
$dateTime  = field('date_time');
$subjectIn = field('subject', 'Website Enquiry');

// Build subject
$subject = 'NeexQ Website: ' . $subjectIn;

// Build message body
$lines = [];
$lines[] = "You have received a new enquiry from the NeexQ website.";
$lines[] = "";
if ($company !== '') {
    $lines[] = "Name / Company : " . $company;
}
if ($email !== '') {
    $lines[] = "Email          : " . $email;
}
if ($phone !== '') {
    $lines[] = "Phone          : " . $phone;
}
if ($location !== '') {
    $lines[] = "Location       : " . $location;
}
if ($dateTime !== '') {
    $lines[] = "Preferred Time : " . $dateTime;
}
if ($comments !== '') {
    $lines[] = "";
    $lines[] = "Comments:";
    $lines[] = $comments;
}
$lines[] = "";
$lines[] = "Page URL       : " . (isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'Unknown');
$lines[] = "IP Address     : " . (isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'Unknown');

$message = implode("\r\n", $lines);

// Recipient
$to = 'neexqtech@gmail.com';

// Basic headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}
$headers[] = 'From: NeexQ Website <no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'neexq-site') . '>';

$success = @mail($to, $subject, $message, implode("\r\n", $headers));

if ($success) {
    echo 'success';
} else {
    echo 'failer';
}
