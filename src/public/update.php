<?php

include ("db.class.php");

$conn = new Db();
$data = json_decode(file_get_contents("php://input"));

$sql = "update `users` set 
        `name` = '$data->name',
        `username` = '$data->username',
        `email` = '$data->email',
        `phone` = '$data->phone'
         WHERE `id` = $data->id
";
$stmt = $conn->conn->prepare($sql);
$stmt->execute();

$conn->conn = null;
